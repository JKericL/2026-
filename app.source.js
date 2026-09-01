
const questions = [
  // E / I : 외부 자극·상호작용을 통한 에너지/사고 정리 vs 내부 숙고 후 상호작용
  {axis:"EI", q:"회의에서 잠시 침묵이 흐를 때 나는?", options:[
    {text:"먼저 의견을 꺼내며 논의를 시작하는 편이다.", score:2},
    {text:"상황을 보다가 필요한 시점에 의견을 보탠다.", score:0},
    {text:"다른 의견을 충분히 들은 뒤 생각을 정리해 말하는 편이다.", score:-2}
  ], tie:1},
  {axis:"EI", q:"협업이 필요한 업무를 진행할 때 나는?", options:[
    {text:"각자 맡은 부분에 집중한 뒤 정해진 시점에 공유하는 편이 편하다.", score:-2},
    {text:"중요한 단계마다 필요한 만큼 소통하는 편이다.", score:0},
    {text:"자주 대화하며 진행상황과 생각을 맞추는 편이 편하다.", score:2}
  ]},
  {axis:"EI", q:"엘리베이터에서 잘 모르는 타부서 직원과 단둘이 마주쳤다면?", options:[
    {text:"가볍게 인사한 뒤 조용히 이동하는 편이다.", score:-2},
    {text:"상대가 말을 걸거나 자연스러운 계기가 있으면 대화한다.", score:0},
    {text:"먼저 가벼운 주제로 말을 건네는 편이다.", score:2}
  ]},
  {axis:"EI", q:"업무 스트레스가 쌓였을 때 나는?", options:[
    {text:"동료와 이야기하면서 생각과 감정을 풀어내는 편이다.", score:2},
    {text:"필요한 부분만 짧게 공유하며 정리한다.", score:0},
    {text:"혼자 시간을 가지며 생각을 정리하는 편이다.", score:-2}
  ]},
  {axis:"EI", q:"처음 맡아보는 업무의 방향을 잡을 때 나는?", options:[
    {text:"자료를 충분히 살펴보고 내 생각을 정리한 뒤 의견을 구한다.", score:-2},
    {text:"자료 확인과 주변 의견 청취를 병행한다.", score:0},
    {text:"관련된 사람들과 먼저 이야기하며 방향을 구체화한다.", score:2}
  ]},

  // S / N : 구체·사실·경험 vs 의미·가능성·전체 맥락
  {axis:"SN", q:"업무 인수인계를 받을 때 가장 도움이 되는 방식은?", options:[
    {text:"업무의 목적과 배경, 전체 흐름을 먼저 설명해 주는 방식", score:-2},
    {text:"기본 가이드와 실제 예시를 함께 보여주는 방식", score:0},
    {text:"처리 순서와 세부사항이 정리된 상세 매뉴얼", score:2}
  ], tie:1},
  {axis:"SN", q:"보고서를 작성할 때 상대적으로 더 신경 쓰는 부분은?", options:[
    {text:"정확한 수치, 근거자료, 세부 오류와 형식", score:2},
    {text:"구체적인 내용과 전체 메시지의 균형", score:0},
    {text:"전체적인 맥락, 핵심 메시지와 향후 방향", score:-2}
  ]},
  {axis:"SN", q:"새로운 아이디어를 요청받았을 때 나는?", options:[
    {text:"기존 방식과 다른 가능성을 폭넓게 떠올려본다.", score:-2},
    {text:"기존 방식에 새로운 요소를 더해본다.", score:0},
    {text:"과거 사례와 검증된 레퍼런스부터 찾아본다.", score:2}
  ]},
  {axis:"SN", q:"회의에서 현실성이 아직 불확실한 아이디어가 나왔다면?", options:[
    {text:"예산·인력·일정 등 실행 조건부터 확인한다.", score:2},
    {text:"아이디어의 장점과 실행 가능성을 함께 검토한다.", score:0},
    {text:"당장 제약보다 아이디어가 열어줄 가능성을 먼저 살펴본다.", score:-2}
  ]},
  {axis:"SN", q:"복잡한 업무 설명을 들을 때 이해가 가장 잘 되는 방식은?", options:[
    {text:"전체 목적과 구조를 먼저 이해한 뒤 세부내용을 보는 방식", score:-2},
    {text:"전체 개요와 구체적인 예시를 함께 듣는 방식", score:0},
    {text:"실제 사례와 단계별 처리방법부터 확인하는 방식", score:2}
  ]},

  // T / F : 기준·논리·결과 vs 관계·수용성·사람에 미치는 영향
  {axis:"TF", q:"동료가 업무상 큰 실수를 해 많이 위축되어 있다면?", options:[
    {text:"우선 상황을 함께 정리하고 재발 방지 방법을 제안한다.", score:2},
    {text:"상황을 듣고 필요한 조언과 격려를 함께 전한다.", score:0},
    {text:"상대의 상태와 감정을 먼저 살피고 안심시키는 편이다.", score:-2}
  ], tie:1},
  {axis:"TF", q:"상사에게 피드백을 받을 때 더 만족스러운 것은?", options:[
    {text:"노력한 과정과 성장한 부분을 인정해 주는 피드백", score:-2},
    {text:"잘한 점과 보완할 점을 균형 있게 알려주는 피드백", score:0},
    {text:"성과와 논리, 개선할 부분을 명확하게 짚어주는 피드백", score:2}
  ]},
  {axis:"TF", q:"기준이나 원칙에 맞지 않는 지시를 받았을 때 나는?", options:[
    {text:"근거와 기준을 확인해 논리적으로 이견을 제시한다.", score:2},
    {text:"상황과 관계를 고려해 적절한 방식으로 의견을 전달한다.", score:0},
    {text:"상대가 불편하지 않도록 표현과 관계를 특히 신경 쓴다.", score:-2}
  ]},
  {axis:"TF", q:"업무 메일을 작성할 때 나의 스타일은?", options:[
    {text:"상대가 어떻게 받아들일지 고려해 인사와 완곡한 표현을 충분히 넣는다.", score:-2},
    {text:"기본적인 인사와 필요한 설명을 넣어 작성한다.", score:0},
    {text:"핵심 내용과 요청사항이 명확하게 보이도록 간결하게 작성한다.", score:2}
  ]},
  {axis:"TF", q:"구성원을 평가해야 한다면 상대적으로 더 중요하게 보는 것은?", options:[
    {text:"성과와 객관적인 기준의 충족 여부", score:2},
    {text:"결과와 과정, 협업을 균형 있게 고려", score:0},
    {text:"협업 기여, 노력과 구성원이 처한 상황까지 폭넓게 고려", score:-2}
  ]},

  // J / P : 계획·구조·마감관리 vs 유연·탐색·상황대응
  {axis:"JP", q:"마감 3일 전, 나의 업무 상태에 가장 가까운 것은?", options:[
    {text:"주요 작업은 거의 마치고 검토·보완 중이다.", score:2},
    {text:"큰 틀은 잡혔고 남은 작업을 집중해서 진행 중이다.", score:0},
    {text:"방향은 알고 있으며 마감이 가까워질수록 집중도가 높아지는 편이다.", score:-2}
  ], tie:1},
  {axis:"JP", q:"예정에 없던 긴급 업무로 오늘 계획이 틀어졌다면?", options:[
    {text:"우선 상황에 맞춰 움직이고 이후 일정을 다시 생각한다.", score:-2},
    {text:"우선순위를 다시 정해 필요한 만큼 계획을 조정한다.", score:0},
    {text:"기존 일정에 미칠 영향을 먼저 계산하고 계획표를 다시 정리한다.", score:2}
  ]},
  {axis:"JP", q:"새로운 업무를 시작할 때 나는?", options:[
    {text:"먼저 시작해보면서 필요한 순서와 방법을 잡아간다.", score:-2},
    {text:"큰 일정과 방향을 정한 뒤 세부사항은 진행하며 조정한다.", score:0},
    {text:"일정과 처리 순서를 구체적으로 정한 뒤 시작한다.", score:2}
  ]},
  {axis:"JP", q:"새로운 업무 툴을 도입하게 되었다면?", options:[
    {text:"매뉴얼과 사용법을 먼저 충분히 확인한다.", score:2},
    {text:"핵심 기능과 예시를 확인한 뒤 사용해본다.", score:0},
    {text:"일단 직접 사용해보면서 필요한 기능을 익힌다.", score:-2}
  ]},
  {axis:"JP", q:"오늘 해야 할 일을 관리하는 방식은?", options:[
    {text:"그날 상황과 우선순위에 따라 머릿속에서 유연하게 조정한다.", score:-2},
    {text:"중요한 일 위주로 간단히 메모해 관리한다.", score:0},
    {text:"할 일을 목록화하고 우선순위나 순서를 정해 관리한다.", score:2}
  ]}
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


let currentQuestion = 0;
const personalAnswers = Array(questions.length).fill(null);

const axisVisualLabels={EI:"소통 · 협업 상황",SN:"기획 · 문서 상황",TF:"피드백 · 관계 상황",JP:"일정 · 실행 상황"};

const questionVisuals = {
  0:{src:"assets/question-01.png", alt:"1번 문항 상황 이미지"},
  1:{src:"assets/question-02.png", alt:"2번 문항 상황 이미지"},
  2:{src:"assets/question-03.png", alt:"3번 문항 상황 이미지"},
  3:{src:"assets/question-04.png", alt:"4번 문항 상황 이미지"},
  4:{src:"assets/question-05.png", alt:"5번 문항 상황 이미지"},
  5:{src:"assets/question-06.png", alt:"6번 문항 상황 이미지"},
  6:{src:"assets/question-07.png", alt:"7번 문항 상황 이미지"},
  7:{src:"assets/question-08.png", alt:"8번 문항 상황 이미지"},
  8:{src:"assets/question-09.png", alt:"9번 문항 상황 이미지"},
  9:{src:"assets/question-10.png", alt:"10번 문항 상황 이미지"},
  10:{src:"assets/question-11.png", alt:"11번 문항 상황 이미지"},
  11:{src:"assets/question-12.png", alt:"12번 문항 상황 이미지"},
  12:{src:"assets/question-13.png", alt:"13번 문항 상황 이미지"},
  13:{src:"assets/question-14.png", alt:"14번 문항 상황 이미지"},
  14:{src:"assets/question-15.png", alt:"15번 문항 상황 이미지"},
  15:{src:"assets/question-16.png", alt:"16번 문항 상황 이미지"},
  16:{src:"assets/question-17.png", alt:"17번 문항 상황 이미지"},
  17:{src:"assets/question-18.png", alt:"18번 문항 상황 이미지"},
  18:{src:"assets/question-19.png", alt:"19번 문항 상황 이미지"},
  19:{src:"assets/question-20.png", alt:"20번 문항 상황 이미지"}
};

function renderQuiz(){
  const quiz = document.getElementById("quiz");
  const x = questions[currentQuestion];
  const selected = personalAnswers[currentQuestion];

  const visual = questionVisuals[currentQuestion];
  const visualHidden = visual ? "" : 'aria-hidden="true"';

  quiz.innerHTML = `
    <div class="question question-single">
      <div class="question-visual-placeholder" ${visualHidden}>
        <div class="question-visual-box ${visual ? "has-image" : ""}">
          ${visual ? `
            <img class="question-visual-image" src="${visual.src}" alt="${visual.alt}">
          ` : `
            <div class="visual-box-inner">
              <span class="visual-frame"></span>
              <img class="mascot-preview" src="assets/duck-mascot.png" alt="오리 마스코트 예시">
              <div class="visual-title">오리 마스코트 활용 이미지 영역</div>
              <div class="visual-caption">모바일 기준 세로형 이미지로 구성하고, 문항별 상황에 맞춰 오리 마스코트를 활용할 수 있습니다.</div>
            </div>
          `}
        </div>
      </div>
      <div class="question-meta">
        <span class="qnum">${String(currentQuestion+1).padStart(2,"0")}</span>
        <span class="question-count">${currentQuestion+1} / ${questions.length}</span>
      </div>
      <div class="qtitle">${x.q}</div>
      <div class="options options-three">
        ${x.options.map((opt,idx)=>`
          <label class="option ${selected===idx ? "selected" : ""}">
            <input type="radio" name="currentQuestion" value="${idx}" ${selected===idx ? "checked" : ""}>
            <span class="option-index">${idx+1}</span>
            <span>${opt.text}</span>
          </label>
        `).join("")}
      </div>
    </div>`;

  quiz.querySelectorAll('input[name="currentQuestion"]').forEach(input=>{
    input.addEventListener("change",()=>{
      personalAnswers[currentQuestion] = Number(input.value);
      renderQuiz();
      updateProgress();
    });
  });

  document.getElementById("prevQuestion").disabled = currentQuestion === 0;
  const next = document.getElementById("nextQuestion");
  next.textContent = currentQuestion === questions.length-1 ? "결과 확인" : "다음";
  updateProgress();
}

function updateProgress(){
  const answered = personalAnswers.filter(v=>v!==null).length;
  document.getElementById("progressText").textContent = `${currentQuestion+1} / ${questions.length} · ${answered}개 응답`;
  document.getElementById("progressBar").style.width = `${((currentQuestion+1)/questions.length)*100}%`;
}

function getAxisTotals(){
  const totals={EI:0,SN:0,TF:0,JP:0};
  const counts={EI:0,SN:0,TF:0,JP:0};
  questions.forEach((q,i)=>{
    const answerIndex = personalAnswers[i];
    if(answerIndex===null) return;
    totals[q.axis] += q.options[answerIndex].score;
    counts[q.axis] += 1;
  });
  return {totals,counts};
}

function resolveAxis(axis, first, second, total){
  if(total>0) return first;
  if(total<0) return second;

  // 50:50 동률이면 해당 축의 핵심문항(tie)을 우선 반영.
  const axisIndexes = questions
    .map((q,i)=>({q,i}))
    .filter(x=>x.q.axis===axis)
    .sort((a,b)=>(b.q.tie?1:0)-(a.q.tie?1:0));

  for(const {q,i} of axisIndexes){
    const answerIndex=personalAnswers[i];
    if(answerIndex===null) continue;
    const score=q.options[answerIndex].score;
    if(score>0) return first;
    if(score<0) return second;
  }
  return first;
}

function personalScoreObject(){
  const {totals}=getAxisTotals();
  const scoreObj={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};

  [["EI","E","I"],["SN","S","N"],["TF","T","F"],["JP","J","P"]].forEach(([axis,first,second])=>{
    const max=questions.filter(q=>q.axis===axis).length*2;
    const firstPct=Math.round(((totals[axis]+max)/(2*max))*100);
    const secondPct=100-firstPct;
    scoreObj[first]=firstPct;
    scoreObj[second]=secondPct;
  });
  return {scoreObj, totals};
}

function calcType(){
  if(personalAnswers.some(v=>v===null)) return null;
  const {scoreObj,totals}=personalScoreObject();
  const type =
    resolveAxis("EI","E","I",totals.EI)+
    resolveAxis("SN","S","N",totals.SN)+
    resolveAxis("TF","T","F",totals.TF)+
    resolveAxis("JP","J","P",totals.JP);
  return {type,scores:scoreObj,totals};
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


let personalQuizStarted = false;

function selectedPersonalTeamName(){
  const select=document.getElementById("personalTeamSelect");
  if(!select || !select.value) return "";
  return select.options[select.selectedIndex]?.textContent || "";
}

function syncPersonalStartButton(){
  const select=document.getElementById("personalTeamSelect");
  const btn=document.getElementById("startPersonalQuiz");
  if(!btn) return;
  btn.disabled=!select?.value;
  const answered=personalAnswers.filter(v=>v!==null).length;
  btn.textContent=answered>0 ? `검사 계속하기 (${answered}/${questions.length})` : "검사 시작하기";
}

function updatePersonalFlowUI(){
  const start=document.getElementById("personalStart");
  const area=document.getElementById("personalQuizArea");
  const progress=document.getElementById("personalProgressWrap");
  if(start) start.classList.toggle("hidden",personalQuizStarted);
  if(area) area.classList.toggle("hidden",!personalQuizStarted);
  if(progress) progress.classList.toggle("hidden",!personalQuizStarted);
  const teamName=document.getElementById("selectedTeamName");
  if(teamName) teamName.textContent=selectedPersonalTeamName() || "-";
  syncPersonalStartButton();
}

function openPersonalTeamSelection(){
  personalQuizStarted=false;
  updatePersonalFlowUI();
  document.getElementById("personalStart")?.scrollIntoView({behavior:"smooth",block:"start"});
}

function startPersonalQuiz(){
  const select=document.getElementById("personalTeamSelect");
  if(!select?.value){
    setNasStatus("nasApiStatus","소속 팀(지부)을 선택한 뒤 검사를 시작해 주세요.","warn");
    syncPersonalStartButton();
    return;
  }
  localStorage.setItem("teamMbtiTeamCode",select.value);
  const resultSelect=document.getElementById("teamResultSelect");
  if(resultSelect) resultSelect.value=select.value;
  personalQuizStarted=true;
  updatePersonalFlowUI();
  renderQuiz();
  document.getElementById("personalQuizArea")?.scrollIntoView({behavior:"smooth",block:"start"});
}

const NAS_CFG = window.MBTI_CONFIG || {};
const NAS_API_BASE = String(NAS_CFG.API_BASE_URL || "").replace(/\/$/, "");
const NAS_MIN_TEAM_RESULT_COUNT = Number(NAS_CFG.MIN_TEAM_RESULT_COUNT || 3);

function nasConfigured(){
  return Boolean(NAS_API_BASE && !NAS_API_BASE.includes("YOUR-") && !NAS_API_BASE.includes("example"));
}

function getNasDeviceId(){
  const key="teamMbtiDeviceId";
  let id=localStorage.getItem(key);
  if(!id){
    id=(crypto.randomUUID ? crypto.randomUUID() : `mbti-${Date.now()}-${Math.random().toString(36).slice(2)}`);
    localStorage.setItem(key,id);
  }
  return id;
}

async function nasFetch(path, options={}){
  if(!nasConfigured()) throw new Error("NAS_API_NOT_CONFIGURED");
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),7000);
  try{
    const res=await fetch(`${NAS_API_BASE}${path}`,{
      ...options,
      signal:controller.signal,
      headers:{"Content-Type":"application/json",...(options.headers||{})}
    });
    const data=await res.json().catch(()=>({}));
    if(!res.ok) throw new Error(data.error || `HTTP_${res.status}`);
    return data;
  } finally {
    clearTimeout(timer);
  }
}

