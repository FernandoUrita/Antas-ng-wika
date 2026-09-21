/* =========================================================
   ANTAS NG WIKA — Interaktibong Aralin
   ========================================================= */

/* -------- 1. LESSON CONTENT -------- */
const lessons = {
  pormal: {
    tag: 'PORMAL • PAMANTAYAN AT SINING',
    title: 'Pambansa at Panitikan',
    body: `
      <p>Ginagamit ang <strong>pambansang antas</strong> sa edukasyon, pamahalaan, midya, at iba pang opisyal na komunikasyon. Ito ang malawak na nauunawaan at sinusunod na pamantayan.</p>
      <p>Ang <strong>panitikan</strong> naman ay masining, malikhain, at maaaring matalinghaga. Makikita ito sa tula, nobela, sanaysay, at talumpating pampanitikan.</p>
      <h3>Pagkakaiba sa kilos</h3>
      <div class="example"><b>Pambansa:</b> “Mahalagang pangalagaan ang ating mga likas na yaman.”</div>
      <div class="example"><b>Panitikan:</b> “Ang kagubatan ang hininga ng lupang sinilangan.”</div>
      <div class="challenge"><strong>Hamon:</strong> Sa research presentation, pambansa ang pangunahing antas. Maaaring gumamit ng panitikan sa pamagat o pambungad kung angkop sa layunin.</div>
    `
  },
  barayti: {
    tag: 'LUGAR • PANGKAT • IDENTIDAD',
    title: 'Lalawiganin at Barayti',
    body: `
      <p>Ang <strong>lalawiganin</strong> ay mga salitang ginagamit sa isang tiyak na rehiyon o pamayanan. Maaari itong may natatanging bokabularyo, punto, o paraan ng pagbuo ng pangungusap.</p>
      <p>Mas malawak dito ang konsepto ng <strong>barayti ng wika</strong>: nagkakaroon ng baryasyon dahil sa heograpiya, pangkat panlipunan, propesyon, edad, o mismong sitwasyon.</p>
      <h3>Hindi “maling Filipino”</h3>
      <div class="example">Ang lokal na salita ay may sariling sistemang panlingguwistika at dalang kasaysayan. Kapag hindi ito nauunawaan ng lahat, magbigay ng katumbas o paliwanag.</div>
      <div class="challenge"><strong>Hamon:</strong> Sa panayam sa komunidad, panatilihin ang orihinal na lokal na salita sa sipi at ipaliwanag ang kahulugan nito para sa mas malawak na mambabasa.</div>
    `
  },
  impormal: {
    tag: 'ARAW-ARAW • BARKADA • DIGITAL',
    title: 'Kolokyal at Balbal',
    body: `
      <p>Ang <strong>kolokyal</strong> ay natural na wikang ginagamit sa pang-araw-araw na usapan. Madalas itong pinaikli: “sandali” → “saglit/teka,” o “kumusta” → “musta.”</p>
      <p>Ang <strong>balbal</strong> ay salitang nabubuo sa mga tiyak na pangkat o subkultura. Malikhaing-malikhaing ito at mabilis magbago, lalo na online.</p>
      <h3>Angkop, hindi awtomatikong mali</h3>
      <div class="example"><b>Sa group chat:</b> “Pre, send mo naman ’yung notes.”<br><b>Sa propesor:</b> “Magandang araw po. Maaari ko po bang hingin ang kopya ng lecture notes?”</div>
      <div class="challenge"><strong>Hamon:</strong> Iisang layunin, magkaibang kausap. Ang mahusay na tagapagsalita ay marunong magpalit ng antas nang hindi nawawala ang mensahe.</div>
    `
  },
  teknikal: {
    tag: 'PROPESYON • AGHAM • BATAS • MEDISINA',
    title: 'Teknikal at Eupemismo',
    body: `
      <p>Ang <strong>teknikal</strong> (tinatawag ding <em>jargon</em>) ay mga terminong may tiyak na kahulugan sa isang larang—agham, medisina, batas, inhenyeriya, at iba pa. Hindi ito para sa lahat, kaya kailangan ng paliwanag kapag lalabas sa larangang iyon.</p>
      <p>Ang <strong>eupemismo</strong> ay pagpapalambot ng salita para sa sensitibo, maselan, o hindi komportableng paksa. Halimbawa, “sumakabilang-buhay” kaysa “namatay.”</p>
      <h3>Pagkakaiba sa kilos</h3>
      <div class="example"><b>Teknikal:</b> “Hypertension ang diagnosis sa pasyente.”</div>
      <div class="example"><b>Eupemismo:</b> “Pumanaw nang payapa ang aming lolo.”</div>
      <div class="challenge"><strong>Hamon:</strong> Sa medikal na usapan, kailangan ang teknikal na termino para sa katumpakan. Sa pakikipag-usap sa pamilya ng pasyente, mas mainam ang eupemismo at simpleng paliwanag.</div>
    `
  }
};

