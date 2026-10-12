---
name: FIVEGOLD
description: "주얼리 필름의 컷으로 구현한 시네마틱 럭셔리 웹 디자인"
colors:
  bg: "#0c0d0e"
  surface: "#191a1b"
  text: "#f1f1ed"
  muted: "#b6b7b4"
  gold: "#cbb890"
  line: "#353637"
  media: "#111213"
  field-stroke: "#555758"
  action-stroke: "#666865"
typography:
  display:
    fontFamily: "FivegoldFilm, FivegoldScreen, sans-serif"
    fontSize: "clamp(44px, 13.8vw, 248px)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.05em"
  headline:
    fontFamily: "FivegoldFilm, FivegoldScreen, sans-serif"
    fontSize: "clamp(56px, 7.2vw, 112px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline-korean:
    fontFamily: "FivegoldScreen, 'Malgun Gothic', sans-serif"
    fontSize: "clamp(42px, 4.2vw, 66px)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.035em"
  title:
    fontFamily: "FivegoldFilm, FivegoldScreen, sans-serif"
    fontSize: "clamp(28px, 3.1vw, 44px)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "FivegoldScreen, 'Malgun Gothic', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  body-copy:
    fontFamily: "FivegoldScreen, 'Malgun Gothic', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "FivegoldScreen, 'Malgun Gothic', sans-serif"
    fontSize: "12px"
    fontWeight: 400
  price:
    fontFamily: "FivegoldFilm, FivegoldScreen, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
  product-name-mobile:
    fontFamily: "FivegoldScreen, 'Malgun Gothic', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  product-meta-mobile:
    fontFamily: "FivegoldFilm, FivegoldScreen, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
  product-price-mobile:
    fontFamily: "FivegoldFilm, FivegoldScreen, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  square: "0px"
  control: "3px"
  sheet-top: "16px 16px 0 0"
spacing:
  gutter: "clamp(24px, 4.5vw, 88px)"
  gutter-tablet: "28px"
  gutter-mobile: "22px"
  gutter-compact: "20px"
  section: "clamp(88px, 9vw, 144px)"
  section-tablet: "90px"
  section-mobile: "76px"
  control-gap: "12px"
  grid-column-gap: "22px"
  grid-row-gap: "42px"
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    rounded: "{rounded.control}"
    padding: "15px 25px"
  button-primary-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.bg}"
    rounded: "{rounded.control}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "15px 25px"
  text-link:
    textColor: "{colors.text}"
    rounded: "{rounded.square}"
    padding: "14px 0"
  search-input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    height: "50px"
  sort-select:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "0 35px 0 15px"
    height: "50px"
  category-filter:
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    padding: "13px 12px"
  category-filter-selected:
    backgroundColor: "#272829"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "13px 12px"
  product-card:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.square}"
    padding: "0"
  navigation:
    textColor: "#dcddda"
  pagination:
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    padding: "0 12px"
  dialog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    width: "calc(100% - 64px)"
---

# Design System: FIVEGOLD

## Overview

**Creative North Star: "주얼리 필름의 컷"**

주얼리 필름의 컷은 금속의 반사, 제품의 형태, 착용 장면, 공간을 서로 다른 크기의 이미지와 큰 산세리프 글자로 연결한다. 사용자가 선택한 시네마틱 럭셔리 방향은 어두운 바탕, 절제된 화면 장치, 넓은 사진과 강한 화면 전환으로 구현되어 있다.

화보 영역은 비대칭 배치와 여백으로 장면의 호흡을 만든다. 제품 탐색 영역은 사진과 이름·가격을 명확하게 정렬하고 검색·정렬·품목 선택을 같은 위치에서 제공한다. 큰 연출과 작은 조작 요소가 각자의 역할을 유지하며, 한국어는 읽기 좋은 산세리프 글꼴로 표현한다.

이 문서는 구현된 다섯 페이지의 시각 규칙을 기록한다. 색상·글꼴·간격·구성요소의 기준값은 위 frontmatter가 소유하며, 움직임과 반응형 경계 및 독립 미리보기는 [design.json](design.json)에 기록한다. 제품의 사실·범위는 [PRODUCT.md](PRODUCT.md), 개별 장면의 배치는 화면 계약을 따른다.

**Key Characteristics:**

- 넓은 영상·사진과 큰 영문 타이틀의 크기 대비
- 사진의 비대칭 배치와 직선적인 프레임
- 밝은 은색 본문과 차분한 샴페인색 상호작용
- 동작 줄이기 설정과 키보드 탐색을 함께 지원

## Colors

검정에 가까운 잉크색과 차분한 은색을 중심으로, 샴페인색이 상호작용을 표시한다. 정확한 색 값은 frontmatter의 같은 이름 토큰을 따른다.

