// Minimal MVP tarot dataset focused on major arcana.
const tarotCards = [
  {
    name: "바보",
    uprightKeywords: ["새로운 시작", "자유", "가능성"],
    reversedKeywords: ["충동", "준비 부족", "불안정"],
    uprightMeaning:
      "익숙한 틀을 벗어나 새로운 흐름으로 나아갈 시점입니다. 가벼운 용기가 기회를 엽니다.",
    reversedMeaning:
      "방향 없이 움직이거나 준비 없이 시작하면 흐름이 흔들릴 수 있습니다. 먼저 기준을 정리해 보세요.",
    uprightAdvice:
      "완벽함보다 첫걸음을 우선하세요. 작은 실행으로 감각을 확인해 보세요.",
    reversedAdvice:
      "지금은 잠시 속도를 줄이고 계획을 점검하세요. 핵심 우선순위부터 다시 세우세요.",
  },
  {
    name: "마법사",
    uprightKeywords: ["집중", "실행력", "창의성"],
    reversedKeywords: ["분산", "과장", "의도 불분명"],
    uprightMeaning:
      "이미 필요한 자원은 가까이에 있습니다. 의도를 명확히 하면 결과를 만들 수 있습니다.",
    reversedMeaning:
      "에너지가 분산되거나 보여주기식 시도가 이어질 수 있습니다. 목적을 분명히 해야 합니다.",
    uprightAdvice:
      "하나의 목표에 집중하고 바로 실행하세요. 작은 성과를 빠르게 쌓아가세요.",
    reversedAdvice:
      "무리한 확장보다 핵심 한 가지를 정리하세요. 의도와 행동이 일치하는지 확인하세요.",
  },
  {
    name: "여사제",
    uprightKeywords: ["직관", "내면", "관찰"],
    reversedKeywords: ["혼란", "감정 억압", "신호 무시"],
    uprightMeaning:
      "겉으로 드러난 정보보다 내면의 감각이 더 정확할 수 있습니다. 조용한 관찰이 답을 줍니다.",
    reversedMeaning:
      "마음의 신호를 억누르며 판단이 흐려질 수 있습니다. 정서적 피로를 먼저 돌봐야 합니다.",
    uprightAdvice:
      "당장 결론을 서두르지 말고 스스로의 느낌을 기록해 보세요. 핵심 단서가 보일 수 있습니다.",
    reversedAdvice:
      "불안한 정보 소비를 줄이고 휴식 시간을 확보하세요. 감정의 원인을 차분히 분리해 보세요.",
  },
  {
    name: "황제",
    uprightKeywords: ["안정", "구조", "책임"],
    reversedKeywords: ["경직", "통제 과다", "권위 충돌"],
    uprightMeaning:
      "질서를 세우고 기준을 명확히 할수록 상황이 안정됩니다. 책임 있는 선택이 힘이 됩니다.",
    reversedMeaning:
      "지나친 통제나 고집으로 흐름이 막힐 수 있습니다. 유연성을 회복할 필요가 있습니다.",
    uprightAdvice:
      "실행 계획과 기준을 문서로 정리하세요. 반복 가능한 루틴을 만드는 데 집중하세요.",
    reversedAdvice:
      "모든 것을 혼자 쥐려 하지 말고 역할을 나누세요. 유연한 조정이 오히려 성과를 높입니다.",
  },
  {
    name: "연인",
    uprightKeywords: ["선택", "조화", "관계"],
    reversedKeywords: ["갈등", "우유부단", "가치 불일치"],
    uprightMeaning:
      "중요한 선택에서 마음과 현실의 균형이 필요합니다. 관계에서는 솔직한 소통이 핵심입니다.",
    reversedMeaning:
      "기준 없는 선택이 갈등을 키울 수 있습니다. 관계의 기대와 경계를 다시 확인해야 합니다.",
    uprightAdvice:
      "무엇이 나에게 진짜 중요한지 먼저 정리하세요. 핵심 가치에 맞는 결정을 선택하세요.",
    reversedAdvice:
      "불편한 대화를 미루지 마세요. 오해를 줄이기 위해 조건과 기대를 명확히 하세요.",
  },
  {
    name: "전차",
    uprightKeywords: ["추진력", "의지", "전진"],
    reversedKeywords: ["조급함", "방향 상실", "피로 누적"],
    uprightMeaning:
      "목표를 향한 강한 추진력이 살아나는 시기입니다. 집중을 유지하면 진전이 빠르게 나타납니다.",
    reversedMeaning:
      "속도만 앞서면 방향을 놓치기 쉽습니다. 무리한 강행은 피로와 실수를 부를 수 있습니다.",
    uprightAdvice:
      "한 번에 한 목표만 정해 끝까지 밀어보세요. 진행 상황을 짧게 점검하며 전진하세요.",
    reversedAdvice:
      "당장의 속도보다 경로를 다시 확인하세요. 휴식과 재정비를 일정에 포함하세요.",
  },
  {
    name: "은둔자",
    uprightKeywords: ["성찰", "탐색", "지혜"],
    reversedKeywords: ["고립", "폐쇄성", "과도한 신중함"],
    uprightMeaning:
      "외부 소음에서 잠시 벗어나 내 기준을 정리할 때입니다. 깊은 성찰이 정확한 답을 만듭니다.",
    reversedMeaning:
      "혼자만의 판단에 갇혀 시야가 좁아질 수 있습니다. 필요한 연결을 다시 열어야 합니다.",
    uprightAdvice:
      "정보를 줄이고 생각을 정리할 시간을 확보하세요. 핵심 질문 하나에 집중해 보세요.",
    reversedAdvice:
      "믿을 수 있는 사람의 의견을 들어보세요. 혼자 결론 내리기보다 검증 과정을 추가하세요.",
  },
  {
    name: "운명의 수레바퀴",
    uprightKeywords: ["전환", "기회", "흐름 변화"],
    reversedKeywords: ["지연", "반복 패턴", "타이밍 불일치"],
    uprightMeaning:
      "흐름이 바뀌며 새로운 기회가 들어올 수 있습니다. 유연한 대응이 결과를 키웁니다.",
    reversedMeaning:
      "같은 패턴이 반복되며 답답함이 커질 수 있습니다. 원인을 찾아 구조를 바꿔야 합니다.",
    uprightAdvice:
      "변화 신호를 빠르게 포착하고 작은 시도를 시작하세요. 타이밍을 활용해 보세요.",
    reversedAdvice:
      "익숙한 실수 패턴을 기록하고 끊어내세요. 조급함보다 리듬 조정이 먼저입니다.",
  },
  {
    name: "별",
    uprightKeywords: ["희망", "회복", "영감"],
    reversedKeywords: ["의욕 저하", "회의감", "불신"],
    uprightMeaning:
      "지친 흐름 속에서도 회복의 기운이 들어옵니다. 미래에 대한 신뢰가 다시 살아납니다.",
    reversedMeaning:
      "작은 실망이 커져 의욕이 떨어질 수 있습니다. 기대치를 조정하며 회복을 우선해야 합니다.",
    uprightAdvice:
      "작더라도 긍정적인 변화를 매일 확인하세요. 회복 루틴을 꾸준히 유지하세요.",
    reversedAdvice:
      "비교를 줄이고 현재 가능한 것에 집중하세요. 휴식과 정서 관리부터 다시 시작하세요.",
  },
  {
    name: "태양",
    uprightKeywords: ["성공", "명확함", "활력"],
    reversedKeywords: ["과신", "에너지 소진", "지연된 성과"],
    uprightMeaning:
      "상황이 분명해지고 자신감이 회복됩니다. 노력의 결과가 눈에 보이기 시작합니다.",
    reversedMeaning:
      "성과에 대한 조급함이나 과신으로 균형을 잃을 수 있습니다. 페이스 조절이 필요합니다.",
    uprightAdvice:
      "잘한 점을 분명히 인정하고 다음 목표를 구체화하세요. 밝은 에너지를 주변과 나누세요.",
    reversedAdvice:
      "무리한 낙관을 줄이고 현실 계획을 보완하세요. 체력과 일정 관리를 함께 챙기세요.",
  },
];

// Expose tarot data to other scripts without modules.
window.tarotCards = tarotCards;
