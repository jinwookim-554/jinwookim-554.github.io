/* Reviewed content. Publication records and provenance are documented in ../SOURCES.md. */
window.portfolioPapers = [
  {
    id: 'arpg', year: '2026', type: 'conference', venue: 'NeurIPS 2026',
    status: {en:'Accepted · Main conference', ko:'채택 · 메인 컨퍼런스'},
    title: 'LLMs as MDP Designers: A Dependency-Aware Agentic Framework for Automated Robot Policy Generation',
    authors: 'H. Je-Gal, <strong>J. Kim</strong>, C. Yi, and H.-S. Lee',
    image: 'assets/arpg.webp',
    figure: {en:'ARPG framework · Figure 2 from the research manuscript. Select to enlarge.',ko:'ARPG 프레임워크 · 연구 원고의 Figure 2. 누르면 확대됩니다.'},
    summary: {en:'A natural-language robot task is only the beginning: a policy also needs a consistent learning problem. ARPG uses specialized LLM agents to formulate the MDP in dependency order, then implement the learning environment through parallel modules. Explicit intermediate artifacts support verification and localized error correction. My contribution focused on core algorithm implementation, experiment design and execution, and manuscript review, using Isaac Sim / Isaac Lab robot tasks.',ko:'자연어 로봇 작업을 해결하려면 정책뿐 아니라 일관된 학습 문제도 필요합니다. ARPG는 전문 LLM 에이전트가 의존성 순서에 따라 MDP를 설계하고, 확정된 명세를 바탕으로 학습 환경을 병렬 구현하는 프레임워크입니다. 명시적인 중간 산출물을 검증하고 오류가 난 부분을 국소적으로 수정합니다. 주요 알고리즘 구현, Isaac Sim·Isaac Lab 기반 실험 설계와 실행, 논문 검토에 기여했습니다.'},
    role: {en:'Second author · Core algorithm implementation, experiment design and execution, manuscript review.',ko:'제2저자 · 주요 알고리즘 구현, 실험 설계·실행 및 논문 검토.'},
    links: [{url:'https://mainlab.kr/publications/#publication-1990',en:'Publication record ↗',ko:'공식 실적 기록 ↗'}]
  },
  {
    id:'ptimm',year:'2026',type:'conference',venue:'IEEE MetaCom 2026 · Meta-XP Workshop',
    shortVenue:'MetaCom Workshop 2026',status:{en:'Accepted · Workshop',ko:'채택 · 워크숍'},
    title:'Destination-Guided Pedestrian Trajectory Prediction for Digital Twin Synchronization',
    authors:'<strong>Jin-Woo Kim</strong>, Min-Su Kim, and Hyun-Suk Lee',
    image:'assets/pt-imm.webp',
    figure:{en:'Destination inference → potential-derived acceleration → Kalman prediction. Select to enlarge.',ko:'목적지 추론 → 포텐셜 기반 가속도 → 칼만 필터 예측. 누르면 확대됩니다.'},
    summary:{en:'Where is a pedestrian going? PT-IMM represents candidate destinations as spatial probability distributions and updates their probabilities from motion observations. The selected destination distribution becomes a potential field; its gradient supplies acceleration to a shared Kalman predictor. This connects inferred intent with future trajectory prediction for digital twin synchronization. The work evaluates the approach on the Edinburgh Informatics Forum Pedestrian Database.',ko:'보행자는 어디로 향하고 있을까요? PT-IMM은 목적지 후보들을 공간적 확률 분포로 표현하고 이동 관측으로 각 후보의 확률을 갱신합니다. 선택된 목적지 분포를 포텐셜 필드로 바꾸고, 그 기울기에서 얻은 가속도를 공통 칼만 예측기의 입력으로 사용합니다. 추론한 이동 의도를 디지털 트윈 동기화를 위한 미래 경로 예측에 연결하며, Edinburgh Informatics Forum 보행자 데이터로 평가했습니다.'},
    role:{en:'First author · Algorithm design and implementation, comparative experiments, and manuscript writing.',ko:'제1저자 · 알고리즘 설계·구현, 비교 실험 및 논문 작성.'},
    links:[{url:'https://mainlab.kr/publications/#publication-2022',en:'Publication record ↗',ko:'공식 실적 기록 ↗'}]
  },
  {
    id:'pbs',year:'2026',type:'journal',venue:'IEEE Transactions on Industrial Informatics',shortVenue:'IEEE TII · 2026',
    status:{en:'Published · Vol. 22, No. 10',ko:'게재 · 22권 10호'},
    title:'Prediction-Based Scheduling for Digital Twin Synchronization With AoI and Spatial Urgency',
    authors:'Kyu-Sik Kim, <strong>Jin-Woo Kim</strong>, and Hyun-Suk Lee',image:'assets/pbs.webp',
    figure:{en:'Digital twin synchronization architecture · Figure 1 from the paper. Select to enlarge.',ko:'디지털 트윈 동기화 시스템 구조 · 논문의 Figure 1. 누르면 확대됩니다.'},
    summary:{en:'A digital twin cannot always update every object at once. This work studies which objects should be synchronized when communication and computation are limited. Prediction-based scheduling combines anticipated spatial urgency with age of information to balance timely updates and fairness. The framework analyzes the structure of the scheduling problem and how prediction errors affect decisions, with evaluations in synthetic and real-world environments.',ko:'통신·연산 자원이 제한되면 모든 디지털 트윈 객체를 동시에 갱신할 수 없습니다. 이 연구는 어떤 객체를 먼저 동기화할지 결정하는 문제를 다룹니다. 미래 위치에 따른 공간적 긴급도와 정보 최신성(AoI)을 함께 고려하여 시급한 갱신과 객체 간 공정성의 균형을 맞춥니다. 스케줄링 문제의 구조와 예측 오차의 영향을 분석하고, 합성 및 실환경 데이터에서 평가했습니다.'},
    role:{en:'Second author · Collaborative research on prediction-based digital twin synchronization. Published October 2026, pp. 9280–9291.',ko:'제2저자 · 예측 기반 디지털 트윈 동기화 공동 연구. 2026년 10월 게재, pp. 9280–9291.'},
    links:[{url:'https://doi.org/10.1109/TII.2026.3698880',en:'DOI / Publisher ↗',ko:'DOI / 출판사 ↗'},{url:'https://mainlab.kr/publications/#publication-1976',en:'Publication record ↗',ko:'공식 실적 기록 ↗'}]
  },
  {
    id:'imm',year:'2025',type:'domestic',venue:'KICS Summer Conference 2025',
    status:{en:'Published · Poster presentation',ko:'게재 · 포스터 발표'},
    title:'공간 구조 기반 상호작용 다중 모델을 활용한 자유이동 객체들의 이동경로 예측에 관한 연구',
    authors:'<strong>김진우</strong>, 김규식, 이현석',image:'assets/imm.webp',
    figure:{en:'Trajectory and model-probability results from the KICS paper. Select to enlarge.',ko:'한국통신학회 논문의 경로·모델 확률 실험 결과. 누르면 확대됩니다.'},
    summary:{en:'Free-moving objects change speed and direction in ways that a single motion model may miss. This study combines spatial structure with an interacting multiple model estimator, adjusting model-transition probabilities using observed velocity. Kalman filtering and IMM are evaluated in a Python / Pygame simulation. This first-author work forms an earlier step toward my destination-guided pedestrian prediction research.',ko:'자유이동 객체는 속도와 방향을 바꾸기 때문에 단일 운동 모델로 경로를 설명하기 어렵습니다. 이 연구는 공간 내 존재 확률에 기반한 다중 모델을 구성하고, 관측 속도에 따라 모델 간 전이확률을 조정합니다. 칼만 필터와 IMM을 결합해 Python·Pygame 시뮬레이션으로 검증했으며, 이후 목적지 유도 보행자 예측 연구로 확장한 제1저자 연구입니다.'},
    role:{en:'First author · Algorithm implementation, simulation validation, and poster presentation.',ko:'제1저자 · 알고리즘 구현, 시뮬레이션 검증 및 포스터 발표.'},
    links:[{url:'https://mainlab.kr/publications/',en:'Publication record ↗',ko:'공식 실적 기록 ↗'}]
  }
];

