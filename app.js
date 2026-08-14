
const questions = [
  {axis:"EI", q:"새로운 업무를 맡았을 때 나는", a:"주변 사람들과 먼저 이야기하며 방향을 잡는다.", b:"혼자 자료를 살펴보고 생각을 정리한 뒤 이야기한다."},
  {axis:"EI", q:"회의에서 의견을 정리할 때 나는", a:"말하면서 생각이 정리되는 편이다.", b:"생각을 충분히 정리한 뒤 발언하는 편이다."},
  {axis:"EI", q:"협업이 필요한 업무에서는", a:"자주 소통하며 진행상황을 맞추는 편이 편하다.", b:"각자 맡은 부분을 집중해 처리한 뒤 맞추는 편이 편하다."},
  {axis:"EI", q:"바쁜 날 에너지를 회복하는 방법은", a:"동료들과 대화하거나 함께 쉬는 것이다.", b:"혼자 조용히 쉬거나 내 일에 집중하는 것이다."},

  {axis:"SN", q:"업무 자료를 검토할 때 먼저 보는 것은", a:"기존 사례, 수치, 구체적인 사실이다.", b:"전체 방향, 의미, 새로운 가능성이다."},
  {axis:"SN", q:"업무 개선안을 생각할 때 나는", a:"현재 방식에서 현실적으로 바꿀 수 있는 부분을 찾는다.", b:"기존 방식과 달라도 더 나은 구조를 상상해본다."},
  {axis:"SN", q:"업무 설명을 들을 때 이해가 잘 되는 방식은", a:"구체적인 사례와 순서를 듣는 것이다.", b:"전체 목적과 개념을 먼저 듣는 것이다."},
  {axis:"SN", q:"새 제도나 시스템을 접하면", a:"검증된 사용법과 기준부터 확인한다.", b:"새롭게 활용할 수 있는 방법부터 떠올린다."},

  {axis:"TF", q:"의사결정을 할 때 상대적으로 더 중요하게 보는 것은", a:"논리, 기준, 효율성이다.", b:"구성원에게 미칠 영향과 수용성이다."},
  {axis:"TF", q:"동료의 업무 오류를 발견하면", a:"무엇이 잘못됐는지 정확히 짚는 것이 우선이다.", b:"상대가 받아들이기 쉽게 전달하는 것이 우선이다."},
  {axis:"TF", q:"의견이 충돌할 때 나는", a:"어느 주장이 더 타당한지 따져본다.", b:"서로 납득할 수 있는 접점을 먼저 찾는다."},
  {axis:"TF", q:"업무를 평가할 때 상대적으로 더 중요하게 보는 것은", a:"결과와 기준 충족 여부다.", b:"과정과 협업에 기여한 정도다."},

  {axis:"JP", q:"업무를 시작할 때 나는", a:"일정과 순서를 미리 정해두는 편이다.", b:"일단 시작하고 상황에 따라 조정하는 편이다."},
  {axis:"JP", q:"마감이 있는 업무에서는", a:"가능하면 여유 있게 끝내두는 편이다.", b:"마감 전까지 수정 가능성을 열어두는 편이다."},
  {axis:"JP", q:"예정에 없던 일이 생기면", a:"기존 계획이 흐트러지는 것이 다소 불편하다.", b:"필요하면 계획을 바꾸는 것이 크게 어렵지 않다."},
  {axis:"JP", q:"업무 방식은", a:"기준과 절차가 명확할수록 편하다.", b:"상황에 맞게 선택할 여지가 있을수록 편하다."}
];