### Primary

- **샴페인 빛 (`gold`):** 포커스 외곽선, 입력 커서, 선택 영역, 버튼과 링크의 호버에 사용한다. 사진의 금속색과 경쟁하는 장식 면적으로 확대하지 않는다.

### Neutral

- **잉크 (`bg`):** 페이지와 필름 장면의 기본 바탕.
- **그래파이트 (`surface`):** 상세 대화창, 드롭다운, 일부 조작 요소의 표면.
- **밝은 은색 (`text`):** 주요 제목·본문·가격, 밝은 채움 버튼.
- **차분한 은색 (`muted`):** 설명, 영문 보조 이름, 품목 수와 작은 안내.
- **희미한 경계 (`line`):** 머리글·푸터·결과 상태의 구획선.
- **사진 바탕 (`media`):** 제품 이미지의 어두운 프레임.
- **입력 경계 (`field-stroke`):** 검색·정렬·모바일 품목 버튼의 윤곽.
- **보조 행동 경계 (`action-stroke`):** 외곽선 버튼과 맨 위 이동 버튼의 윤곽.

**The Metal Light Rule.** 샴페인색은 포커스와 상호작용의 강조에 사용한다. 사진 속 금속 자체가 시각적 중심을 이루도록 큰 면적의 금색 장식은 추가하지 않는다.

## Typography

2026년 10월 12일 가독성 보완: 600px 미만 제품명·가격은 14px, 영문 제품명·정렬은 13px을 사용한다. 기존 두 서체의 역할은 유지한다.

**Display Font:** FivegoldFilm — 자체 제공 Manrope 가변 글꼴(200–800), FivegoldScreen·sans-serif 대체 글꼴.

**Body Font:** FivegoldScreen — 자체 제공 Wanted Sans 가변 글꼴(400–1000), Malgun Gothic·sans-serif 대체 글꼴. 전체 한국어 문자 범위를 포함한다.

**Character:** 넓고 정돈된 영문 산세리프와 명확한 한국어 산세리프를 사용한다. 영문 필름 타이틀은 넓은 자간, 한국어 제목과 내부 페이지 제목은 좁은 자간으로 서로 다른 역할을 갖는다. 세리프·필기체·별도의 모노 글꼴은 사용하지 않는다.

### Hierarchy

- **Display (`display`):** 홈 필름의 큰 FIVEGOLD 타이틀. 모든 페이지의 제목 크기로 확대하지 않는다.
- **Headline (`headline`):** 내부 페이지 제목. 한국어 장면 제목에는 `headline-korean`을 사용한다.
- **Title (`title`):** 제품 상세의 영문 제목. 카드의 한국어 이름은 더 작은 본문 계열 크기를 사용한다.
- **Body (`body`, `body-copy`):** 기본 본문과 장면 설명. 장면 설명은 대체로 30–42ch로 제한해 짧은 줄과 여백을 유지한다.
- **Label (`label`):** 검색·정렬 안내, 품목 정보와 기능성 보조 문구의 작은 글자 기준. 고정된 전역 대문자·자간 규칙은 없다.
- **Price (`price`):** 카드 가격. 영문 글꼴과 같은 폭의 숫자(tabular-nums)를 사용해 금액을 정렬한다. 상세 가격은 별도의 더 큰 크기를 사용한다.

브랜드 로고는 작은 벡터 5와 영문 FIVEGOLD 조합이다. HIGH-END JEWELRY는 홈 히어로의 사용자 지정 소개 문구이며 공통 섹션 머리말 규칙이 아니다.

**The Readable Control Rule.** 가격·품목 수·탐색 안내 등 기능을 전달하는 작은 글자는 12px 이상으로 유지한다. 큰 타이틀의 자간을 본문과 제어 요소에 일괄 적용하지 않는다.

## Layout

매장 안내 정보는 768px 미만에서 한 열로 배치하고, 주소·운영 시간·방문 안내는 한글 단어 중간을 끊지 않는다. 600px 미만이며 높이가 700px 이하인 짧은 세로 화면에서는 히어로의 최소 높이를 100svh로 제한하여 타이틀과 하단 안내를 함께 표시한다. 모바일 검색 지우기와 푸터 링크의 조작 높이는 44px 이상이다.

전체 화면은 최대 폭 1680px의 컨테이너와 유동 좌우 여백을 사용한다. 섹션 사이에는 큰 수직 간격을 두고, 사진과 글을 7:5·5:7 또는 서로 다른 비율의 두 열로 배치한다. 모든 영역을 같은 카드 그리드로 맞추지 않는다. 사진의 시각적 크기와 본문 밀도에 따라 장면 구성을 달리한다.