function setNasStatus(id,text,kind=""){
  const el=document.getElementById(id);
  if(!el) return;
  el.textContent=text;
  el.className=`nas-api-status ${kind}`.trim();
}

function fillTeamSelect(select, teams, selected=""){
  if(!select) return;
  select.innerHTML='<option value="">소속 팀(지부)을 선택하세요</option>'+teams.map(t=>`<option value="${t.code}">${t.name}</option>`).join("");
  if(selected && teams.some(t=>t.code===selected)) select.value=selected;
}

async function initNasIntegration(){
  const personalSelect=document.getElementById("personalTeamSelect");
  const resultSelect=document.getElementById("teamResultSelect");
  const saved=localStorage.getItem("teamMbtiTeamCode") || "";
  if(!nasConfigured()){
    fillTeamSelect(personalSelect,[],"");
    fillTeamSelect(resultSelect,[],"");
    if(personalSelect) personalSelect.innerHTML='<option value="">NAS 주소 설정 후 팀 목록을 불러옵니다</option>';
    if(resultSelect) resultSelect.innerHTML='<option value="">NAS 주소 설정 후 팀 목록을 불러옵니다</option>';
    setNasStatus("nasApiStatus","현재 NAS API 주소가 설정되지 않아 개인검사만 사용할 수 있습니다.","warn");
    syncPersonalStartButton();
    return;
  }
  try{
    const health=await nasFetch("/api/health");
    const data=await nasFetch("/api/teams");
    const teams=data.teams||[];
    fillTeamSelect(personalSelect,teams,saved);
    fillTeamSelect(resultSelect,teams,saved);
    syncPersonalStartButton();
    if(health.status!=="ok") setNasStatus("nasApiStatus","NAS 서버 응답은 있으나 상태 확인이 필요합니다.","warn");
  }catch(err){
    if(personalSelect) personalSelect.innerHTML='<option value="">팀 목록을 불러오지 못했습니다</option>';
    if(resultSelect) resultSelect.innerHTML='<option value="">팀 목록을 불러오지 못했습니다</option>';
    setNasStatus("nasApiStatus","NAS 집계 서버에 연결할 수 없습니다. 네트워크/HTTPS 주소를 확인해 주세요.","error");
    syncPersonalStartButton();
  }
}