/* -------- 2. QUIZ -------- */
const quiz = [
  { s:'Email sa propesor', q:'Alin ang pinakaangkop na pambungad?',
    a:['Uy Prof, may tanong ako.','Magandang araw po, Propesor. Nais ko pong linawin…','Lodi, pa-clarify naman.','Ano ba kasi ito?'],
    c:1, e:'Pormal at magalang angkop sa akademikong komunikasyon.' },
  { s:'Tula para sa klase', q:'Anong antas ang nangingibabaw sa linyang “Humahalik ang liwanag sa tahimik na dagat”?',
    a:['Pambansa','Panitikan','Kolokyal','Balbal'], c:1,
    e:'Masining at matalinghaga ang pahayag, kaya panitikan.' },
  { s:'Usapang magkakaibigan', q:'“Teka lang, parating na ako.” Ito ay halimbawa ng…',
    a:['Kolokyal','Panitikan','Teknikal','Pambansa lamang'], c:0,
    e:'Natural at pinaikling anyo ito sa pang-araw-araw na usapan.' },
  { s:'Panayam sa komunidad', q:'May lokal na salitang hindi alam ng mambabasa. Ano ang pinakamainam?',
    a:['Tanggalin agad ang salita','Tawaging maling Filipino','Panatilihin at lagyan ng paliwanag','Palitan lahat ng balbal'], c:2,
    e:'Napananatili nito ang identidad habang nagiging malinaw sa mas malawak na mambabasa.' },
  { s:'Research paper', q:'Alin ang dapat iwasan sa pangunahing talakay?',
    a:['Malinaw na terminolohiya','Mga sanggunian','Hindi ipinaliwanag na balbal','Pambansang antas'], c:2,
    e:'Maaaring malabo at hindi angkop ang di-ipinaliwanag na balbal sa akademikong teksto.' },
  { s:'Online community', q:'Bakit mabilis magbago ang mga salitang balbal?',
    a:['Bawal ang mga ito','Nakaugnay sa malikhaing gamit ng pangkat at uso','Iisa lamang ang kahulugan nila','Ginagamit lang sa aklat'], c:1,
    e:'Hinuhubog ang balbal ng pangkat, uso, at mabilis na palitan online.' },
  { s:'Dalawang magkaibang kausap', q:'Ano ang tawag sa sadyang pagpapalit ng paraan ng pagsasalita ayon sa kausap o sitwasyon?',
    a:['Paglimot sa wika','Pag-aangkop o code-switching','Maling gramatika','Pagsasalin lamang'], c:1,
    e:'Ang pag-aangkop—at kung wika ang pinapalitan, code-switching—ay estratehiyang komunikatibo.' },
  { s:'Pangkalahatang prinsipyo', q:'Paano pinakamahusay sinusuri ang antas ng wika?',
    a:['Kung alin ang pinakamahabang salita','Kung alin ang pinakamoderno','Kung angkop sa kausap, layunin, lugar, at daluyan','Kung purong Filipino lamang'], c:2,
    e:'Ang konteksto ang sentro ng mahusay at responsableng pagpili ng wika.' }
];

