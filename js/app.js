// Basic DOM references for the current page.
const questionInput = document.getElementById("questionInput");
const drawButton = document.getElementById("drawButton");
const resetButton = document.getElementById("resetButton");
const resultArea = document.getElementById("resultArea");
// Prepare data reference for future tarot draw logic.
const tarotDeck = Array.isArray(window.tarotCards) ? window.tarotCards : [];
const initialResultMessage = "카드를 뽑으면 이곳에 결과가 표시됩니다.";

// Return one random card from the provided deck.
function getRandomCard(deck) {
  const randomIndex = Math.floor(Math.random() * deck.length);
  return deck[randomIndex];
}

// Return random direction state for tarot interpretation.
function getRandomDirection() {
  return Math.random() < 0.5 ? "upright" : "reversed";
}

// Build result HTML content for the selected card.
function buildResultMarkup(question, card, direction) {
  const isUpright = direction === "upright";
  const directionLabel = isUpright ? "정방향" : "역방향";
  const keywords = isUpright ? card.uprightKeywords : card.reversedKeywords;
  const meaning = isUpright ? card.uprightMeaning : card.reversedMeaning;
  const advice = isUpright ? card.uprightAdvice : card.reversedAdvice;

  return `
    <article class="tarot-result">
      <p class="result-question"><strong>질문</strong> ${question}</p>
      <p class="result-card-line">
        <span class="result-card-name">${card.name}</span>
        <span class="result-direction">${directionLabel}</span>
      </p>
      <div class="result-block">
        <p class="result-label">키워드</p>
        <div class="keyword-list">
          ${keywords.map((keyword) => `<span class="keyword-item">${keyword}</span>`).join("")}
        </div>
      </div>
      <div class="result-block">
        <p class="result-label">해석</p>
        <p class="result-text">${meaning}</p>
      </div>
      <div class="result-block">
        <p class="result-label">조언</p>
        <p class="result-text">${advice}</p>
      </div>
    </article>
  `;
}

// Render the initial empty state message in the result area.
function resetResultView() {
  if (!resultArea) {
    return;
  }

  resultArea.innerHTML = `<p class="result-empty">${initialResultMessage}</p>`;
}

// Draw and render a tarot card result on button click.
drawButton?.addEventListener("click", () => {
  if (!resultArea) {
    return;
  }

  if (tarotDeck.length === 0) {
    resultArea.textContent = "카드 데이터가 비어 있어 결과를 표시할 수 없습니다.";
    return;
  }

  const normalizedQuestion =
    questionInput && questionInput.value.trim().length > 0
      ? questionInput.value.trim()
      : "입력한 질문 없음";
  const selectedCard = getRandomCard(tarotDeck);
  const selectedDirection = getRandomDirection();

  resultArea.innerHTML = buildResultMarkup(normalizedQuestion, selectedCard, selectedDirection);
});

// Reset question input and result view to the initial state.
resetButton?.addEventListener("click", () => {
  if (questionInput) {
    questionInput.value = "";
    questionInput.focus();
  }

  resetResultView();
});

// Ensure the empty result state uses styled markup on page load.
resetResultView();
