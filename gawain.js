/* =========================================================
   MGA GAWAIN — Identification + Pagsasalin (40 items)
   ========================================================= */

const gawainData = [
  {
    section: 'Bahagi I — Pagkilala sa Antas ng Wika',
    instruction: 'Panuto: Tukuyin kung anong antas ng wika ang may salungguhit sa pangungusap.',
    legendType: 'antas',
    questions: [
      { q: 'Ang <u>kalayaan</u> ay karapatan ng bawat mamamayang Pilipino.', a: 'A', e: 'Pambansa — pormal at opisyal na salita.' },
      { q: '<u>Marikit</u> ang tanawin sa ilalim ng maliwanag na buwan.', a: 'B', e: 'Pampanitikan — masining na paglalarawan.' },
      { q: 'Sa Batangas, tinatawag na <u>masa</u> ang pagkain ng magkakasama.', a: 'C', e: 'Lalawiganin — salitang Batangas.' },
      { q: '<u>Teka</u>, sandali lang, sasama ako sa iyo.', a: 'D', e: 'Kolokyal — impormal na pinaikli.' },
      { q: 'Ang <u>datung</u> na ito ay gagamitin sa aming proyekto.', a: 'E', e: 'Balbal — impormal na salita para sa pera.' },
      { q: 'Ang <u>Pilipinas</u> ay mayaman sa likas na yaman at magagandang tanawin.', a: 'A', e: 'Pambansa — pormal at opisyal.' },
      { q: 'Ang kanyang <u>puso ay dumadagundong</u> sa tuwa nang makita ang pamilya.', a: 'B', e: 'Pampanitikan — masining na paglalarawan.' },
      { q: 'Sa Cebu, ang <u>sugbo</u> ay tumutukoy sa pagsisindi o pagluluto.', a: 'C', e: 'Lalawiganin — salitang Cebuano.' },
      { q: '<u>Kelan</u> ka uuwi galing sa paaralan?', a: 'D', e: 'Kolokyal — pinaikling anyo ng "kailan".' },
      { q: 'Siya ay tunay na <u>lodi</u> sa aming klase dahil sa kanyang talino.', a: 'E', e: 'Balbal — baliktad na anyo ng "idolo".' },
      { q: 'Ang <u>edukasyon</u> ay susi sa magandang kinabukasan ng kabataan.', a: 'A', e: 'Pambansa — pormal at pangkalahatan.' },
      { q: 'Ang <u>hininga ng hangin</u> ay nagbibigay ng ginhawa sa mainit na araw.', a: 'B', e: 'Pampanitikan — personipikasyon ng hangin.' },
      { q: 'Sa Ilocos, ang <u>bukel</u> ay ginagamit kapag tumutukoy sa butil ng bigas.', a: 'C', e: 'Lalawiganin — salitang Ilokano.' },
      { q: '<u>Di</u> ko alam kung paano sasagutin ang tanong na iyan.', a: 'D', e: 'Kolokyal — pinaikling "hindi".' },
      { q: 'Huwag kang maging <u>jeproks</u>, mag-aral ka nang mabuti.', a: 'E', e: 'Balbal — impormal, mula sa "jeep" + "proks".' },
      { q: 'Ang <u>wika</u> ay nagbubuklod sa magkakaibang panig ng bansa.', a: 'A', e: 'Pambansa — pormal at pangkalahatan.' },
      { q: 'Ang <u>bukang-liwayway</u> ay nagdadala ng bagong pag-asa sa lahat.', a: 'B', e: 'Pampanitikan — masining na paglalarawan ng umaga.' },
      { q: 'Sa Samar, ang <u>maratabat</u> ay tumutukoy sa dangal o pagpapahalaga sa sarili.', a: 'C', e: 'Lalawiganin — salitang Waray.' },
      { q: '<u>Pwede</u> bang makahiram ng lapis sandali?', a: 'D', e: 'Kolokyal — pinaikling "pwede".' },
      { q: 'Ang <u>erpat</u> ko ay nagtatrabaho nang maigi para sa aming pamilya.', a: 'E', e: 'Balbal — impormal na tawag sa ama.' }
    ]
  },
  {
    section: 'Bahagi II — Pagsasalin sa Pambansa',
    instruction: 'Panuto: Isalin ang sumusunod na salita/pahayag sa Wikang Pambansa.',
    legendType: 'translate',
    questions: [
      { q: 'Isalin sa Pambansa: <u>Marikit</u> (Pampanitikan)', a: 'B', options: ['Maliwanag', 'Maganda', 'Maliit', 'Malaki'], e: 'Ang "marikit" ay Pampanitikang salita para sa "maganda".' },
      { q: 'Isalin sa Pambansa: <u>Kelan</u> (Kolokyal)', a: 'A', options: ['Kailan', 'Saan', 'Sino', 'Ano'], e: 'Ang "kelan" ay Kolokyal na anyo ng "kailan".' },
      { q: 'Isalin sa Pambansa: <u>Datung</u> (Balbal)', a: 'C', options: ['Ginto', 'Salapi', 'Pera', 'Bayad'], e: 'Ang "datung" ay Balbal na salita para sa "pera".' },
      { q: 'Isalin sa Pambansa: <u>Bukang-liwayway</u> (Pampanitikan)', a: 'B', options: ['Gabi', 'Umaga', 'Tanghali', 'Hapon'], e: 'Ang "bukang-liwayway" ay Pampanitikang salita para sa "umaga" o "pagsikat ng araw".' },
      { q: 'Isalin sa Pambansa: <u>Di</u> (Kolokyal)', a: 'D', options: ['Oo', 'Siguro', 'Baka', 'Hindi'], e: 'Ang "di" ay Kolokyal na anyo ng "hindi".' },
      { q: 'Isalin sa Pambansa: <u>Lodi</u> (Balbal)', a: 'A', options: ['Idolo', 'Kaaway', 'Kaibigan', 'Kaklase'], e: 'Ang "lodi" ay Balbal na baliktad ng "idolo".' },
      { q: 'Isalin sa Pambansa: <u>Himig</u> (Pampanitikan)', a: 'C', options: ['Tula', 'Sayaw', 'Awit', 'Tugtog'], e: 'Ang "himig" ay Pampanitikang salita para sa "awit" o "musika".' },
      { q: 'Isalin sa Pambansa: <u>San</u> (Kolokyal)', a: 'B', options: ['Sino', 'Saan', 'Kailan', 'Ano'], e: 'Ang "san" ay Kolokyal na anyo ng "saan".' },
      { q: 'Isalin sa Pambansa: <u>Erpat</u> (Balbal)', a: 'D', options: ['Kuya', 'Lolo', 'Tiyo', 'Ama'], e: 'Ang "erpat" ay Balbal na tawag sa "ama" o "tatay".' },
      { q: 'Isalin sa Pambansa: <u>Daloy</u> (Pampanitikan)', a: 'A', options: ['Pag-usad', 'Paghinto', 'Pagbagsak', 'Pag-akyat'], e: 'Ang "daloy" ay Pampanitikang salita para sa "pagdaloy" o "pag-usad".' },
      { q: 'Isalin sa Pambansa: <u>Magkanu</u> (Kolokyal)', a: 'C', options: ['Magaling', 'Mabuti', 'Magkano', 'Marami'], e: 'Ang "magkanu" ay Kolokyal na anyo ng "magkano".' },
      { q: 'Isalin sa Pambansa: <u>Jowa</u> (Balbal)', a: 'B', options: ['Kaibigan', 'Kasintahan', 'Kapitbahay', 'Kamag-anak'], e: 'Ang "jowa" ay Balbal na salita para sa "kasintahan".' },
      { q: 'Isalin sa Pambansa: <u>Bughaw</u> (Pampanitikan)', a: 'D', options: ['Puti', 'Itim', 'Pula', 'Asul'], e: 'Ang "bughaw" ay Pampanitikang salita para sa "asul".' },
      { q: 'Isalin sa Pambansa: <u>Musta</u> (Kolokyal)', a: 'A', options: ['Kumusta', 'Mabuti', 'Malungkot', 'Masaya'], e: 'Ang "musta" ay Kolokyal na anyo ng "kumusta".' },
      { q: 'Isalin sa Pambansa: <u>Ermats</u> (Balbal)', a: 'C', options: ['Tita', 'Lola', 'Ina', 'Ate'], e: 'Ang "ermats" ay Balbal na tawag sa "ina" o "nanay".' },
      { q: 'Isalin sa Pambansa: <u>Silakbo</u> (Pampanitikan)', a: 'B', options: ['Katahimikan', 'Matinding damdamin', 'Kalungkutan', 'Kasiyahan'], e: 'Ang "silakbo" ay Pampanitikang salita para sa "matinding damdamin" o "pagsabog ng damdamin".' },
      { q: 'Isalin sa Pambansa: <u>Pwidi</u> (Kolokyal)', a: 'D', options: ['Hindi', 'Siguro', 'Baka', 'Pwede'], e: 'Ang "pwidi" ay Kolokyal na anyo ng "pwede".' },
      { q: 'Isalin sa Pambansa: <u>Petmalu</u> (Balbal)', a: 'A', options: ['Magaling', 'Mabait', 'Matalino', 'Masipag'], e: 'Ang "petmalu" ay Balbal na baliktad ng "malupet" — nangangahulugang "magaling".' },
      { q: 'Isalin sa Pambansa: <u>Tala</u> (Pampanitikan)', a: 'C', options: ['Buwan', 'Araw', 'Bituin', 'Ulap'], e: 'Ang "tala" ay Pampanitikang salita para sa "bituin".' },
      { q: 'Isalin sa Pambansa: <u>Gusta</u> (Kolokyal)', a: 'B', options: ['Ayaw', 'Gusto', 'Kailangan', 'Dapat'], e: 'Ang "gusta" ay Kolokyal na anyo ng "gusto".' }
    ]
  }
];