/* -------- 3. GLOSSARY DATA -------- */
const glossary = [
  { t:'Antas ng Wika', e:'Language level / register', d:'Antas ng pormalidad at paraan ng paggamit ng wika ayon sa sitwasyon, kausap, lugar, at daluyan.' },
  { t:'Pambansa', e:'National language', d:'Pamantayang anyo ng wika; ginagamit sa edukasyon, pamahalaan, midya.' },
  { t:'Panitikan', e:'Literature', d:'Masining at malikhaing paggamit ng wika; tula, nobela, sanaysay.' },
  { t:'Lalawiganin', e:'Regional', d:'Salitang ginagamit sa isang tiyak na rehiyon o pamayanan.' },
  { t:'Kolokyal', e:'Colloquial', d:'Natural, pinaikling anyo ng wika sa pang-araw-araw na usapan.' },
  { t:'Balbal', e:'Slang', d:'Salitang nabubuo sa pangkat o subkultura; mabilis magbago.' },
  { t:'Teknikal / Jargon', e:'Technical / Jargon', d:'Terminong may tiyak na kahulugan sa isang propesyon o larang.' },
  { t:'Eupemismo', e:'Euphemism', d:'Pagpapalambot ng salita para sa sensitibo o maselang paksa.' },
  { t:'Barayti', e:'Variety', d:'Baryasyon ng wika dahil sa heograpiya, pangkat, edad, o sitwasyon.' },
  { t:'Idyolek', e:'Idiolect', d:'Natatanging paraan ng pagsasalita ng isang indibidwal.' },
  { t:'Sosyolek', e:'Sociolect', d:'Barayti ng wika ng isang partikular na pangkat panlipunan.' },
  { t:'Register', e:'Register', d:'Antas ng pormalidad na pinipili ayon sa sitwasyon.' },
  { t:'Code-switching', e:'Code-switching', d:'Pagpapalit ng wika o barayti sa loob ng isang usapan.' },
  { t:'Pag-aangkop', e:'Accommodation', d:'Pagsasaayos ng pananalita ayon sa kausap o sitwasyon.' },
  { t:'Diskurso', e:'Discourse', d:'Malawak na yunit ng wika—pag-uusap, teksto, o talumpati.' },
  { t:'Ortograpiya', e:'Orthography', d:'Sistema ng pagbaybay at pagsulat ng wika.' },
  { t:'Ponolohiya', e:'Phonology', d:'Pag-aaral ng tunog ng wika.' },
  { t:'Morpolohiya', e:'Morphology', d:'Pag-aaral ng kayarian ng salita.' },
  { t:'Sintaks', e:'Syntax', d:'Pag-aaral ng kayarian ng pangungusap.' },
  { t:'Semantika', e:'Semantics', d:'Pag-aaral ng kahulugan ng salita at pangungusap.' }
];

/* -------- 4. DOM SHORTCUTS -------- */
const $  = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];

/* -------- 5. LESSON DIALOG (with focus trap) -------- */
const dialog  = $('#lessonDialog');
const dlgContent = $('#dialogContent');
let lastFocused = null;

$$('.lesson-card').forEach(btn => btn.addEventListener('click', () => {
  const l = lessons[btn.dataset.lesson];
  if (!l) return;
  dlgContent.innerHTML = `
    <article class="dialog-inner">
      <span class="tag">${l.tag}</span>
      <h2 id="dialogTitle">${l.title}</h2>
      ${l.body}
    </article>`;
  lastFocused = document.activeElement;
  dialog.showModal();
  setTimeout(() => $('.dialog-close').focus(), 30);
}));