const typeInfo = {
  ISTJ:{name:"신뢰형 관리자", good:["기준과 절차를 안정적으로 지킴","세부사항을 꼼꼼하게 확인","맡은 업무를 끝까지 책임지는 편"], watch:["기존 방식에 익숙해 변화 시도가 늦어질 수 있음","예외 상황에서 유연한 판단이 어려울 수 있음","형식과 절차 자체가 목적화되지 않는지 점검 필요"]},
  ISFJ:{name:"지원형 관리자", good:["구성원을 배려하면서 안정적으로 업무 수행","세부사항과 후속관리에 강함","조용하지만 책임감 있게 업무 지원"], watch:["갈등을 피하느라 필요한 문제제기가 늦을 수 있음","새로운 시도보다 익숙한 방법을 선호할 수 있음","업무 부담을 혼자 떠안지 않는지 점검 필요"]},
  INFJ:{name:"통찰형 조정자", good:["장기적 의미와 사람을 함께 고려","복잡한 상황에서 핵심 방향을 찾는 편","가치와 목적 중심의 개선 아이디어에 강함"], watch:["생각을 충분히 공유하지 않아 의도가 전달되지 않을 수 있음","이상적인 기준이 높아 실행 속도가 늦어질 수 있음","갈등 상황을 지나치게 내면화할 수 있음"]},
  INTJ:{name:"전략형 설계자", good:["복잡한 업무를 구조화하고 개선방향을 설계","장기적 관점에서 비효율을 발견","독립적인 문제해결 능력이 강함"], watch:["충분한 소통 없이 결론을 내릴 수 있음","완성도를 중시해 실행이 늦어질 수 있음","구성원의 감정적 수용성을 놓칠 수 있음"]},
  ISTP:{name:"실용형 해결사", good:["문제 발생 시 빠르게 원인을 파악","불필요한 절차를 줄이는 데 강함","상황 대응과 실무 해결능력이 좋음"], watch:["장기 계획이나 반복관리에는 관심이 떨어질 수 있음","설명 없이 바로 실행해 협업자가 따라오기 어려울 수 있음","규정·기록이 필요한 부분을 놓치지 않는지 점검 필요"]},
  ISFP:{name:"유연형 지원자", good:["상황과 사람에 맞춘 유연한 대응","조용하지만 실질적인 도움을 제공","현장의 불편함을 섬세하게 파악"], watch:["문제제기나 갈등 상황을 미룰 수 있음","장기적 구조개선보다 당장의 해결에 머물 수 있음","기준을 명확히 공유하지 않으면 업무 편차가 생길 수 있음"]},
  INFP:{name:"가치형 탐색자", good:["업무의 의미와 구성원 관점을 잘 살핌","기존 방식의 문제를 새로운 관점에서 발견","자율적인 환경에서 창의성이 높음"], watch:["구체적인 일정·절차 관리가 약해질 수 있음","현실적인 제약보다 이상을 우선할 수 있음","의견 충돌 시 결정이 늦어질 수 있음"]},
  INTP:{name:"분석형 탐구자", good:["원인 분석과 논리적 구조화에 강함","복잡한 문제를 새로운 방식으로 해결","관행을 의심하고 더 나은 방법을 찾는 편"], watch:["분석이 길어져 실행이 늦어질 수 있음","반복적인 운영·관리 업무에 흥미가 떨어질 수 있음","아이디어를 실제 절차로 구체화하는 과정이 필요"]},
  ESTP:{name:"실행형 해결사", good:["상황 판단과 즉각적인 실행력이 좋음","현장에서 빠르게 문제를 해결","변화에 대한 적응력이 높음"], watch:["장기적 리스크나 후속관리를 놓칠 수 있음","빠른 실행이 절차 누락으로 이어지지 않는지 점검 필요","충분한 의견수렴 없이 결정할 수 있음"]},
  ESFP:{name:"활력형 협력자", good:["사람을 연결하고 분위기를 활성화","현장 대응과 협업 추진력이 좋음","구성원의 반응을 빠르게 파악"], watch:["장기 계획과 기록 관리가 부족해질 수 있음","즉각적인 만족을 우선할 수 있음","중요하지만 눈에 잘 띄지 않는 업무를 놓치지 않는지 점검 필요"]},
  ENFP:{name:"아이디어형 촉진자", good:["새로운 아이디어와 변화 추진에 강함","사람들의 참여를 이끌어내는 편","업무의 가능성을 폭넓게 탐색"], watch:["아이디어가 많아 우선순위가 흐려질 수 있음","마무리·반복 관리에 힘이 빠질 수 있음","실행 기준과 담당자를 명확히 할 필요"]},
  ENTP:{name:"혁신형 도전자", good:["기존 관행을 비판적으로 검토","새로운 해결책과 대안을 빠르게 제시","복잡한 문제를 논리적으로 재구성"], watch:["새로운 시도 자체가 목적이 되지 않는지 점검 필요","세부 실행과 후속관리가 약할 수 있음","토론 과정에서 상대의 피로도를 높일 수 있음"]},
  ESTJ:{name:"추진형 관리자", good:["목표와 역할을 명확히 하고 추진","업무 기준과 일정 관리에 강함","책임 소재와 실행력이 분명함"], watch:["속도와 효율을 중시해 의견수렴이 부족할 수 있음","기존 기준이 적절한지 재검토가 늦어질 수 있음","세세한 통제가 구성원의 자율성을 낮추지 않는지 점검 필요"]},
  ESFJ:{name:"협력형 관리자", good:["구성원 간 협업과 조율에 강함","일정·역할을 안정적으로 관리","구성원의 필요와 분위기를 잘 파악"], watch:["갈등을 피하기 위해 원칙 적용이 흔들릴 수 있음","새로운 방식보다 합의된 방식을 선호할 수 있음","다수 의견에 치우치지 않는지 점검 필요"]},
  ENFJ:{name:"조정형 리더", good:["사람과 목표를 연결해 협업을 촉진","구성원의 강점을 끌어내는 편","변화의 필요성을 설득하고 참여를 이끎"], watch:["구성원의 반응을 지나치게 고려해 결정을 늦출 수 있음","개인적 책임감이 과도해질 수 있음","객관적인 기준과 데이터 확인이 필요"]},
  ENTJ:{name:"전략형 추진자", good:["목표 설정과 실행 구조 설계에 강함","비효율을 빠르게 파악하고 개선","복잡한 과제를 조직적으로 추진"], watch:["속도와 결과를 중시해 구성원의 의견을 놓칠 수 있음","과도한 목표 설정으로 부담을 높일 수 있음","과정의 세부 리스크를 충분히 점검할 필요"]}
};

