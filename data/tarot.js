// Minimal MVP tarot dataset focused on major arcana.
const tarotCards = [
  {
    name: "바보",
    uprightKeywords: ["새 출발", "도전", "가능성"],
    reversedKeywords: ["충동", "준비 부족", "방향 혼선"],
    uprightMeaning:
      "익숙한 흐름에서 벗어나 새로운 시작을 시도하기 좋은 때입니다. 가볍게 움직일수록 기회가 보입니다.",
    reversedMeaning:
      "계획 없이 서두르면 선택이 쉽게 흔들릴 수 있습니다. 시작보다 방향 정리가 먼저 필요한 시점입니다.",
    uprightAdvice:
      "완벽하게 준비하려고 멈추기보다, 작은 실행으로 먼저 감을 잡아보세요.",
    reversedAdvice:
      "속도를 낮추고 우선순위를 다시 정리하세요. 핵심 한 가지부터 차분히 시작하는 편이 좋습니다.",
  },
  {
    name: "마법사",
    uprightKeywords: ["집중", "실행력", "주도권"],
    reversedKeywords: ["산만함", "과장", "의도 불명확"],
    uprightMeaning:
      "이미 필요한 도구와 조건은 갖춰져 있습니다. 방향을 명확히 하면 원하는 결과를 만들 수 있습니다.",
    reversedMeaning:
      "에너지가 여러 곳으로 분산되면 성과가 흐려집니다. 보여주기보다 목적을 먼저 정리해야 합니다.",
    uprightAdvice:
      "지금은 한 목표에 집중해 빠르게 실행하세요. 작은 완료를 쌓는 방식이 가장 효과적입니다.",
    reversedAdvice:
      "할 일을 늘리기보다 핵심 하나를 끝내세요. 말한 방향과 실제 행동이 맞는지 점검해 보세요.",
  },
  {
    name: "여사제",
    uprightKeywords: ["직관", "내면 점검", "신중함"],
    reversedKeywords: ["혼란", "감정 억눌림", "신호 무시"],
    uprightMeaning:
      "지금은 외부 정보보다 내 감각이 더 정확하게 작동합니다. 조용히 관찰하면 핵심이 보입니다.",
    reversedMeaning:
      "마음의 신호를 무시하면 판단이 쉽게 흐려집니다. 피로가 쌓였다면 먼저 컨디션을 회복해야 합니다.",
    uprightAdvice:
      "결론을 서두르지 말고 생각을 짧게 기록해 보세요. 반복되는 감정이 중요한 힌트가 됩니다.",
    reversedAdvice:
      "불필요한 정보 탐색을 줄이고 쉬는 시간을 확보하세요. 감정과 사실을 분리해 정리해 보세요.",
  },
  {
    name: "황제",
    uprightKeywords: ["안정", "질서", "책임감"],
    reversedKeywords: ["경직", "통제 과다", "충돌"],
    uprightMeaning:
      "기준과 원칙을 세울수록 상황이 빠르게 안정됩니다. 책임 있는 선택이 신뢰를 만듭니다.",
    reversedMeaning:
      "고집하거나 통제를 강화하면 관계와 흐름이 막힐 수 있습니다. 지금은 유연한 조정이 필요합니다.",
    uprightAdvice:
      "목표, 기준, 일정을 문서로 정리하세요. 반복 가능한 루틴을 만들면 부담이 크게 줄어듭니다.",
    reversedAdvice:
      "모든 결정을 혼자 쥐지 말고 역할을 나누세요. 조정 여지를 남기면 결과가 더 좋아집니다.",
  },
  {
    name: "연인",
    uprightKeywords: ["선택", "조화", "진정성"],
    reversedKeywords: ["갈등", "우유부단", "불일치"],
    uprightMeaning:
      "중요한 선택에서 마음과 현실의 균형을 맞출 수 있는 시기입니다. 솔직한 대화가 관계를 안정시킵니다.",
    reversedMeaning:
      "기준이 흐린 선택은 갈등을 키울 수 있습니다. 관계에서 기대와 경계를 다시 맞출 필요가 있습니다.",
    uprightAdvice:
      "내가 중요하게 보는 기준을 먼저 정리하세요. 그 기준에 맞는 선택이 후회를 줄여줍니다.",
    reversedAdvice:
      "불편한 주제를 미루지 말고 짧게라도 대화하세요. 조건과 기대를 명확히 하면 오해가 줄어듭니다.",
  },
  {
    name: "전차",
    uprightKeywords: ["추진력", "통제력", "전진"],
    reversedKeywords: ["조급함", "방향 이탈", "과부하"],
    uprightMeaning:
      "목표를 향해 밀어붙일 힘이 충분한 시기입니다. 집중을 유지하면 결과가 빠르게 따라옵니다.",
    reversedMeaning:
      "속도만 올리면 방향을 잃기 쉽습니다. 무리한 강행은 실수와 피로를 함께 키울 수 있습니다.",
    uprightAdvice:
      "한 번에 한 목표만 정하고 끝까지 밀어보세요. 중간 점검은 짧고 자주 가져가면 좋습니다.",
    reversedAdvice:
      "속도보다 경로 점검이 먼저입니다. 일정에 휴식과 재정비 시간을 반드시 넣어두세요.",
  },
  {
    name: "은둔자",
    uprightKeywords: ["성찰", "탐색", "내적 기준"],
    reversedKeywords: ["고립", "폐쇄성", "지연"],
    uprightMeaning:
      "외부 소음에서 거리를 두고 내 기준을 정리하기 좋은 시점입니다. 혼자 정리한 시간이 답을 선명하게 합니다.",
    reversedMeaning:
      "혼자 판단을 반복하면 시야가 좁아질 수 있습니다. 필요한 연결을 끊지 말고 다시 열어야 합니다.",
    uprightAdvice:
      "정보 입력을 줄이고 생각 정리 시간을 확보하세요. 핵심 질문 하나에 집중하는 방식이 효과적입니다.",
    reversedAdvice:
      "신뢰하는 사람 한 명에게 의견을 구해 보세요. 혼자 결론 내리기보다 검증 단계를 추가하세요.",
  },
  {
    name: "운명의 수레바퀴",
    uprightKeywords: ["전환", "기회", "타이밍"],
    reversedKeywords: ["지연", "반복 패턴", "엇박자"],
    uprightMeaning:
      "정체된 흐름이 바뀌며 기회가 들어오는 구간입니다. 변화에 유연하게 대응하면 성과가 커집니다.",
    reversedMeaning:
      "같은 문제를 반복하며 답답함이 커질 수 있습니다. 원인을 짚고 방식 자체를 바꿔야 할 때입니다.",
    uprightAdvice:
      "작은 변화 신호를 놓치지 말고 바로 시도해 보세요. 타이밍을 잡으면 흐름이 유리해집니다.",
    reversedAdvice:
      "반복되는 실수 패턴을 기록해 끊어내세요. 서두르기보다 리듬을 다시 맞추는 게 우선입니다.",
  },
  {
    name: "별",
    uprightKeywords: ["희망", "회복", "안정"],
    reversedKeywords: ["의욕 저하", "회의감", "불안"],
    uprightMeaning:
      "지쳤던 흐름이 점차 회복되며 마음의 여유가 돌아옵니다. 미래를 다시 믿을 근거가 생깁니다.",
    reversedMeaning:
      "작은 실망이 이어지면 의욕이 빠르게 떨어질 수 있습니다. 기대치를 조정하고 회복부터 챙겨야 합니다.",
    uprightAdvice:
      "작은 진전이라도 매일 확인해 보세요. 회복 루틴을 꾸준히 지키는 것이 핵심입니다.",
    reversedAdvice:
      "비교를 줄이고 당장 가능한 일부터 처리하세요. 휴식과 정서 관리부터 다시 리듬을 잡아보세요.",
  },
  {
    name: "태양",
    uprightKeywords: ["성공", "명확함", "활력"],
    reversedKeywords: ["과신", "소진", "성과 지연"],
    uprightMeaning:
      "상황이 분명해지면서 자신감이 살아나는 시기입니다. 노력한 만큼 결과가 눈에 보이기 시작합니다.",
    reversedMeaning:
      "성과를 서두르거나 과신하면 균형이 깨질 수 있습니다. 속도 조절과 체력 관리가 함께 필요합니다.",
    uprightAdvice:
      "잘한 부분을 분명히 인정하고 다음 목표를 구체화하세요. 좋은 흐름을 주변과 나누면 더 오래 갑니다.",
    reversedAdvice:
      "낙관만 믿기보다 현실 계획을 보완하세요. 일정과 체력 관리를 함께 챙겨야 성과가 유지됩니다.",
  },
];

// Expose tarot data to other scripts without modules.
window.tarotCards = tarotCards;