$('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { if (lastFocused) lastFocused.focus(); });

// Focus trap inside dialog
dialog.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const focusables = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', dialog)
    .filter(el => !el.disabled && el.offsetParent !== null);
  if (!focusables.length) return;
  const first = focusables[0], last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* -------- 6. QUIZ ENGINE -------- */
let index = 0, score = 0, chosen = false;
let timerId = null, timeLeft = 60;
const TIMER_SECONDS = 60;

const count       = $('#quizCount');
const bar         = $('#progressBar');
const scenarioEl  = $('#scenario');
const questionEl  = $('#question');
const answersEl   = $('#answers');
const feedbackEl  = $('#feedback');
const nextBtn     = $('#nextBtn');
const scorePrev   = $('#scorePreview');
const timerEl     = $('#timerDisplay');
const timerToggle = $('#timerToggle');
const resultCard  = $('#resultCard');
const quizCard    = $('#quizCard');

function renderQuestion() {
  chosen = false;
  nextBtn.disabled = true;
  feedbackEl.textContent = '';
  const item = quiz[index];

  count.textContent = `Tanong ${index + 1} sa ${quiz.length}`;
  bar.style.width   = `${((index + 1) / quiz.length) * 100}%`;
  scenarioEl.textContent = item.s;
  questionEl.textContent = item.q;
  answersEl.innerHTML = '';

  item.a.forEach((ans, i) => {
    const b = document.createElement('button');
    b.className = 'answer';
    b.innerHTML = `<span class="key">${String.fromCharCode(65 + i)}</span><span>${ans}</span>`;
    b.addEventListener('click', () => selectAnswer(i, b));
    answersEl.appendChild(b);
  });

  if (timerToggle.checked) startTimer();
  else stopTimer();
}

function selectAnswer(i, btn) {
  if (chosen) return;
  chosen = true;
  stopTimer();
  const item = quiz[index];

  $$('.answer').forEach((el, j) => {
    el.disabled = true;
    if (j === item.c) el.classList.add('correct');
  });

  if (i === item.c) {
    score++;
    feedbackEl.innerHTML = `<strong>Tama.</strong> ${item.e}`;
  } else {
    btn.classList.add('wrong');
    feedbackEl.innerHTML = `<strong>Hindi pa.</strong> ${item.e}`;
  }
  nextBtn.disabled = false;
  scorePrev.textContent = score;
  saveProgress();
}

function startTimer() {
  stopTimer();
  timeLeft = TIMER_SECONDS;
  timerEl.hidden = false;
  timerEl.textContent = `${timeLeft}s`;
  timerId = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `${timeLeft}s`;
    timerEl.classList.toggle('warn', timeLeft <= 10);
    if (timeLeft <= 0) {
      stopTimer();
      if (!chosen) {
        const item = quiz[index];
        $$('.answer').forEach((el, j) => {
          el.disabled = true;
          if (j === item.c) el.classList.add('correct');
        });
        chosen = true;
        feedbackEl.innerHTML = `<strong>Tapos na ang oras.</strong> ${item.e}`;
        nextBtn.disabled = false;
      }
    }
  }, 1000);
}
function stopTimer() { clearInterval(timerId); timerId = null; }