제품 목록은 데스크톱에서 고정 폭 품목 메뉴와 세 열의 제품 그리드로 구성한다. 제품 사진은 정사각형, 품목 사진과 룩북은 주로 4:5 비율이다. 제품 자체를 보여 주는 사진에는 contain, 착용·공간 사진에는 cover를 사용한다.

반응형 경계는 1200·960·600·360px다. 1200px 미만에서 제품 그리드는 두 열이 된다. 960px 미만에서는 데스크톱 내비게이션을 오른쪽 메뉴 서랍으로, 품목 메뉴를 아래 시트로 바꾼다. 600px 미만에서는 화보·브랜드 설명·매장 안내·제품 상세를 한 열로 쌓되, 제품 목록은 두 열을 유지한다. 휴대폰의 기본 좌우 여백과 섹션 간격은 frontmatter의 모바일 토큰을 사용한다. 360px 미만에서는 좌우 여백을 compact 값으로 줄인다.

헤더 높이는 데스크톱 88px, 960px 미만 76px, 600px 미만 72px다. 홈 첫 화면은 100svh를 사용한다. 작은 화면의 한글 철학 문구는 영상 위에서 읽히도록 위쪽 배치와 국소 글자 그림자를 적용한다. 이 좌표는 히어로에만 적용하며 새 화면의 전역 배치 규칙으로 확장하지 않는다.

## Elevation & Depth

깊이는 어두운 표면의 톤 차이, 사진 크기, 일부 이미지와 글의 겹침으로 만든다. 제품 카드와 일반 사진은 평면으로 유지한다. 모달은 짙은 배경막으로 주변을 낮추며, 드롭다운은 그림자로 떠 있는 탐색 상태를 표시한다. 사진 위 글자의 국소 그림자와 그라데이션은 가독성을 위한 처리다.

### Shadow Vocabulary

- **탐색 드롭다운** (`box-shadow: 0 20px 50px rgba(0,0,0,.4)`): 열린 품목 메뉴에만 적용한다. 추가 외곽 테두리는 없다.
- **영상 위 글자** (`text-shadow: 0 2px 14px rgba(0,0,0,.45)`): 데스크톱 히어로의 국소 가독성.
- **휴대폰 영상 위 글자** (`text-shadow: 0 2px 5px rgba(0,0,0,.8), 0 0 16px rgba(0,0,0,.65)`): 밝은 영상 프레임에서도 한글을 읽기 위한 보강.

**The Tonal Surface Rule.** 사진과 제품 카드는 그림자로 띄우지 않는다. 탐색 드롭다운만 주변 화면 위에 놓이는 그림자를 사용한다.

## Shapes

사진과 제품 카드는 직각으로 구성한다. 버튼·입력·일반 대화창에는 거의 직선으로 보이는 작은 모서리(`control`)를 적용한다. 모바일 메뉴 서랍은 직각이며, 아래 품목 시트만 상단 두 모서리(`sheet-top`)를 둥글게 만든다. 알약 모양의 장식 태그는 없다.

구획선과 입력 윤곽은 얇은 1px 선이다. 마스킹 전환은 직사각형의 clip-path를 사용하며, 곡선 장식이나 임의의 사선 프레임으로 바꾸지 않는다.

## Components

### Buttons

절제된 사각형 제어 요소. 밝은 채움 버튼과 투명한 외곽선 버튼을 사용하며, 내부 여백은 frontmatter의 해당 구성요소를 따른다. 기본 최소 높이는 48px다. 호버는 샴페인 채움으로 바뀌고, 방향 화살표가 있다면 4px 이동한다. 포커스는 샴페인 2px 외곽선과 5px 간격으로 표시한다. 외곽선·채움 변화를 0.2초로 처리한다.

텍스트 링크는 아래쪽 얇은 선과 오른쪽 방향 화살표로 이루어진다. 기본 최소 폭은 180px이며 호버에서 글자와 선이 샴페인색으로 바뀐다.

### Cards / Containers

사진과 정보를 직접 배치하는 평면 제품 카드. 외부 채움·테두리·그림자는 없고, 정사각형 이미지 아래에 한국어 이름, 영문 이름, 가격 순서로 놓는다. 제품 이미지는 잘리지 않는 contain 방식이며 호버에서 1.04배로 확대한다. 이름과 가격의 간격은 목록 전체에서 정렬한다.

품목 타일은 더 긴 4:5 사진을 사용한다. 일부 열을 아래로 어긋나게 배치하는 방식은 화보의 공간 리듬이며 제품 목록의 정렬 규칙으로 옮기지 않는다.

### Inputs / Fields