// One shared topic map drives the area explorer and the labels on each entry.
window.portfolioTopics = [
  {id:'llm', en:'LLM & Agentic AI', ko:'LLM·에이전틱 AI'},
  {id:'rl', en:'Reinforcement Learning', ko:'강화학습'},
  {id:'mdp', en:'MDP Design', ko:'MDP 설계'},
  {id:'marl', en:'Multi-Agent RL', ko:'다중 에이전트 RL'},
  {id:'prediction', en:'Trajectory Prediction', ko:'경로 예측'},
  {id:'estimation', en:'State Estimation', ko:'상태 추정'},
  {id:'twins', en:'Digital Twins', ko:'디지털 트윈'},
  {id:'data', en:'Data & Validation', ko:'데이터·검증'},
  {id:'planning', en:'Planning & Scheduling', ko:'계획·스케줄링'}
];
const paperTopics = {
  arpg:['llm','rl','mdp'], ptimm:['prediction','estimation','twins'],
  pbs:['twins','planning'], imm:['prediction','estimation']
};
window.portfolioPapers.forEach(paper => {paper.topics=paperTopics[paper.id];});
window.portfolioEntries = [
  ...window.portfolioPapers.map(paper=>({
    id:paper.id, title:paper.title, kind:{en:'Paper',ko:'논문'},
    meta:paper.shortVenue || paper.venue, image:paper.image,
    href:'#paper-'+paper.id,topics:paper.topics
  })),
  {id:'gc',title:{en:'GC-MDP · Backward goal planning for MDP design',ko:'GC-MDP · 역방향 목표 계획 기반 MDP 설계'},kind:{en:'Ongoing research',ko:'진행 연구'},meta:{en:'Goal decomposition · MCTS · Per-goal policies',ko:'목표 분해 · MCTS · 골별 정책'},href:'#project-gc',topics:['llm','rl','mdp','planning']},
  {id:'marl-project',title:{en:'Multi-agent disaster response',ko:'다중 에이전트 재난 대응'},kind:{en:'Project',ko:'프로젝트'},meta:'Unity / ML-Agents · Python',image:'assets/marl.webp',href:'#project-marl',topics:['marl','rl','mdp']},
  {id:'foodtruck',title:{en:'Food-truck route recommendation',ko:'사장님 여기요 · 푸드트럭 영업 경로 추천'},kind:{en:'Project',ko:'프로젝트'},meta:{en:'Foot-traffic data · Value Iteration',ko:'유동인구 데이터 · Value Iteration'},image:'assets/foodtruck.webp',href:'#project-foodtruck',topics:['mdp','planning','data']},
  {id:'piaes',title:{en:'PI-AES · Physics-informed policy generation',ko:'PI-AES · 물리 제약을 반영한 정책 생성'},kind:{en:'Research experience',ko:'연구 경험'},meta:{en:'EMS modeling · RAG · Data validation',ko:'EMS 모델링 · RAG · 데이터 검증'},image:'assets/piaes.svg',href:'#project-piaes',topics:['llm','rl','mdp','data']},
  {id:'alamp',title:{en:'A-LAMP · Collaborative research experience',ko:'A-LAMP · 공동 연구 참여'},kind:{en:'Research participation',ko:'연구 참여'},meta:{en:'Natural-language MDP modeling and policy generation',ko:'자연어 기반 MDP 설계 및 정책 생성'},href:'#project-alamp',topics:['llm','rl','mdp']},
  {id:'patent-data',title:{en:'Training-data selection for smart-grid EMS',ko:'스마트그리드 EMS 학습용 데이터 선정'},kind:{en:'Patent application',ko:'특허 출원'},meta:'KR 10-2026-0101264 · 2026',image:'assets/data-selection.svg',href:'#patent-data',topics:['llm','data']},
  {id:'patent-motion',title:{en:'Dynamic-object trajectory prediction',ko:'동적 객체의 경로를 예측하는 방법 및 장치'},kind:{en:'Patent application',ko:'특허 출원'},meta:'KR 10-2025-0181493 · 2025',image:'assets/pt-imm.webp',href:'#patent-motion',topics:['prediction','estimation']},
  {id:'software-marl',title:{en:'Multi-agent learning & simulation software',ko:'다중 에이전트 재난 대응 학습·시뮬레이션 프로그램'},kind:{en:'Registered software',ko:'등록 소프트웨어'},meta:{en:'Copyright 2025-058345',ko:'저작권 등록 2025-058345'},image:'assets/marl.webp',href:'#software-marl',topics:['marl','rl','mdp']}
];