function initGawain() {
  const card = document.getElementById('gawainCard');
  const resultCard = document.getElementById('gawainResult');
  if (!card) return;

  // Flatten lahat ng tanong
  const allQuestions = [];
  gawainData.forEach((section, sIdx) => {
    section.questions.forEach(q => {
      allQuestions.push({ ...q, section: section.section, sectionIdx: sIdx, legendType: section.legendType });
    });
  });

  const TOTAL = allQuestions.length;
  let index = 0;
  let score = 0;
  let chosen = false;

  const count = document.getElementById('gawainCount');
  const bar = document.getElementById('gawainProgressBar');
  const sectionTag = document.getElementById('gawainSectionTag');
  const instructionEl = document.getElementById('gawainInstruction');
  const questionEl = document.getElementById('gawainQuestion');
  const answersEl = document.getElementById('gawainAnswers');
  const feedbackEl = document.getElementById('gawainFeedback');
  const nextBtn = document.getElementById('gawainNextBtn');
  const headerScore = document.getElementById('headerScore');
  const legendEl = document.getElementById('legendDynamic');
  const nameInput = document.getElementById('studentName');
  const dateInput = document.getElementById('studentDate');

  // Auto-fill date
  if (dateInput && !dateInput.value) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.value = yyyy + '-' + mm + '-' + dd;
  }

  function formatDate(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr + 'T00:00:00');
    if (isNaN(d)) return dateStr;
    const months = ['Enero','Pebrero','Marso','Abril','Mayo','Hunyo','Hulyo','Agosto','Setyembre','Oktubre','Nobyembre','Disyembre'];
    return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }

  function validateName() {
    const name = (nameInput?.value || '').trim();
    if (!name) {
      nameInput?.focus();
      nameInput?.classList.add('shake');
      setTimeout(() => nameInput?.classList.remove('shake'), 500);
      return false;
    }
    return true;
  }

  function updateLegend(type) {
    if (type === 'antas') {
      legendEl.innerHTML = `
        <span><b>A.</b> Pambansa</span>
        <span><b>B.</b> Pampanitikan</span>
        <span><b>C.</b> Lalawiganin</span>
        <span><b>D.</b> Kolokyal</span>
        <span><b>E.</b> Balbal</span>`;
    } else {
      legendEl.innerHTML = `
        <span><b>A.</b> Unang pagpipilian</span>
        <span><b>B.</b> Pangalawa</span>
        <span><b>C.</b> Pangatlo</span>
        <span><b>D.</b> Pang-apat</span>`;
    }
  }

  function renderQuestion() {
    const item = allQuestions[index];
    if (!item) return;

    chosen = false;

    count.textContent = 'Tanong ' + (index + 1) + ' sa ' + TOTAL;
    bar.style.width = ((index + 1) / TOTAL * 100) + '%';
    sectionTag.textContent = item.section;

    const section = gawainData[item.sectionIdx];
    instructionEl.textContent = section.instruction;
    updateLegend(section.legendType);
    questionEl.innerHTML = '<span class="written-q-num">' + (index + 1) + '.</span> ' + item.q;

    answersEl.innerHTML = '';
    const options = item.options || ['Pambansa', 'Pampanitikan', 'Lalawiganin', 'Kolokyal', 'Balbal'];

    options.forEach((opt, i) => {
      const letter = String.fromCharCode(65 + i);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'written-answer';
      btn.innerHTML = '<span class="written-answer-key">' + letter + '</span><span class="written-answer-text">' + opt + '</span>';
      btn.addEventListener('click', () => {
        if (!validateName()) return;
        selectAnswer(i, btn);
      });
      answersEl.appendChild(btn);
    });

    feedbackEl.innerHTML = '';
    feedbackEl.className = 'written-feedback-box';
    nextBtn.disabled = true;
    nextBtn.innerHTML = 'Susunod <span>→</span>';
  }

  function selectAnswer(i, btn) {
    if (chosen) return;
    chosen = true;

    const item = allQuestions[index];
    const buttons = answersEl.querySelectorAll('.written-answer');
    const correctIdx = item.a.charCodeAt(0) - 65;

    buttons.forEach((el, j) => {
      el.disabled = true;
      if (j === correctIdx) el.classList.add('correct');
    });

    if (i === correctIdx) {
      score++;
      feedbackEl.innerHTML = '<strong>✓ Tama!</strong> ' + (item.e || '');
      feedbackEl.classList.add('correct');
      fireConfetti();
    } else {
      btn.classList.add('wrong');
      feedbackEl.innerHTML = '<strong>✗ Mali.</strong> Ang tamang sagot ay <b>' + item.a + '</b>. ' + (item.e || '');
      feedbackEl.classList.add('wrong');
    }

    if (headerScore) headerScore.textContent = score + ' / ' + TOTAL;
    nextBtn.disabled = false;

    if (index === TOTAL - 1) {
      nextBtn.innerHTML = 'Tapusin <span>✓</span>';
    }
  }

  nextBtn.addEventListener('click', () => {
    if (index < TOTAL - 1) {
      index++;
      renderQuestion();
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      showResult();
    }
  });

  function showResult() {
    card.hidden = true;
    resultCard.hidden = false;

    document.getElementById('finalGawainScore').textContent = score;
    const pct = score / TOTAL;

    document.getElementById('gawainResultTitle').textContent =
      pct >= 0.9 ? 'Napakahusay!' :
      pct >= 0.75 ? 'Mahusay!' :
      pct >= 0.5 ? 'Maganda ang pundasyon.' :
      'Kailangan pang magsanay.';

    document.getElementById('gawainResultText').textContent =
      pct >= 0.9 ? 'Ganap mong nauunawaan ang mga antas ng wika. Keep it up!' :
      pct >= 0.75 ? 'Malinaw sa iyo ang karamihan ng konsepto. Balikan ang mga tanong na hindi nakuha.' :
      pct >= 0.5 ? 'May pundasyon ka na. Balikan ang mga module para sa mas malinaw na pag-unawa.' :
      'Balikan ang mga aralin at subukan muli. Kaya mo yan!';

    const name = (nameInput?.value || '').trim() || '—';
    document.getElementById('resultName').textContent = name;
    document.getElementById('resultDate').textContent = formatDate(dateInput?.value);

    if (pct >= 0.9) fireConfetti();
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  document.getElementById('restartGawainBtn')?.addEventListener('click', () => {
    index = 0;
    score = 0;
    if (headerScore) headerScore.textContent = '— / ' + TOTAL;
    resultCard.hidden = true;
    card.hidden = false;
    renderQuestion();
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  function buildShareText() {
    const name = (nameInput?.value || '').trim() || '—';
    const date = formatDate(dateInput?.value);
    const pct = Math.round((score / TOTAL) * 100);
    return '📝 MGA GAWAIN: ANTAS NG WIKA\n' +
           '━━━━━━━━━━━━━━━━━━\n' +
           '👤 Pangalan: ' + name + '\n' +
           '📅 Petsa: ' + date + '\n' +
           '🎯 Iskor: ' + score + ' / ' + TOTAL + ' (' + pct + '%)\n' +
           '━━━━━━━━━━━━━━━━━━\n' +
           'Subukan din: ' + location.href;
  }

  document.getElementById('shareGawainQuiz')?.addEventListener('click', async () => {
    const text = buildShareText();
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Mga Gawain: Antas ng Wika', text: text, url: location.href });
        return;
      } catch (err) {
        if (err.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(text);
      showHint('✓ Nakopya na! I-paste sa chat.');
    } catch {
      fallbackCopy(text);
      showHint('✓ Nakopya na! I-paste sa chat.');
    }
  });

  document.getElementById('copyGawainQuiz')?.addEventListener('click', async () => {
    const text = buildShareText();
    try {
      await navigator.clipboard.writeText(text);
      showHint('✓ Nakopya na sa clipboard!');
    } catch {
      fallbackCopy(text);
      showHint('✓ Nakopya na sa clipboard!');
    }
  });

  function showHint(msg) {
    const hint = document.getElementById('shareHint');
    if (!hint) return;
    hint.textContent = msg;
    hint.hidden = false;
    setTimeout(() => { hint.hidden = true; }, 3000);
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch {}
    document.body.removeChild(ta);
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    const c = document.getElementById('gawainCard');
    const r = document.getElementById('gawainResult');
    if (!c || c.hidden || !r.hidden) return;

    const tag = document.activeElement.tagName;
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return;

    const k = e.key.toLowerCase();
    const map = { a: 0, b: 1, c: 2, d: 3, e: 4 };
    if (k in map) {
      const btns = document.querySelectorAll('.written-answer');
      if (btns[map[k]] && !btns[map[k]].disabled) btns[map[k]].click();
    }
    if (e.key === 'Enter') {
      const nb = document.getElementById('gawainNextBtn');
      if (nb && !nb.disabled) nb.click();
    }
  });

  renderQuestion();
}

if (document.getElementById('gawainCard')) {
  initGawain();
}