async function submitPersonalResult(type){
  const status=document.getElementById("remoteSubmitStatus");
  const select=document.getElementById("personalTeamSelect");
  const teamCode=select?.value || "";
  if(!teamCode){
    if(status){status.textContent="소속 팀(지부)을 선택하면 결과를 팀 집계에 반영할 수 있습니다.";status.className="remote-submit-status error";}
    return;
  }
  localStorage.setItem("teamMbtiTeamCode",teamCode);
  const teamResultSelect=document.getElementById("teamResultSelect");
  if(teamResultSelect) teamResultSelect.value=teamCode;
  if(!nasConfigured()){
    if(status){status.textContent="NAS API 주소가 아직 설정되지 않아 팀 자동 집계에는 반영되지 않았습니다.";status.className="remote-submit-status error";}
    return;
  }
  try{
    if(status){status.textContent="팀 결과에 익명으로 반영 중...";status.className="remote-submit-status";}
    const data=await nasFetch("/api/results",{
      method:"POST",
      body:JSON.stringify({team_code:teamCode,mbti:type,device_id:getNasDeviceId()})
    });
    if(status){status.textContent=`팀 집계 반영 완료 · 현재 ${data.team_total}명 참여`;status.className="remote-submit-status";}
  }catch(err){
    if(status){status.textContent="개인 결과는 정상 산출되었지만 NAS 팀 집계 전송에는 실패했습니다.";status.className="remote-submit-status error";}
  }
}

