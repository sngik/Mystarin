# Mystarin

`Mystarin`은 질문을 입력하고 타로 카드 1장을 뽑아 간단한 메시지를 확인하는 정적 웹 프로젝트입니다.  
브랜드 보조 문구 `Mystery Arin`을 상단에 함께 표시하며, GitHub Pages에서 바로 동작하도록 구성했습니다.

## 1) 프로젝트 소개

- 순수 HTML, CSS, Vanilla JavaScript로 만든 타로 카드 MVP
- 서버/DB 없이 브라우저에서 바로 실행 가능
- 다크톤 기반의 신비로운 분위기 UI와 모바일 대응 레이아웃 제공

## 2) 현재 구현된 기능

- 질문 입력 영역 제공 (비워도 동작 가능)
- `카드 뽑기` 클릭 시:
  - 카드 1장 랜덤 선택
  - 정방향/역방향 랜덤 선택
  - 질문, 카드명, 방향, 키워드, 해석, 조언 표시
- `다시 시작` 클릭 시:
  - 질문 입력 초기화
  - 결과 영역 초기 안내 상태로 복원

## 3) 폴더 구조

```text
Mystarin/
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  └─ app.js
├─ data/
│  └─ tarot.js
├─ assets/
└─ README.md
```

## 4) 로컬에서 실행하는 방법

1. 프로젝트 폴더를 엽니다.
2. `index.html` 파일을 브라우저에서 직접 엽니다.
   - Windows: 파일 더블클릭 또는 브라우저에서 `Ctrl + O`로 파일 선택
3. 질문 입력 후 `카드 뽑기` 버튼으로 동작을 확인합니다.

## 5) GitHub Pages로 배포하는 방법

1. GitHub에 새 저장소를 생성합니다.
2. 현재 프로젝트 파일을 저장소 루트에 업로드합니다.
   - `index.html`이 반드시 저장소 루트에 있어야 합니다.
3. 저장소 `Settings > Pages`로 이동합니다.
4. `Build and deployment`에서:
   - Source: `Deploy from a branch`
   - Branch: `main` (또는 사용하는 기본 브랜치) / `/ (root)`
5. 저장 후 잠시 기다리면 배포 URL이 생성됩니다.
6. 생성된 URL에서 카드 뽑기/다시 시작 동작과 레이아웃을 확인합니다.

## 기술 스택

- HTML
- CSS
- Vanilla JavaScript