const temperamentInfo = {
  SJ:{name:"관리자형", desc:"질서, 책임, 안정성, 절차를 중시하는 경향", good:["기준과 절차의 일관성","업무 안정성과 책임감","세부 관리와 후속조치"], watch:["기존 관행에 대한 의존","예외 상황에서의 유연성","불필요한 형식·절차의 유지"]},
  SP:{name:"실행가형", desc:"현장 대응, 실용성, 유연성, 빠른 실행을 중시하는 경향", good:["빠른 현장 대응","실용적인 문제해결","환경 변화에 대한 적응"], watch:["장기적 계획과 기록","절차 누락 가능성","반복관리와 후속조치"]},
  NT:{name:"전략가형", desc:"논리, 분석, 혁신, 체계적 개선을 중시하는 경향", good:["구조적 문제해결","새로운 방식의 탐색","복잡한 업무의 체계화"], watch:["과도한 분석","구성원 수용성 부족","아이디어와 실행 간 간극"]},
  NF:{name:"조정자형", desc:"의미, 가치, 관계, 구성원의 성장을 중시하는 경향", good:["소통과 협업","구성원 관점 이해","변화의 의미와 방향 제시"], watch:["의사결정 지연","객관적 기준 부족","갈등 회피 또는 감정 소진"]}
};

function getTemperament(type){
  const s = type[1], t = type[2];
  if(s==="S" && type[3]==="J") return "SJ";
  if(s==="S" && type[3]==="P") return "SP";
  if(s==="N" && t==="T") return "NT";
  return "NF";
}

