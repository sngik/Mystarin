// Basic DOM references for the current page.
const questionInput = document.getElementById("questionInput");
const drawButton = document.getElementById("drawButton");
const resetButton = document.getElementById("resetButton");
const resultArea = document.getElementById("resultArea");
const drawModeOne = document.getElementById("drawModeOne");
const drawModeThree = document.getElementById("drawModeThree");
const categoryButtons = document.querySelectorAll(".category-card");
// Prepare data reference for future tarot draw logic.
const tarotDeck = Array.isArray(window.tarotCards) ? window.tarotCards : [];
const initialResultMessage = "카드를 뽑으면 이곳에 결과가 표시됩니다.";

// Move to selected category section and update active state.
function bindCategoryNavigation() {
  if (!categoryButtons.length) {
    return;
  }

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const targetSection = targetId ? document.getElementById(targetId) : null;

      categoryButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// Return one random card from the provided deck.
function getRandomCard(deck) {
  const randomIndex = Math.floor(Math.random() * deck.length);
  return deck[randomIndex];
}

// Return random direction state for tarot interpretation.
function getRandomDirection() {
  return Math.random() < 0.5 ? "upright" : "reversed";
}

// Return unique random cards without duplicate selection.
function getRandomCards(deck, count) {
  const shuffledDeck = [...deck];

  for (let i = shuffledDeck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }

  return shuffledDeck.slice(0, count);
}

// Build one tarot card block used in single and three-card mode.
function buildCardMarkup(card, direction, cardOrderLabel = "") {
  const isUpright = direction === "upright";
  const directionLabel = isUpright ? "정방향" : "역방향";
  const keywords = isUpright ? card.uprightKeywords : card.reversedKeywords;
  const meaning = isUpright ? card.uprightMeaning : card.reversedMeaning;
  const advice = isUpright ? card.uprightAdvice : card.reversedAdvice;

  return `
    <article class="tarot-result-card">
      ${cardOrderLabel ? `<p class="result-card-order">${cardOrderLabel}</p>` : ""}
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

// Build result HTML for one-card mode.
function buildSingleResultMarkup(question, card, direction) {
  return `
    <article class="tarot-result">
      <p class="result-question"><strong>질문</strong> ${question}</p>
      ${buildCardMarkup(card, direction)}
    </article>
  `;
}

// Build result HTML for three-card mode.
function buildTripleResultMarkup(question, selectedCards) {
  const positionLabels = ["과거", "현재", "미래"];

  return `
    <article class="tarot-result">
      <p class="result-question"><strong>질문</strong> ${question}</p>
      <p class="result-flow-note">과거-현재-미래 흐름으로 해석합니다.</p>
      <div class="result-multi">
        ${selectedCards
          .map((item, index) =>
            buildCardMarkup(item.card, item.direction, positionLabels[index] || `${index + 1}번째 카드`)
          )
          .join("")}
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
  const drawCount = drawModeThree && drawModeThree.checked ? 3 : 1;

  if (drawCount === 1) {
    const selectedCard = getRandomCard(tarotDeck);
    const selectedDirection = getRandomDirection();
    resultArea.innerHTML = buildSingleResultMarkup(normalizedQuestion, selectedCard, selectedDirection);
    return;
  }

  const selectedCards = getRandomCards(tarotDeck, Math.min(3, tarotDeck.length)).map((card) => ({
    card,
    direction: getRandomDirection(),
  }));
  resultArea.innerHTML = buildTripleResultMarkup(normalizedQuestion, selectedCards);
});

// Reset question input and result view to the initial state.
resetButton?.addEventListener("click", () => {
  if (questionInput) {
    questionInput.value = "";
    questionInput.focus();
  }
  if (drawModeOne) {
    drawModeOne.checked = true;
  }

  resetResultView();
});

// Ensure the empty result state uses styled markup on page load.
resetResultView();
bindCategoryNavigation();
