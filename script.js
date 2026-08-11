const CHEVRON_SVG = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg>';
const ARROW_SVG = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"></path></svg>';

const experience = [
  {
    title: 'Software Engineering Intern', org: 'G-Research, London', date: 'Jun – Aug 2026', open: true,
    body: 'Working in trading reliability engineering at a quantitative finance research firm. The team keeps the systems that place and monitor trades running through the trading day, so the work sits between the research side and production infrastructure.',
    stack: ['Python', 'Polars', '.NET'],
  },
  {
    title: 'Research Assistant', org: 'University of Edinburgh', date: '2024 – Present',
    body: "Built and evaluated Academic Families, a peer-support scheme that pairs over 400 first-year Informatics students with older students. Ran interviews and surveys to measure whether it changed how students settled into the school, and wrote up the results as first author. Published at the Computing Education Practice Conference (CEP26) 2026.",
    extraHref: 'https://drive.google.com/file/d/1DlQOGp0jyvNmRoTKinYjcmUm3fKwcKId/view?usp=sharing', extraLabel: 'Building belonging: evaluating a student-led peer-support scheme in Computer Science',
  },
  {
    title: 'President', org: 'CompSoc, University of Edinburgh', date: '2024 – 2025',
    body: "Ran Scotland's largest student tech society, covering 1,500 members. Set up events and hackathons with Google, Huawei and Meta, and worked with the School of Informatics on Academic Families, the Industry Advisory Board and HackTheBurgh. Nominated for Outstanding Leadership at the University of Edinburgh Student Awards for this work.",
  },
  {
    title: 'Tutor & Teaching Assistant', org: 'University of Edinburgh', date: '2024 – 2026',
    body: 'Taught tutorials for INF1A, the first-year course on functional programming and Python. Marked coursework and worked through problems with students in small groups.',
    stack: ['Haskell', 'Python'],
  },
  {
    title: 'EPSRC Research Intern', org: 'School of Informatics, University of Edinburgh', date: 'May – Jul 2024',
    body: "Fine-tuned Meta's Llama 3-8B with low-rank adapters to generate spoken conversation, working with the automatic speech recognition group. Trained and evaluated on the Switchboard-1 corpus, where the fine-tuned model beat Meta's base model at generating text that matched real speech.",
    stack: ['Python', 'PyTorch', 'Hugging Face Transformers', 'LoRA'],
  },
];

const education = [
  {
    title: 'University of Edinburgh', org: 'BSc Computer Science and Artificial Intelligence, Edinburgh, UK', date: '2023 – 2027', open: true,
    body: 'On track for first-class honours, 80%+ average. Coursework has covered computer architecture, operating systems, databases, machine learning and parallel programming.',
  },
  {
    title: 'EPFL', org: 'Exchange year, Computer Science, Lausanne, Switzerland', date: '2025 – 2026',
    body: 'Full academic year abroad, taking systems and machine learning courses. Did a semester research project on how cardinality estimation affects query planning in modern database systems.',
  },
];

const projects = [
  {
    title: 'Bachelor Thesis', org: 'Dynamic Workload Balancing on Intel Sapphire Rapids', date: '2026 – 2027', open: true,
    body: 'Starting in the coming academic year. The topic is dynamic workload balancing on Intel Sapphire Rapids.',
    supervisors: [
      { name: 'Dr. Alex Daglis', href: 'https://adaglis.github.io/' },
      { name: 'Professor Babak Falsafi', href: 'https://parsa.epfl.ch/~falsafi/' },
    ],
  },
  {
    title: 'Research Project', org: 'Cardinality Injection in DuckDB', date: '2025',
    body: 'Measured how much bad cardinality estimates cost a modern query optimiser. Fed true cardinalities straight into DuckDB\'s optimiser and compared the plans it picked against the ones it produced from its own estimates, which separates estimation error from the rest of the planner.',
    stack: ['C++', 'DuckDB', 'SQL', 'Python'],
    extraHref: 'https://drive.google.com/file/d/15xMvOzZvQnuwnlHvL-6HVqpmmxRe47-0/view?usp=sharing', extraLabel: 'Read the paper',
  },
  {
    title: 'Trading Algorithms', org: 'Personal project', date: 'May – Aug 2025',
    body: 'Built models that trade on price and volume data, then deployed them to run on a schedule in the cloud. Data loading and feature generation run in Polars, the models are trained with scikit-learn, and the whole thing runs as Cloud Functions on GCP.',
    stack: ['Python', 'Polars', 'scikit-learn', 'GCP Cloud Functions'],
  },
];

const awards = [
  {
    title: 'HackTheBurgh XII', org: 'Optiver Challenge winner', date: 'Nov 2025', open: true,
    body: "First place in Optiver's market-making challenge at HackTheBurgh.",
  },
  {
    title: 'Outstanding Leadership', org: 'University of Edinburgh Student Awards, nominated', date: '2025',
    body: 'Nominated for work as CompSoc President: the Academic Families scheme, the Industry Advisory Board, and running large informatics events.',
  },
];

function renderList(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map((item, i) => `
    <div class="entry${item.open ? ' open' : ''}" data-index="${i}">
      <button class="entry-header" type="button" aria-expanded="${!!item.open}">
        <span class="entry-title-row"><span class="entry-title">${item.title}</span><span class="entry-org">&nbsp;— ${item.org}</span></span>
        <span class="entry-meta">
          <span class="entry-date">${item.date}</span>
          <span class="chevron">${CHEVRON_SVG}</span>
        </span>
      </button>
      <div class="entry-body-wrap">
        <div class="entry-body-inner">
          <p class="entry-body">${item.body}</p>
          ${item.stack ? `
            <div class="entry-stack">
              ${item.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
            </div>` : ''}
          ${item.extraHref ? `
            <a class="entry-extra" href="${item.extraHref}" target="_blank" rel="noopener">
              ${item.extraLabel}
              ${ARROW_SVG}
            </a>` : ''}
          ${item.supervisors ? `
            <div class="entry-supervisors">
              Supervisors: ${item.supervisors.map(s => `<a href="${s.href}" target="_blank" rel="noopener">${s.name}</a>`).join(' &amp; ')}
            </div>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.entry-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const entry = btn.closest('.entry');
      const nowOpen = entry.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(nowOpen));
    });
  });
}

renderList('experience-list', experience);
renderList('education-list', education);
renderList('projects-list', projects);
renderList('awards-list', awards);