function renderQuiz(){
  const quiz=document.getElementById("quiz");
  quiz.innerHTML=questions.map((x,i)=>`
    <div class="question">
      <div class="qtitle"><span class="qnum">${String(i+1).padStart(2,"0")}</span>${x.q}</div>
      <div class="options">
        <label class="option"><input type="radio" name="q${i}" value="A"> ${x.a}</label>
        <label class="option"><input type="radio" name="q${i}" value="B"> ${x.b}</label>
      </div>
    </div>`).join("");
  quiz.addEventListener("change",updateProgress);
}

function updateProgress(){
  const answered=questions.filter((_,i)=>document.querySelector(`input[name=q${i}]:checked`)).length;
  document.getElementById("progressText").textContent=`${answered} / ${questions.length}`;
  document.getElementById("progressBar").style.width=`${answered/questions.length*100}%`;
}

function calcType(){
  const scores={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
  for(let i=0;i<questions.length;i++){
    const sel=document.querySelector(`input[name=q${i}]:checked`);
    if(!sel) return null;
    const axis=questions[i].axis;
    const letters=axis.split("");
    scores[sel.value==="A"?letters[0]:letters[1]]++;
  }
  const type =
    (scores.E>=scores.I?"E":"I")+
    (scores.S>=scores.N?"S":"N")+
    (scores.T>=scores.F?"T":"F")+
    (scores.J>=scores.P?"J":"P");
  return {type,scores};
}

function pctPair(a,b){
  const total=a+b || 1;
  return [Math.round(a/total*100),Math.round(b/total*100)];
}

function axisHtml(scores){
  const axes=[["I","E"],["S","N"],["T","F"],["J","P"]];
  return `<div class="axis-list">${
    axes.map(([l,r])=>{
      const [lp,rp]=pctPair(scores[l],scores[r]);
      return `<div class="axis-row">
        <b>${l} ${lp}%</b>
        <div class="bar"><i style="width:${lp}%"></i></div>
        <b class="right">${rp}% ${r}</b>
      </div>`
    }).join("")
  }</div>`;
}

function showPersonal(){
  const r=calcType();
  const box=document.getElementById("personalResult");
  if(!r){
    box.classList.remove("hidden");
    box.innerHTML=`<div class="error">16개 문항에 모두 답해주세요.</div>`;
    return;
  }
  const info=typeInfo[r.type], temp=getTemperament(r.type), tinfo=temperamentInfo[temp];
  box.classList.remove("hidden");
  box.innerHTML=`
    <div class="result-top">
      <div class="type-badge">${r.type}</div>
      <div class="result-title">
        <h3>${info.name}</h3>
        <p>업무 상황에서 나타날 수 있는 경향을 간단히 정리한 결과입니다.</p>
        <div class="copyline"><span class="copybox">${r.type}</span><button class="smallbtn" id="copyPersonal">결과 복사</button></div>
      </div>
    </div>
    ${axisHtml(r.scores)}
    <div class="kiersey"><b>${temp} · ${tinfo.name}</b><br><span>${tinfo.desc}</span></div>
    <div class="dual" style="margin-top:14px">
      <div class="mini good"><h4>업무에서 살릴 수 있는 강점</h4><ul>${info.good.map(x=>`<li>${x}</li>`).join("")}</ul></div>
      <div class="mini watch"><h4>한 번 점검해볼 부분</h4><ul>${info.watch.map(x=>`<li>${x}</li>`).join("")}</ul></div>
    </div>`;
  document.getElementById("copyPersonal").onclick=()=>navigator.clipboard?.writeText(r.type);
  box.scrollIntoView({behavior:"smooth",block:"start"});
}

function parseTeam(){
  const raw=document.getElementById("teamInput").value.toUpperCase();
  return raw.split(/[\s,;/]+/).map(x=>x.trim()).filter(Boolean);
}
function validType(x){return /^[EI][SN][TF][JP]$/.test(x)}

function analyzeTeam(){
  const items=parseTeam();
  const box=document.getElementById("teamResult");
  const invalid=items.filter(x=>!validType(x));
  const valid=items.filter(validType);
  box.classList.remove("hidden");
  if(valid.length===0){
    box.innerHTML=`<div class="error">유효한 MBTI를 1개 이상 입력해주세요. 예: ISTJ, ENFP</div>`;
    return;
  }
  const counts={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
  const tempCounts={SJ:0,SP:0,NT:0,NF:0};
  valid.forEach(t=>{
    [...t].forEach(ch=>counts[ch]++);
    tempCounts[getTemperament(t)]++;
  });
  const teamType =
    (counts.E>counts.I?"E":"I")+
    (counts.S>counts.N?"S":"N")+
    (counts.T>counts.F?"T":"F")+
    (counts.J>counts.P?"J":"P");
  const topTemp=Object.entries(tempCounts).sort((a,b)=>b[1]-a[1])[0][0];
  const info=typeInfo[teamType], tinfo=temperamentInfo[topTemp];
  const dist=Object.entries(tempCounts).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`${k} ${Math.round(v/valid.length*100)}%`).join(" · ");

  box.innerHTML=`
    <div class="result-top">
      <div class="type-badge">${teamType}</div>
      <div class="result-title">
        <h3>우리 팀 대표 MBTI · ${info.name}</h3>
        <p>${valid.length}명의 입력 결과를 지표별로 합산해 계산했습니다.${invalid.length?` (무효 입력 ${invalid.length}개 제외)`:``}</p>
      </div>
    </div>
    ${axisHtml(counts)}
    <div class="kiersey">
      <b>주요 기질 ${topTemp} · ${tinfo.name}</b><br>
      <span>${tinfo.desc}</span>
      <div style="margin-top:8px;font-size:12px;color:#5b6c64">기질 분포 · ${dist}</div>
    </div>
    <div class="dual" style="margin-top:14px">
      <div class="mini good">
        <h4>우리 팀이 살릴 수 있는 강점</h4>
        <ul>${[...new Set([...tinfo.good,...info.good])].slice(0,5).map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>
      <div class="mini watch">
        <h4>우리 팀이 점검해볼 맹점</h4>
        <ul>${[...new Set([...tinfo.watch,...info.watch])].slice(0,5).map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>
    </div>
    <div class="example-box" style="margin-top:14px">
      <div class="tag">다음 단계</div>
      <p style="margin-bottom:0;line-height:1.7">
        위 내용이 실제 우리 팀 업무에서도 나타나는지 확인해보세요.
        실제 사례가 있다면 <b>작은 개선과제 1건</b>을 선정해 실행하고,
        Before → Action → After 방식으로 정리하면 됩니다.
      </p>
      <button class="btn primary" style="margin-top:14px" onclick="go('improve')">개선과제 예시 보기</button>
    </div>`;
  box.scrollIntoView({behavior:"smooth",block:"start"});
}

function go(id){
  document.querySelectorAll(".panel").forEach(x=>x.classList.toggle("active",x.id===id));
  document.querySelectorAll(".step").forEach(x=>x.classList.toggle("active",x.dataset.go===id));
  window.scrollTo({top:document.querySelector(".steps").offsetTop-90,behavior:"smooth"});
}
window.go=go;

document.querySelectorAll("[data-go]").forEach(btn=>btn.addEventListener("click",()=>go(btn.dataset.go)));
document.getElementById("calcPersonal").onclick=showPersonal;
document.getElementById("resetPersonal").onclick=()=>{
  document.querySelectorAll('#quiz input[type=radio]').forEach(x=>x.checked=false);
  document.getElementById("personalResult").classList.add("hidden");
  updateProgress();
};
document.getElementById("analyzeTeam").onclick=analyzeTeam;
document.getElementById("sampleTeam").onclick=()=>{
  document.getElementById("teamInput").value="ISTJ\nISTJ\nINTJ\nESTJ\nISFJ\nISTJ\nENTJ\nISFJ";
};
document.getElementById("clearTeam").onclick=()=>{
  document.getElementById("teamInput").value="";
  document.getElementById("teamResult").classList.add("hidden");
};

renderQuiz();