async function loadRemoteTeamResult(){
  const select=document.getElementById("teamResultSelect");
  const code=select?.value || "";
  const box=document.getElementById("teamResult");
  if(!code){
    setNasStatus("teamRemoteStatus","조회할 팀(지부)을 선택해 주세요.","warn");
    return;
  }
  localStorage.setItem("teamMbtiTeamCode",code);
  const personalSelect=document.getElementById("personalTeamSelect");
  if(personalSelect) personalSelect.value=code;
  try{
    setNasStatus("teamRemoteStatus","팀 결과 불러오는 중...","");
    const data=await nasFetch(`/api/team-results?team_code=${encodeURIComponent(code)}`);
    if(!data.available){
      box.classList.remove("hidden");
      box.innerHTML=`<div class="error">현재 ${data.total}명 참여 · 팀 결과는 ${data.min_required}명 이상 참여 후 공개됩니다.</div>`;
      setNasStatus("teamRemoteStatus",`${data.team_name} · ${data.total}명 참여`,"warn");
      return;
    }
    Object.keys(teamCounts).forEach(k=>delete teamCounts[k]);
    Object.entries(data.counts||{}).forEach(([type,n])=>{if(n>0) teamCounts[type]=Number(n);});
    updateTeamRows();
    analyzeTeam();
    setNasStatus("teamRemoteStatus",`${data.team_name} · 총 ${data.total}명 참여 · 자동 집계 결과`,"ok");
  }catch(err){
    setNasStatus("teamRemoteStatus","NAS에서 팀 결과를 불러오지 못했습니다.","error");
  }
}

