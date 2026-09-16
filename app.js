(() => {
  const allProblems = window.PROBLEMS || [];
  const sourceSelect = document.querySelector('#source');
  const progress = document.querySelector('#progress');
  const meta = document.querySelector('#meta');
  const question = document.querySelector('#question');
  const diagram = document.querySelector('#diagram');
  const form = document.querySelector('#answer-form');
  const input = document.querySelector('#answer');
  const result = document.querySelector('#result');
  const next = document.querySelector('#next');
  let deck = [];
  let index = 0;
  let checked = false;

  const shuffle = values => values.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
  const strip = value => value
    .replace(/\\(?:d?frac)\{([^{}]+)\}\{([^{}]+)\}/g, '($1)/($2)')
    .replace(/\\sqrt\{([^{}]+)\}/g, 'sqrt($1)')
    .replace(/\\(?:left|right|displaystyle|textstyle)/g, '')
    .replace(/\\text\{([^{}]*)\}/g, '$1')
    .replace(/\\mathrm\{([^{}]*)\}/g, '$1')
    .replace(/\\circ/g, '°').replace(/\\pi/g, 'pi')
    .replace(/[${}\\]/g, '').replace(/\^/g, '**')
    .replace(/\s+/g, '').toLowerCase();
  const numeric = value => {
    const cleaned = strip(value).replace(/sqrt\(([^()]+)\)/g, 'Math.sqrt($1)').replace(/pi/g, 'Math.PI');
    if (!/^[0-9.+\-*/()MathsqrtPI]+$/.test(cleaned)) return null;
    try { const n = Function(`"use strict"; return (${cleaned})`)(); return Number.isFinite(n) ? n : null; } catch { return null; }
  };
  const isCorrect = (given, expected) => {
    const a = strip(given), b = strip(expected);
    if (!a) return false;
    if (a === b || a.replace(/[()]/g, '') === b.replace(/[()]/g, '')) return true;
    const x = numeric(given), y = numeric(expected);
    return x !== null && y !== null && Math.abs(x - y) < 1e-8;
  };
  const cleanDisplay = value => value
    .replace(/\\(?:textbf|textit)\{([^{}]*)\}/g, '$1')
    .replace(/\\(?:par|quad|noindent)/g, ' ')
    .replace(/\\item\[([^\]]+)\]/g, '$1 ')
    .replace(/\\begin\{(?:enumerate|center)\}|\\end\{(?:enumerate|center)\}/g, '')
    .replace(/\n\s*/g, '<br>');

  function render() {
    const item = deck[index];
    checked = false;
    meta.textContent = `${item.source} ${item.year} · Problem ${item.number}`;
    progress.textContent = `${index + 1} / ${deck.length}`;
    question.innerHTML = cleanDisplay(item.question);
    diagram.hidden = !item.diagram;
    diagram.innerHTML = item.diagram ? `<img src="${item.diagram}" alt="Original problem diagram">` : '';
    input.value = '';
    input.disabled = false;
    input.focus();
    result.hidden = true;
    next.hidden = true;
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([question, result]);
  }

  function loadDeck() {
    const source = sourceSelect.value;
    deck = shuffle(allProblems.filter(item => source === 'all' || item.source === source));
    index = 0;
    render();
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (checked) return;
    const item = deck[index];
    const correct = isCorrect(input.value, item.answer);
    checked = true;
    input.disabled = true;
    result.className = `result${correct ? '' : ' wrong'}`;
    result.innerHTML = correct
      ? 'Correct.'
      : `Answer: <span class="answer">${cleanDisplay(item.answer)}</span>`;
    result.hidden = false;
    next.hidden = false;
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([result]);
  });
  next.addEventListener('click', () => { index = (index + 1) % deck.length; render(); });
  sourceSelect.addEventListener('change', loadDeck);
  document.addEventListener('keydown', event => { if (event.key === 'Enter' && checked && !next.hidden) next.click(); });
  loadDeck();
})();
