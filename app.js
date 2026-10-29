(() => {
  'use strict';
  const papers = window.portfolioPapers;
  const works = papers;
  const state = {lang: 'en', filter: 'all', topic: null};
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const text = pair => pair[state.lang];
  const localized = value => typeof value === 'string' ? value : text(value);
  const topics = window.portfolioTopics;
  const entries = window.portfolioEntries;
  const topicLabel = id => topics.find(topic => topic.id === id)[state.lang];
  const topicTags = ids => ids.map(id=>`<button type="button" class="topic-tag" data-topic="${id}" aria-label="${escape((state.lang==='en'?'Explore related work: ':'관련 성과 보기: ')+topicLabel(id))}">${escape(topicLabel(id))}</button>`).join('');
  const itemId = item => `${papers.includes(item) ? 'paper' : 'work'}-${item.id}`;
  const paperList = document.getElementById('paper-list');
  const index = document.getElementById('publication-index');
  const projectCarousel = document.querySelector('.project-carousel');
  const projectCards = [...projectCarousel.querySelectorAll('.project-card')];
  let projectIndex = 0;
  projectCarousel.classList.add('is-ready');
  projectCarousel.querySelector('.project-navigation').hidden = false;

  function showProject(index) {
    projectIndex = (index + projectCards.length) % projectCards.length;
    projectCards.forEach((card, i) => {
      card.hidden = i !== projectIndex;
      card.setAttribute('role', 'group');
      card.setAttribute('aria-roledescription', state.lang === 'en' ? 'slide' : '슬라이드');
      card.setAttribute('aria-label', `${i + 1} / ${projectCards.length}`);
    });
    document.getElementById('project-prev').setAttribute('aria-label', state.lang === 'en' ? 'Previous project' : '이전 프로젝트');
    document.getElementById('project-next').setAttribute('aria-label', state.lang === 'en' ? 'Next project' : '다음 프로젝트');
    const position = document.getElementById('project-position');
    position.textContent = `${String(projectIndex + 1).padStart(2, '0')} / ${String(projectCards.length).padStart(2, '0')}`;
    position.setAttribute('aria-label', `${projectIndex + 1} / ${projectCards.length} · ${projectCards[projectIndex].querySelector('h3').textContent}`);
  }
  document.getElementById('project-prev').addEventListener('click', () => showProject(projectIndex - 1));
  document.getElementById('project-next').addEventListener('click', () => showProject(projectIndex + 1));
  projectCarousel.addEventListener('keydown', event => {
    if (!event.target.closest('.project-navigation')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showProject(projectIndex + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });

  function renderTopics() {
    const selector = document.getElementById('topic-selector');
    selector.innerHTML = topics.map(topic=>{
      const count = entries.filter(entry=>entry.topics.includes(topic.id)).length;
      return `<button type="button" id="area-${topic.id}" class="area-chip${state.topic===topic.id?' selected':''}" data-topic="${topic.id}" aria-pressed="${state.topic===topic.id}" aria-controls="topic-results"><span>${escape(topic[state.lang])}</span><span class="topic-count">${count}</span></button>`;
    }).join('');
    document.querySelectorAll('[data-topics-for]').forEach(slot=>{
      const entry=entries.find(item=>item.id===slot.dataset.topicsFor);
      slot.innerHTML=entry ? topicTags(entry.topics) : '';
    });
    const panel=document.getElementById('topic-results');
    panel.hidden=!state.topic;
    if(!state.topic){document.getElementById('topic-result-list').innerHTML='';return;}
    const matches=entries.filter(entry=>entry.topics.includes(state.topic));
    const label=topicLabel(state.topic);
    document.getElementById('topic-results-title').textContent=state.lang==='en'?`${label} · ${matches.length} related works`:`${label} · 관련 성과 ${matches.length}건`;
    document.getElementById('topic-result-list').innerHTML=matches.map(entry=>`<article class="topic-result-card"><div class="topic-result-main">${entry.image?`<img src="${entry.image}" alt="" loading="lazy" width="88" height="64">`:'<span class="topic-text-mark" aria-hidden="true">↗</span>'}<div><span class="entry-kind">${escape(localized(entry.kind))}</span><h4><a href="${entry.href}">${escape(localized(entry.title))}<span class="result-arrow" aria-hidden="true"> ↗</span></a></h4><p>${escape(localized(entry.meta))}</p></div></div><div class="entry-topic-tags">${topicTags(entry.topics)}</div></article>`).join('');
  }

  function selectTopic(id, scroll=false, toggle=false) {
    if(!topics.some(topic=>topic.id===id))return;
    state.topic=toggle&&state.topic===id?null:id;
    renderTopics();
    history.replaceState(null,'',state.topic?'#area-'+state.topic:'#areas');
    if(scroll) document.getElementById('areas').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  }

  function renderPapers() {
    const opened = new Set([...paperList.querySelectorAll('details[open]')].map(el => el.id));
    const years = [...new Set(papers.map(p => p.year))];
    index.innerHTML = years.map(year => `<div class="publication-year"><div class="year-label">${year}</div><div class="compact-papers">${papers.filter(p => p.year === year).map(p => `<div class="compact-paper"><a href="#paper-${p.id}">${escape(p.title)}</a><span class="compact-venue">${escape(p.shortVenue || p.venue)}</span></div>`).join('')}</div></div>`).join('');
    paperList.innerHTML = works.map(p => `<details class="paper" id="${itemId(p)}" data-type="${p.type}" ${opened.has(itemId(p)) ? 'open' : ''}>
      <summary><img class="paper-thumb" src="${p.image}" alt="" loading="lazy" width="132" height="85"><div><div class="paper-kicker"><span>${escape(localized(p.venue))}</span><span class="paper-status">${escape(text(p.status))}</span></div><h4 class="paper-title ${p.id === 'imm' || (state.lang === 'ko' && typeof p.title !== 'string') ? 'ko-title' : ''}">${escape(localized(p.title))}</h4><p class="paper-authors">${localized(p.authors)}</p><div class="paper-topic-summary">${p.topics.map(id=>`<span>${escape(topicLabel(id))}</span>`).join('')}</div></div><span class="paper-plus" aria-hidden="true">+</span></summary>
      <div class="paper-content"><figure class="paper-figure"><button type="button" class="figure-button" data-image="${p.image}" data-caption="${escape(text(p.figure))}" aria-label="${state.lang==='en'?'Enlarge figure: ':'그림 확대: '}${escape(localized(p.title))}"><img src="${p.image}" alt="${escape(text(p.figure))}" loading="lazy"></button><figcaption>${escape(text(p.figure))}</figcaption></figure><p class="paper-intro-label">${state.lang==='en'?'THE PAPER IN A MINUTE':'1분 안에 살펴보는 연구'}</p><p class="paper-description">${escape(text(p.summary))}</p><p class="paper-contribution">${escape(text(p.role))}</p><div class="entry-topic-tags">${topicTags(p.topics)}</div><div class="paper-actions">${p.links.map(link=>`<a href="${escape(link.url)}" target="_blank" rel="noopener">${escape(link[state.lang])}</a>`).join('')}</div></div>
    </details>`).join('');
    applyFilter();
  }
  function applyFilter() {
    let count=0;
    paperList.querySelectorAll('.paper').forEach(paper => {
      paper.hidden = state.filter !== 'all' && paper.dataset.type !== state.filter;
      if(!paper.hidden) count++;
    });
    document.querySelectorAll('[data-filter]').forEach(button => {
      const selected = button.dataset.filter === state.filter;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    document.getElementById('filter-status').textContent = state.lang==='en' ? `${count} publications shown` : `${count}편의 논문 표시 중`;
  }
  function changeLanguage(lang) {
    state.lang=lang;
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-en][data-ko]').forEach(element => {element.innerHTML=element.dataset[lang];});
    const button=document.getElementById('language-switch');
    button.innerHTML=lang==='en'?'한국어 <span aria-hidden="true">↗</span>':'EN <span aria-hidden="true">↗</span>';
    button.setAttribute('aria-label',lang==='en'?'한국어로 보기':'View in English');
    document.title=lang==='en'?'Jin-Woo Kim · 김진우 | Research & Projects':'김진우 · Jin-Woo Kim | 연구와 프로젝트';
    renderPapers();
    renderTopics();
    showProject(projectIndex);
    try{localStorage.setItem('jwk-language',lang);}catch{}
  }
  document.getElementById('language-switch').addEventListener('click',()=>changeLanguage(state.lang==='en'?'ko':'en'));
  document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{state.filter=button.dataset.filter;applyFilter();}));
  document.addEventListener('click',event=>{
    const chip=event.target.closest('[data-topic]');
    if(!chip)return;
    const topSelector=!!chip.closest('#topic-selector');
    selectTopic(chip.dataset.topic,!topSelector,topSelector);
    if(topSelector)document.getElementById('area-'+chip.dataset.topic).focus({preventScroll:true});
  });
  document.getElementById('close-topics').addEventListener('click',()=>{
    const previousTopic=state.topic;
    state.topic=null;renderTopics();history.replaceState(null,'','#areas');
    document.getElementById('area-'+previousTopic).focus({preventScroll:true});
  });

  function openFromHash() {
    const projectTarget = document.getElementById(location.hash.slice(1));
    const projectCard = projectTarget?.closest('.project-card');
    if (projectCard) {
      showProject(projectCards.indexOf(projectCard));
      if (projectTarget.tagName === 'DETAILS') projectTarget.open = true;
      requestAnimationFrame(() => document.getElementById('projects').scrollIntoView({block:'start'}));
      return;
    }
    if(location.hash === '#area-all') {
      history.replaceState(null,'','#areas');
    }
    if(location.hash === '#areas') {
      state.topic=null;renderTopics();
      return;
    }
    if(location.hash.startsWith('#area-')) {
      selectTopic(location.hash.slice(6));
      requestAnimationFrame(()=>document.getElementById('areas').scrollIntoView({block:'start'}));
      return;
    }
    if(location.hash === '#work') {
      requestAnimationFrame(()=>document.getElementById('work').scrollIntoView({block:'start'}));
      return;
    }
    if(!/^#(?:paper|work)-/.test(location.hash)) return;
    const target=document.getElementById(location.hash.slice(1));
    if(!target) return;
    if(target.hidden){state.filter='all';applyFilter();}
    target.open=true;
    requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'smooth'}));
  }
  document.addEventListener('click',event=>{
    const link=event.target.closest('a[href^="#paper-"], a[href^="#work-"], a[href^="#project-"]');
    if(link && link.hash===location.hash) openFromHash();
    const gc=event.target.closest('a[href="#gc-details"]');
    if(gc) document.getElementById('gc-details').open=true;
  });
  window.addEventListener('hashchange',openFromHash);

  const dialog=document.getElementById('figure-dialog');
  document.addEventListener('click',event=>{
    const trigger=event.target.closest('.figure-button');
    if(!trigger) return;
    document.getElementById('figure-full').src=trigger.dataset.image;
    document.getElementById('figure-full').alt=trigger.dataset.caption;
    document.getElementById('figure-caption').textContent=trigger.dataset.caption;
    dialog.showModal();
  });
  document.getElementById('close-figure').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('nav a').forEach(link=>link.classList.toggle('current',link.hash==='#'+entry.target.id));}});
  },{rootMargin:'-15% 0px -65% 0px',threshold:0});
  ['research','publications','projects','background'].forEach(id=>observer.observe(document.getElementById(id)));
  let language='en';try{language=localStorage.getItem('jwk-language')==='ko'?'ko':'en';}catch{}
  changeLanguage(language);
  openFromHash();
})();
