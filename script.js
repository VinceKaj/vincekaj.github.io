const CHEVRON_SVG = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg>';
const ARROW_SVG = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"></path></svg>';

const experience = [
  {
    title: 'Software Engineering Intern', org: 'G-Research, London', date: 'Jun – Sep 2026', open: true,
    body: 'Software engineering intern at a quantitative finance research firm, working in trading reliability engineering.',
  },
  {
    title: 'Research Assistant', org: 'University of Edinburgh', date: '2024 – Present',
    body: "Built and evaluated Academic Families, a peer-support scheme pairing over 400 first-year Informatics students with older student mentors to ease the transition to university. Interviewed students to assess the scheme's impact and co-authored the resulting paper, published at the Computing Education Practice Conference (CEP26) 2026. First author.",
    extraHref: 'https://drive.google.com/PASTE-ACADEMIC-FAMILIES-PAPER-LINK', extraLabel: 'Academic Families',
  },
  {
    title: 'President', org: 'CompSoc, University of Edinburgh', date: '2024 – 2025',
    body: "Led Scotland's largest student tech society, with 1,500 members. Partnered with Google, Huawei, and Meta on hackathons and industry events. Worked with the School of Informatics on Academic Families, the Industry Advisory Board, and HackTheBurgh. Nominated for Outstanding Leadership at the University of Edinburgh Student Awards for this work.",
  },
  {
    title: 'Tutor & Teaching Assistant', org: 'University of Edinburgh', date: '2024 – 2026',
    body: 'Led tutorial sessions for INF1A, covering functional programming and an introduction to Python.',
  },
  {
    title: 'Research Intern', org: 'School of Informatics, University of Edinburgh', date: 'May – Jul 2024',
    body: "Fine-tuned Meta's Llama 3-8B with low-rank adapters for natural spoken conversation generation, in the Automatic Speech Recognition group. Outperformed Meta's base model on the Switchboard-1 corpus.",
  },
];

const education = [
  {
    title: 'University of Edinburgh', org: 'BSc Artificial Intelligence & Computer Science, Edinburgh, UK', date: '2023 – 2027', open: true,
    body: 'On track for first-class honours, 80%+ average.',
  },
  {
    title: 'EPFL', org: 'Exchange year, Computer Science, Lausanne, Switzerland', date: '2025 – 2026',
    body: 'Full academic year abroad. Semester research project measuring the impact of cardinality estimation in modern database systems.',
  },
];

const projects = [
  {
    title: 'Bachelor Thesis', org: 'Dynamic Workload Balancing on Intel Sapphire Rapids', date: '2026 – 2027', open: true,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    supervisors: [
      { name: 'Dr. Alex Daglis', href: 'https://adaglis.github.io/' },
      { name: 'Professor Babak Falsafi', href: 'https://parsa.epfl.ch/~falsafi/' },
    ],
  },
  {
    title: 'Research Project', org: 'Cardinality Injection in DuckDB', date: '2025',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    extraHref: 'https://drive.google.com/PASTE-DUCKDB-PAPER-LINK', extraLabel: 'Read the paper',
  },
  {
    title: 'Trading Algorithms', org: 'Python, scikit-learn, Google Cloud Platform', date: 'May – Aug 2025',
    body: 'Built and deployed automated trading models on Google Cloud Platform.',
  },
];

function renderList(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map((item, i) => `
    <div class="entry${item.open ? ' open' : ''}" data-index="${i}">
      <button class="entry-header" type="button" aria-expanded="${!!item.open}">
        <span class="entry-title-row">
          <span class="entry-title">${item.title}</span>
          <span class="entry-org">— ${item.org}</span>
        </span>
        <span class="entry-meta">
          <span class="entry-date">${item.date}</span>
          <span class="chevron">${CHEVRON_SVG}</span>
        </span>
      </button>
      <div class="entry-body-wrap">
        <div class="entry-body-inner">
          <p class="entry-body">${item.body}</p>
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
