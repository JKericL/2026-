/* v0.6.11 NAS 자동 집계 테스트 설정
   - Tailscale Funnel 공개 HTTPS 주소 연결
   - 테스트 팀 3개는 NAS의 config/teams.json에서 불러옵니다.
*/
window.MBTI_CONFIG = {
  API_BASE_URL: "https://ljknas.tail9251fa.ts.net",
  AUTO_SUBMIT: true,
  MIN_TEAM_RESULT_COUNT: 3
};