function showResult() {
  quizCard.hidden = true;
  resultCard.hidden = false;
  $('#finalScore').textContent = score;
  const pct = score / quiz.length;
  $('#resultTitle').textContent = pct >= .875 ? 'Mahusay kang bumasa ng konteksto!' :
                                  pct >= .625 ? 'Maganda ang pundasyon mo.' :
                                                'Balikan natin ang mga module.';
  $('#resultText').textContent  = pct >= .875 ? 'Kaya mong iugnay ang antas ng wika sa tunay na sitwasyong komunikatibo.' :
                                  pct >= .625 ? 'Malinaw na sa iyo ang karamihan ng konsepto. Balikan ang paliwanag sa mga tanong na hindi nakuha.' :
                                                'I-click muli ang mga larawang-aralin at ituon ang pansin sa kausap, layunin, lugar, at daluyan.';

  if (pct >= .875) fireConfetti();
  saveProgress();
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

nextBtn.addEventListener('click', () => {
  index++;
  index < quiz.length ? renderQuestion() : showResult();
});

$('#restartBtn').addEventListener('click', () => {
  index = 0; score = 0;
  scorePrev.textContent = '—';
  resultCard.hidden = true;
  quizCard.hidden   = false;
  renderQuestion();
});

/* -------- 7. SHARE RESULT -------- */
const shareBtn = $('#shareBtn');
if (navigator.share) {
  shareBtn.hidden = false;
  shareBtn.addEventListener('click', () => {
    navigator.share({
      title: 'Antas ng Wika — Pagsusulit',
      text: `Nakuha ko ang ${score}/8 sa pagsusulit tungkol sa Antas ng Wika!`,
      url: location.href
    }).catch(() => {});
  });
}

/* -------- 8. KEYBOARD SHORTCUTS -------- */
document.addEventListener('keydown', e => {
  if (dialog.open) return;
  if (quizCard.hidden) return;
  const tag = document.activeElement.tagName;
  if (['INPUT','TEXTAREA','SELECT'].includes(tag)) return;

  const k = e.key.toLowerCase();
  const map = { a:0, b:1, c:2, d:3 };
  if (k in map) {
    const btns = $$('.answer');
    if (btns[map[k]] && !btns[map[k]].disabled) btns[map[k]].click();
  }
  if (e.key === 'Enter' && !nextBtn.disabled) nextBtn.click();
});

/* -------- 9. PROGRESS PERSISTENCE -------- */
const STORAGE_KEY = 'antas_wika_progress_v1';
function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ score, index, ts: Date.now() }));
  } catch {}
}
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    if (d && typeof d.score === 'number' && d.score > 0) {
      const saved = $('#savedScore');
      saved.hidden = false;
      saved.textContent = `Huling puntos: ${d.score}/8 (${new Date(d.ts).toLocaleDateString('fil-PH')})`;
    }
  } catch {}
}
loadProgress();

/* -------- 10. NAV / MENU / THEME / ACTIVE LINK -------- */
const menu  = $('#menuBtn');
const links = $('#navLinks');
menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
links.addEventListener('click', () => {
  links.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
});

// Theme
const themeToggle = $('#themeToggle');
const themeIcon   = themeToggle.querySelector('.theme-icon');
function applyTheme(t) {
  document.body.classList.toggle('dark', t === 'dark');
  themeIcon.textContent = t === 'dark' ? '☀️' : '🌙';
  document.documentElement.style.colorScheme = t === 'dark' ? 'dark' : 'light';
}
applyTheme(localStorage.getItem('antas_theme') || 'light');
themeToggle.addEventListener('click', () => {
  const next = document.body.classList.contains('dark') ? 'light' : 'dark';
  localStorage.setItem('antas_theme', next);
  applyTheme(next);
});

/* -------- 10b. STICKY NAV HIDE ON SCROLL DOWN -------- */
const navWrap = $('#navWrap');
let lastY = window.scrollY;
let navHidden = false;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 120) {
    if (y > lastY + 4 && !navHidden) { navWrap.classList.add('nav-hidden'); navHidden = true; }
    else if (y < lastY - 4 && navHidden) { navWrap.classList.remove('nav-hidden'); navHidden = false; }
  } else {
    navWrap.classList.remove('nav-hidden');
    navHidden = false;
  }
  lastY = y;
}, { passive: true });

/* -------- 10c. ACTIVE NAV LINK -------- */
const navMap = {};
$$('[data-nav]').forEach(a => navMap[a.dataset.nav] = a);
const sections = ['gabay','aralin','talasalitaan','pagsusulit'];
const navIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      Object.values(navMap).forEach(a => a.classList.remove('active'));
      const link = navMap[en.target.id];
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(id => { const el = document.getElementById(id); if (el) navIO.observe(el); });

/* -------- 11. REVEAL ANIMATIONS -------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .12 });
$$('.reveal').forEach(x => io.observe(x));

/* -------- 12. GLOSSARY -------- */
function renderGlossary(filter = '') {
  const list = $('#glossaryList');
  const empty = $('#glossaryEmpty');
  const f = filter.trim().toLowerCase();
  const items = glossary.filter(g =>
    !f || g.t.toLowerCase().includes(f) ||
    g.e.toLowerCase().includes(f) ||
    g.d.toLowerCase().includes(f)
  );
  list.innerHTML = items.map(g => `
    <article class="glossary-item">
      <header><strong>${g.t}</strong><em>${g.e}</em></header>
      <p>${g.d}</p>
    </article>
  `).join('');
  empty.hidden = items.length > 0;
}
renderGlossary();
$('#glossarySearch').addEventListener('input', e => renderGlossary(e.target.value));

