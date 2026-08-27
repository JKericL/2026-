/* v0.6.12.1 NAS 자동 집계 설정
   - Tailscale Funnel 공개 HTTPS 주소를 외부 8443 포트로 변경
   - NAS 내부 Docker API 포트(8093)는 그대로 유지
   - 팀 목록은 NAS의 config/teams.json에서 불러옵니다.
*/
window.MBTI_CONFIG = {
  API_BASE_URL: "https://ljknas.tail9251fa.ts.net:8443",
  AUTO_SUBMIT: true,
  MIN_TEAM_RESULT_COUNT: 3
};
