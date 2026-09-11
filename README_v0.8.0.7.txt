v0.8.0.7 · WebP 문항 이미지 + 관리자 서버 현황
=================================================

변경 내용
---------
1. 문항 이미지 경로 변경
- assets/question-01.png ~ question-20.png
  -> assets/question-01.webp ~ question-20.webp
- 기존 v0.8.0.4의 다음 문항 사전 로딩(preload) 및 async 디코딩 로직은 그대로 유지

2. 서버 현황 표시를 관리자 페이지로 이동
- 직원용 페이지에는 NAS/API 연결 상태를 표시하지 않음
- admin.html에 '집계 서버 현황' 영역 추가
- 표시 항목:
  · NAS/API 연결 상태
  · API 버전
  · 팀 결과 공개 최소 인원
  · 응답시간(ms)
  · 현재 API 주소
  · 마지막 확인 시각
- '새로고침' 버튼으로 즉시 다시 확인 가능
- /api/health를 사용하므로 NAS server.py 수정은 필요 없음

GitHub에 반영할 파일
--------------------
- app.source.js
- admin.html

assets 확인
-----------
아래 파일 20개가 assets 폴더에 있어야 합니다.
- question-01.webp
- ...
- question-20.webp

기존 question-01.png ~ question-20.png는 새 WebP 적용 확인 후 삭제해도 됩니다.

적용 방법
---------
1. app.source.js와 admin.html을 Git 프로젝트에 덮어쓰기
2. assets의 question-01.webp ~ question-20.webp가 모두 있는지 확인
3. build-app.bat 실행
4. 버전 입력: 0.8.0.7
5. GitHub Desktop에서 app.source.js / app.min.js / index.html / admin.html 변경 확인
6. Commit -> Push

NAS
---
이번 버전에서는 NAS server.py, docker-compose.yml, DB를 수정하지 않습니다.
Docker 재빌드도 필요하지 않습니다.

확인
----
- 직원용 개인 진단에서 1~20번 이미지가 모두 정상 표시되는지 확인
- admin.html에서 '집계 서버 현황'이 '정상'으로 표시되는지 확인
