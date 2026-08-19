# 우리 팀 업무 MBTI v0.1

## 실행 방법
1. 압축을 풉니다.
2. `index.html`을 더블클릭합니다.
3. 별도 설치나 서버 없이 브라우저에서 바로 실행됩니다.

## GitHub Pages에 올리는 방법
1. 새 GitHub Repository를 생성합니다.
2. `index.html`, `style.css`, `app.js`를 Repository 최상단에 업로드합니다.
3. Settings → Pages로 이동합니다.
4. Deploy from a branch → main / root 선택 후 저장합니다.
5. 생성된 `https://계정명.github.io/저장소명/` 주소로 접속합니다.

## 개인정보 관련
- 로그인 기능 없음
- 이름/사번/부서 입력 없음
- 결과 서버 전송 없음
- 모든 계산은 브라우저 JavaScript에서 수행
- 외부 API/DB 사용 없음

## 현재 포함 기능
- 업무 상황형 MBTI 16문항
- 개인 MBTI 및 강점/주의점 결과
- 팀원 MBTI 복수 입력
- 지표별 비율 분석
- 팀 대표 MBTI 산출
- SJ/SP/NT/NF 기질 분석
- 팀 강점 및 맹점 표시
- 개선과제 예시 안내

※ 사내 캠페인용 프로토타입이며 정식 MBTI 심리검사가 아닙니다.


## v0.3 브랜드 디자인 반영
- 제공된 The-K 브랜드관리 매뉴얼의 메인 컬러를 UI에 반영
  - The-K Blue: RGB 33,64,154 (#21409A)
  - The-K Red: RGB 237,27,47 (#ED1B2F)
  - Ivory / Light Gray / Dark Gray 보조색 적용
- 권장서체에 맞춰 Noto Sans CJK KR / Noto Sans 우선 적용(미설치 환경에서는 시스템 한글 고딕으로 대체)
- 상단 TEAM 표기를 공식 The-K 심볼 이미지로 교체
- 외부 폰트/API 호출 없이 기존의 브라우저 단독 실행 구조 유지


## v0.4 변경사항
- 메인 히어로 설명문을 데스크톱에서 한 줄로 표시
- 모바일 화면에서는 자동 줄바꿈 유지


## v0.5 변경사항
- Noto Sans KR 자체 호스팅(webfont) 구조 추가
- assets/fonts 폴더 추가
- 아래 TTF 3개를 직접 넣으면 기기 설치 여부와 관계없이 동일 폰트 사용
  - NotoSansKR-Regular.ttf
  - NotoSansKR-Medium.ttf
  - NotoSansKR-Bold.ttf
- CSS @font-face에서 400 / 500 / 700 굵기 지정
- 외부 Google Fonts/CDN 사용 없음


## v0.6 변경사항
- CI 매뉴얼 Template System(1.22)에 맞춰 히어로 우측의 임의 마름모 그래픽 제거
- 공식 The-K 로고 K의 오른쪽 〈 형태를 추출한 배경 모티프 적용
- 데스크톱/모바일에서 K 모티프가 과도하지 않게 크롭·배치되도록 반응형 조정
- 푸터 버전 표기를 v0.6으로 정리