/* -------- 13. REFLECTION BOX -------- */
const REFLECT_KEY = 'antas_wika_reflections_v1';
function loadReflections() {
  try { return JSON.parse(localStorage.getItem(REFLECT_KEY) || '[]'); }
  catch { return []; }
}
function saveReflections(arr) {
  try { localStorage.setItem(REFLECT_KEY, JSON.stringify(arr)); } catch {}
}
function renderReflections() {
  const arr = loadReflections();
  const list = $('#reflectionList');
  const clear = $('#clearReflections');
  list.innerHTML = arr.map((r, i) => `
    <li>
      <span class="pill">${r.level}</span>
      <p>${escapeHtml(r.text)}</p>
      <button class="del" data-i="${i}" aria-label="Burahin">×</button>
    </li>
  `).join('');
  clear.hidden = arr.length === 0;
}
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}
$('#reflectionForm').addEventListener('submit', e => {
  e.preventDefault();
  const level = $('#reflectionLevel').value;
  const text  = $('#reflectionText').value.trim();
  if (!text) return;
  const arr = loadReflections();
  arr.unshift({ level, text, ts: Date.now() });
  saveReflections(arr.slice(0, 30));
  $('#reflectionText').value = '';
  renderReflections();
});
$('#reflectionList').addEventListener('click', e => {
  const btn = e.target.closest('.del');
  if (!btn) return;
  const arr = loadReflections();
  arr.splice(+btn.dataset.i, 1);
  saveReflections(arr);
  renderReflections();
});
$('#clearReflections').addEventListener('click', () => {
  if (!confirm('Burahin lahat ng na-save na halimbawa?')) return;
  saveReflections([]);
  renderReflections();
});
renderReflections();

/* -------- 14. CONFETTI -------- */
function fireConfetti() {
  const layer = $('#confetti');
  const colors = ['#ffc93c','#ee5d46','#51c7b8','#3678e5','#121842'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[(Math.random() * colors.length) | 0];
    piece.style.animationDelay = (Math.random() * .5) + 's';
    piece.style.animationDuration = (1.6 + Math.random() * 1.4) + 's';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 3200);
  }
}

/* -------- 15. READING PROGRESS + BACK TO TOP -------- */
const readingBar = $('#readingBar');
function updateReading() {
  const h = document.documentElement;
  const scrolled = h.scrollTop;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? (scrolled / max) * 100 : 0;
  readingBar.style.width = pct + '%';
  const backTop = $('#backTop');
  if (scrolled > 600) backTop.hidden = false;
  else backTop.hidden = true;
}
window.addEventListener('scroll', updateReading, { passive: true });
updateReading();
$('#backTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* -------- 16. YEAR -------- */
$('#year').textContent = new Date().getFullYear();

/* -------- 17. MODEL CONTEXT (para sa AI tools) -------- */
if (document.modelContext?.registerTool) {
  const ac = new AbortController();
  Promise.resolve(document.modelContext.registerTool({
    name: 'start_antas_ng_wika_quiz',
    title: 'Simulan ang pagsusulit',
    description: 'Buksan at i-reset ang pagsusulit tungkol sa Antas ng Wika.',
    inputSchema: { type:'object', properties:{}, additionalProperties:false },
    annotations: { readOnlyHint:false, untrustedContentHint:false },
    execute() {
      index = 0; score = 0;
      scorePrev.textContent = '—';
      resultCard.hidden = true;
      quizCard.hidden = false;
      renderQuestion();
      $('#pagsusulit').scrollIntoView();
      return { status:'started', questions: quiz.length };
    }
  }, { signal: ac.signal })).catch(() => {});
}

/* -------- 18. START -------- */
renderQuestion();