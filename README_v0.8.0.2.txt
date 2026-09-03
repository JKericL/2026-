v0.8.0.2 변경사항

- 공개용 '팀(지부)별 대표 MBTI · 주요 기질' 카드 레이아웃 수정
- 좁은 화면/브라우저 확대 시 '상세보기' 버튼이 카드 밖으로 튀어나오던 문제 수정
- 카드 내부를 4열 고정형에서 2행 반응형 구조로 변경
- 1080px 이하에서는 팀 목록을 자동으로 1열 배치
- 모바일에서도 팀명/MBTI/주요 기질/상세보기 버튼이 서로 겹치지 않도록 조정

적용 파일
1. index.html
2. team-overview.css

team-overview.js, app.source.js, app.min.js, style.css, assets, NAS server.py는 변경하지 않습니다.
build-app.bat 실행도 필요하지 않습니다.

적용 후 GitHub Desktop에서 Commit -> Push 하면 됩니다.
