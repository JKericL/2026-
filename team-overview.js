(()=>{
  "use strict";

  const cfg=window.MBTI_CONFIG||{};
  const apiBase=String(cfg.API_BASE_URL||"").replace(/\/$/,"");
  const tempNames={SJ:"관리자형",SP:"실행가형",NT:"전략가형",NF:"조정자형"};
  let rows=[];

  async function fetchJson(path){
    if(!apiBase) throw new Error("API_NOT_CONFIGURED");
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),7000);
    try{
      const res=await fetch(`${apiBase}${path}`,{signal:controller.signal,headers:{"Content-Type":"application/json"}});
      const data=await res.json().catch(()=>({}));
      if(!res.ok) throw new Error(data.error||`HTTP_${res.status}`);
      return data;
    }finally{clearTimeout(timer);}
  }

  function esc(v){
    return String(v??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  }

  function render(){
    const list=document.getElementById("teamOverviewList");
    const meta=document.getElementById("teamOverviewMeta");
    const search=document.getElementById("teamOverviewSearch");
    if(!list||!meta) return;
    const q=String(search?.value||"").trim().toLowerCase();
    const filtered=rows.filter(r=>!q||String(r.team_name||"").toLowerCase().includes(q));
    const available=rows.filter(r=>r.available).length;
    meta.textContent=`전체 ${rows.length}개 팀(지부) · 결과 공개 ${available}개 · 3명 미만은 집계 중으로 표시`;
    if(!filtered.length){
      list.innerHTML='<div class="team-overview-empty">검색 조건에 맞는 팀(지부)이 없습니다.</div>';
      return;
    }
    list.innerHTML=filtered.map(r=>{
      if(!r.available){
        return `<article class="team-overview-card pending" data-team-code="${esc(r.team_code)}">
          <div class="team-overview-name">${esc(r.team_name)}</div>
          <div class="team-overview-pending-badge">집계 중</div>
        </article>`;
      }
      const temp=esc(r.temperament||"-");
      return `<article class="team-overview-card available" data-team-code="${esc(r.team_code)}">
        <div class="team-overview-name">${esc(r.team_name)}</div>
        <div class="team-overview-mbti">${esc(r.representative_mbti)}</div>
        <div class="team-overview-temp">${temp}<small>${esc(tempNames[r.temperament]||"")}</small></div>
        <button class="team-overview-detail" type="button" data-detail-team="${esc(r.team_code)}">상세보기</button>
      </article>`;
    }).join("");
  }

  function openDetail(code){
    const select=document.getElementById("teamResultSelect");
    const button=document.getElementById("loadTeamResult");
    if(!select||!button) return;
    select.value=code;
    select.dispatchEvent(new Event("change",{bubbles:true}));
    button.click();
    setTimeout(()=>document.getElementById("teamResult")?.scrollIntoView({behavior:"smooth",block:"start"}),120);
  }

  async function load(){
    const list=document.getElementById("teamOverviewList");
    const meta=document.getElementById("teamOverviewMeta");
    if(!list||!meta) return;
    try{
      const data=await fetchJson("/api/team-summaries");
      rows=Array.isArray(data.teams)?data.teams:[];
      render();
    }catch(err){
      meta.textContent="전체 현황을 불러오지 못했습니다.";
      list.innerHTML='<div class="team-overview-error">팀(지부) 전체 현황을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</div>';
    }
  }

  document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("teamOverviewSearch")?.addEventListener("input",render);
    document.getElementById("teamOverviewList")?.addEventListener("click",e=>{
      const btn=e.target.closest("[data-detail-team]");
      if(btn) openDetail(btn.dataset.detailTeam);
    });
    load();
  });
})();