function showPersonal(){
  const r=calcType();
  const box=document.getElementById("personalResult");
  if(!r){
    const firstMissing=personalAnswers.findIndex(v=>v===null);
    if(firstMissing>=0){
      currentQuestion=firstMissing;
      renderQuiz();
    }
    box.classList.remove("hidden");
    box.innerHTML=`<div class="error">아직 답하지 않은 문항이 있습니다. 모든 문항에 응답해주세요.</div>`;
    return;
  }
  const info=typeInfo[r.type], temp=getTemperament(r.type), tinfo=temperamentInfo[temp];
  const balanced=Object.values(r.totals).some(v=>v===0);
  box.classList.remove("hidden");
  box.innerHTML=`
    <div class="result-top">
      <div class="type-badge">${r.type}</div>
      <div class="result-title">
        <h3>${info.name}</h3>
        <p>업무 상황에서 나타날 수 있는 경향을 간단히 정리한 결과입니다.</p>
        ${balanced?`<p class="balance-note">※ 50:50인 지표는 핵심문항 응답을 반영해 대표 유형을 표시했습니다.</p>`:""}
        <div class="copyline"><span class="copybox">${r.type}</span><button class="smallbtn" id="copyPersonal">결과 복사</button></div>
      </div>
    </div>
    ${axisHtml(r.scores)}
    <div class="kiersey"><b>${temp} · ${tinfo.name}</b><br><span>${tinfo.desc}</span></div>
    <div class="dual" style="margin-top:14px">
      <div class="mini good"><h4>업무에서 살릴 수 있는 강점</h4><ul>${info.good.map(x=>`<li>${x}</li>`).join("")}</ul></div>
      <div class="mini watch"><h4>한 번 점검해볼 부분</h4><ul>${info.watch.map(x=>`<li>${x}</li>`).join("")}</ul></div>
    </div>
    <div id="remoteSubmitStatus" class="remote-submit-status">팀 집계 반영 준비 중...</div>
    <button id="viewMyTeamResult" class="btn secondary remote-team-button" type="button">우리 팀(지부) 결과 보기</button>`;
  document.getElementById("copyPersonal").onclick=()=>navigator.clipboard?.writeText(r.type);
  document.getElementById("viewMyTeamResult").onclick=()=>{go("team");loadRemoteTeamResult();};
  submitPersonalResult(r.type);
  box.scrollIntoView({behavior:"smooth",block:"start"});
}