검색과 정렬은 동일한 높이와 작은 모서리를 가진 어두운 입력 표면이다. 보이는 라벨을 입력 위에 둔다. 검색은 아이콘·텍스트·지우기 버튼을 한 윤곽 안에 놓으며, 내부에 포커스가 들어오면 경계색이 샴페인색으로 바뀐다. 정렬은 네이티브 select를 사용한다. 잘못된 입력·저장 성공 등 존재하지 않는 상태 패턴은 정의하지 않는다.

### Navigation

고정 헤더는 작은 벡터 브랜드 조합, 가운데 내비게이션, 우측 제어 영역으로 구성한다. 현재 페이지와 호버는 밝은 은색 글자와 짧은 아래 선으로 표시한다. 품목 드롭다운은 그래파이트 면과 그림자로 구분하고 품목 수를 작은 영문 숫자로 표시한다.

960px 미만에서는 오른쪽 메뉴 서랍으로 전환한다. 메뉴 링크는 큰 한국어 글자, 얇은 구획선, 넓은 터치 높이를 갖는다. 메뉴는 Esc와 닫기 버튼으로 닫히며 열었던 버튼으로 포커스를 되돌린다.

### Category Filters & Pagination

품목 필터는 알약 태그가 아닌 세로 버튼 목록이다. 기본은 차분한 은색 글자, 호버는 밝은 글자와 조금 밝은 바탕, 선택은 별도의 톤 차이와 aria-pressed로 표시한다. 모바일은 같은 선택을 아래 품목 시트에서 제공한다.

페이지 이동은 44px 이상의 사각형 버튼을 사용한다. 현재 페이지는 밝은 채움과 어두운 숫자로 표시하고, 비활성 방향 버튼은 낮은 불투명도와 동작 불가 상태를 함께 유지한다.

### Product Dialog

네이티브 dialog 안에 큰 제품 사진과 정보를 두 열로 배치한다. 600px 미만에서는 사진 위·정보 아래 한 열로 전환한다. 사진 확대는 1.5배이며 전체 보기로 복귀할 수 있다. 닫기 버튼, Esc, 배경 바깥 클릭이 닫기를 수행하고 목록의 원래 제품으로 포커스를 돌린다. 임시 가격 안내는 읽을 수 있는 작은 글자로 가격 가까이에 놓는다.

### Film Cuts & Motion

홈 영상은 직사각형 프레임이 열리며 등장하고, 한글 철학과 영문 타이틀은 시간차를 두어 들어온다. 뒤 장면은 짧은 직사각형 마스킹과 수직 이동으로 한 번 나타난다. 일반 reveal의 초기 마스크는 아래 35%, 사진은 아래 25%이며 전체를 가려 관찰 이벤트가 멈추지 않게 한다. reveal 완료 상태는 inset(-.25em)으로 글자 하단을 보존한다.

기본 easing은 cubic-bezier(.16,1,.3,1)다. 장면 reveal은 1초, 페이지 컷은 0.6초, 상세창은 0.4초, 메뉴 서랍은 0.55초를 사용한다. 지원되는 브라우저에서만 페이지 View Transition과 데스크톱 스크롤 연동 사진 움직임을 보강한다. 기본 스크롤을 유지하고 동작이 꺼져도 내용은 보인다.

운영체제의 동작 줄이기 설정에서는 영상 대신 포스터를 보여 주며 스크롤 애니메이션·페이지 전환·reveal 마스크를 제거한다.

## Do's and Don'ts

### Do:

- **Do** 큰 영상·사진과 타이틀의 대비를 유지하고, 한국어 본문에는 FivegoldScreen을 사용한다.
- **Do** 사진 영역은 직선 프레임으로 구성하고, 제품 이미지는 잘리지 않도록 contain 배치를 유지한다.
- **Do** 호버와 키보드 포커스가 모두 보이도록 만들고, 기능성 작은 글자는 12px 이상으로 유지한다.
- **Do** 휴대폰에서는 검색·정렬·가격을 읽을 수 있게 유지하면서 화보와 상세 정보를 한 열로 재배치한다.
- **Do** 운영체제의 동작 줄이기 설정에서는 영상 대신 포스터를 보여 주고 전환·마스킹을 제거한다.

### Don't:

- **Don't** 기존의 큰 세리프 타이틀 반복으로 되돌리거나 불필요한 금색 장식 테두리를 추가한다.
- **Don't** 사진마다 그림자·둥근 카드·배지를 덧붙여 제품의 형태를 가린다.
- **Don't** HIGH-END JEWELRY를 모든 섹션의 공통 머리말 패턴으로 확장한다.
- **Don't** 화면 전환을 이유로 스크롤을 가로채거나 동작이 없으면 콘텐츠가 숨도록 만든다.