const teamCounts = {};

function getTeamTotal(){
  return Object.values(teamCounts).reduce((sum,n)=>sum+n,0);
}

function updateTeamRows(){
  const rows=document.getElementById("teamTypeRows");
  const total=getTeamTotal();
  document.getElementById("teamTotal").textContent=`총 ${total}명`;

  const entries=Object.entries(teamCounts).filter(([,n])=>n>0);
  if(entries.length===0){
    rows.innerHTML=`<div class="team-empty">아직 입력된 구성원이 없습니다.</div>`;
    return;
  }

  const order=Object.keys(typeInfo);
  entries.sort((a,b)=>order.indexOf(a[0])-order.indexOf(b[0]));
  rows.innerHTML=entries.map(([type,count])=>`
    <div class="team-type-row" data-type="${type}">
      <div class="team-type-name">${type}</div>
      <div class="team-type-meta">${typeInfo[type].name}</div>
      <div class="counter">
        <button type="button" data-action="minus" aria-label="${type} 인원 감소">−</button>
        <span class="count">${count}</span>
        <button type="button" data-action="plus" aria-label="${type} 인원 증가">+</button>
        <button type="button" class="remove-type" data-action="remove" aria-label="${type} 삭제">×</button>
      </div>
    </div>`).join("");
}

function addSelectedTeamType(){
  const type=document.getElementById("teamTypeSelect").value;
  teamCounts[type]=(teamCounts[type]||0)+1;
  updateTeamRows();
}

function changeTeamCount(type,delta){
  const next=(teamCounts[type]||0)+delta;
  if(next<=0) delete teamCounts[type];
  else teamCounts[type]=next;
  updateTeamRows();
}

function analyzeTeam(){
  const box=document.getElementById("teamResult");
  const total=getTeamTotal();
  box.classList.remove("hidden");
  if(total===0){
    box.innerHTML=`<div class="error">구성원 MBTI를 1명 이상 입력해주세요.</div>`;
    return;
  }

  const counts={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
  const tempCounts={SJ:0,SP:0,NT:0,NF:0};
  Object.entries(teamCounts).forEach(([type,n])=>{
    [...type].forEach(ch=>counts[ch]+=n);
    tempCounts[getTemperament(type)]+=n;
  });

  const teamType =
    (counts.E>counts.I?"E":"I")+
    (counts.S>counts.N?"S":"N")+
    (counts.T>counts.F?"T":"F")+
    (counts.J>counts.P?"J":"P");
  const topTemp=Object.entries(tempCounts).sort((a,b)=>b[1]-a[1])[0][0];
  const info=typeInfo[teamType], tinfo=temperamentInfo[topTemp];
  const dist=Object.entries(tempCounts).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`${k} ${Math.round(v/total*100)}%`).join(" · ");
  const composition=Object.entries(teamCounts)
    .filter(([,n])=>n>0)
    .sort((a,b)=>b[1]-a[1] || a[0].localeCompare(b[0]))
    .map(([t,n])=>`${t} ${n}명`).join(" · ");

  box.innerHTML=`
    <div class="result-top team-result-top">
      <div class="type-badge">${teamType}</div>
      <div class="result-title team-result-title">
        <h3>대표 MBTI : ${teamType}<span class="team-result-name">(${info.name})</span></h3>
        <p class="team-composition">구성 : ${composition}</p>
      </div>
    </div>
    ${axisHtml(counts)}
    <div class="kiersey">
      <b>주요 기질 ${topTemp} · ${tinfo.name}</b>
      <p class="temperament-note">업무기질은 구성원의 MBTI를 4개 유형(SJ·SP·NT·NF)으로 묶어 팀(지부)의 전반적인 업무성향을 살펴보는 참고 지표입니다. 대표 MBTI와는 별도의 보조 분석 결과입니다.</p>
      <span>${tinfo.desc}</span>
      <div style="margin-top:8px;font-size:12px;color:#5b6c64">기질 분포 · ${dist}</div>
    </div>
    <div class="dual" style="margin-top:14px">
      <div class="mini good">
        <h4>우리 팀(지부)이 살릴 수 있는 강점</h4>
        <ul>${[...new Set([...tinfo.good,...info.good])].slice(0,5).map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>
      <div class="mini watch">
        <h4>우리 팀(지부)의 점검이 필요한 부분</h4>
        <ul>${[...new Set([...tinfo.watch,...info.watch])].slice(0,5).map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>
    </div>
    <div class="example-box" style="margin-top:14px">
      <div class="tag">다음 단계</div>
      <p style="margin-bottom:0;line-height:1.7">
        위 진단 결과가 실제 우리 팀(지부) 업무에서도 나타나는지 확인해보세요.
        구체적인 <b>업무 사례와 개선 필요성</b>을 정리한 뒤, 실행 가능한 <b>개선과제 1건 이상</b>을 선정하고
        개선 목표·개선 내용·기대 효과를 작성하면 됩니다. 실제 개선 실적 및 증빙자료 제출은 선택사항입니다.
      </p>
      <button class="btn primary" style="margin-top:14px" onclick="go('improve')">개선과제 작성 예시 보기</button>
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
document.getElementById("prevQuestion").onclick=()=>{
  if(currentQuestion>0){
    currentQuestion--;
    renderQuiz();
  }
};
document.getElementById("nextQuestion").onclick=()=>{
  if(personalAnswers[currentQuestion]===null){
    const box=document.getElementById("personalResult");
    box.classList.remove("hidden");
    box.innerHTML=`<div class="error">현재 문항에 응답한 뒤 다음으로 이동해주세요.</div>`;
    return;
  }
  document.getElementById("personalResult").classList.add("hidden");
  if(currentQuestion<questions.length-1){
    currentQuestion++;
    renderQuiz();
  } else {
    showPersonal();
  }
};
document.getElementById("resetPersonal").onclick=()=>{
  personalAnswers.fill(null);
  currentQuestion=0;
  document.getElementById("personalResult").classList.add("hidden");
  renderQuiz();
  openPersonalTeamSelection();
};
document.getElementById("addTeamType").onclick=addSelectedTeamType;
document.getElementById("teamTypeRows").onclick=(e)=>{
  const btn=e.target.closest("button[data-action]");
  if(!btn) return;
  const row=btn.closest(".team-type-row");
  if(!row) return;
  const type=row.dataset.type;
  if(btn.dataset.action==="plus") changeTeamCount(type,1);
  if(btn.dataset.action==="minus") changeTeamCount(type,-1);
  if(btn.dataset.action==="remove"){ delete teamCounts[type]; updateTeamRows(); }
};
document.getElementById("analyzeTeam").onclick=analyzeTeam;
document.getElementById("clearTeam").onclick=()=>{
  Object.keys(teamCounts).forEach(k=>delete teamCounts[k]);
  updateTeamRows();
  document.getElementById("teamResult").classList.add("hidden");
};

document.getElementById("personalTeamSelect")?.addEventListener("change",(e)=>{
  if(e.target.value){
    localStorage.setItem("teamMbtiTeamCode",e.target.value);
    const t=document.getElementById("teamResultSelect");
    if(t) t.value=e.target.value;
  }
  syncPersonalStartButton();
});
document.getElementById("startPersonalQuiz")?.addEventListener("click",startPersonalQuiz);
document.getElementById("changePersonalTeam")?.addEventListener("click",openPersonalTeamSelection);
document.getElementById("teamResultSelect")?.addEventListener("change",(e)=>{
  if(e.target.value) localStorage.setItem("teamMbtiTeamCode",e.target.value);
});
document.getElementById("loadTeamResult")?.addEventListener("click",loadRemoteTeamResult);

renderQuiz();
updateTeamRows();
updatePersonalFlowUI();
initNasIntegration();
