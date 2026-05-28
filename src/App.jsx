import './App.css'

const sectors = [
  {
    title: 'Residential',
    subtitle: 'Homes That Nurture Life',
    tone: 'green',
    side: 'left',
    icon: 'home',
    items: [
      ['Arbor Villas', 'Bangalore', 'bud'],
      ['Ivy Courtyard', 'Pune', 'leaf'],
      ['Misty Greens', 'Lonavala', 'bloom'],
      ['Terrace House', 'Goa', 'flower'],
      ['The Nest', 'Hyderabad', 'nest'],
    ],
  },
  {
    title: 'Institutional',
    subtitle: 'Spaces That Build Minds',
    tone: 'moss',
    side: 'left',
    icon: 'institution',
    items: [
      ['Cloudrise Campus', 'Delhi', 'white'],
      ['Knowledge Hub', 'Bangalore', 'seed'],
      ['Research Pavilion', 'Mumbai', 'cup'],
      ['Innovation Center', 'Pune', 'thistle'],
      ['Learning Commons', 'Chennai', 'daisy'],
    ],
  },
  {
    title: 'Healthcare',
    subtitle: 'Healing Through Design',
    tone: 'olive',
    side: 'center',
    icon: 'health',
    items: [
      ['Wellness Retreat', 'Rishikesh', 'lotus'],
      ['Healing Gardens', 'Chennai', 'sun'],
      ['Care Hospital', 'Indore', 'petal'],
      ['Rehab Center', 'Dehradun', 'star'],
      ['Mind & Body Clinic', 'Goa', 'orchid'],
    ],
  },
  {
    title: 'Hospitality',
    subtitle: 'Experiences That Stay',
    tone: 'teal',
    side: 'right',
    icon: 'lotus',
    items: [
      ['The Valley Resort', 'Udaipur', 'marigold'],
      ['Coastal Escape', 'Goa', 'waterlily'],
      ['Wilderness Lodge', 'Coorg', 'protea'],
      ['Lakeview Hotel', 'Nainital', 'iris'],
      ['Silent Pavilions', 'Alibaug', 'orchid'],
    ],
  },
  {
    title: 'Commercial',
    subtitle: 'Spaces That Drive Growth',
    tone: 'blue',
    side: 'right',
    icon: 'tower',
    items: [
      ['Vertex Towers', 'Mumbai', 'coral'],
      ['Green Office Park', 'Hyderabad', 'pod'],
      ['Design Studio', 'Bangalore', 'lily'],
      ['Retail Experience', 'Delhi', 'violet'],
      ['Tech Park', 'Pune', 'burst'],
    ],
  },
]

const metrics = [
  ['52', 'Living projects'],
  ['5', 'Design verticals'],
  ['2.4M', 'Sq ft planned'],
  ['38%', 'Lower energy load'],
]

function Icon({ name }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.6',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {name === 'home' && (
        <>
          <path {...common} d="M10 25 24 13l14 12" />
          <path {...common} d="M14 23v15h20V23" />
          <path {...common} d="M21 38V28h6v10" />
        </>
      )}
      {name === 'institution' && (
        <>
          <path {...common} d="M9 38h30M13 34h22M15 18h18M12 18l12-8 12 8" />
          <path {...common} d="M17 18v16M24 18v16M31 18v16" />
        </>
      )}
      {name === 'health' && (
        <>
          <path {...common} d="M24 8v32M13 24h22" />
          <path {...common} d="M24 38c-7-5-12-12-12-20 6 0 10 3 12 8 2-5 6-8 12-8 0 8-5 15-12 20Z" />
        </>
      )}
      {name === 'lotus' && (
        <>
          <path {...common} d="M24 35c-8-6-8-14 0-22 8 8 8 16 0 22Z" />
          <path {...common} d="M24 34c-8 1-14-3-17-11 8-2 14 1 17 11ZM24 34c8 1 14-3 17-11-8-2-14 1-17 11Z" />
          <path {...common} d="M12 38h24" />
        </>
      )}
      {name === 'tower' && (
        <>
          <path {...common} d="M12 38h24M16 38V18h8v20M28 38V10h8v28" />
          <path {...common} d="M19 23h2M19 28h2M19 33h2M31 16h2M31 22h2M31 28h2M31 34h2" />
        </>
      )}
    </svg>
  )
}

function Flower({ type }) {
  return (
    <span className={`flower flower-${type}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
      <i />
    </span>
  )
}

function BranchField() {
  const leftPaths = [
    'M505 572 C420 486 332 445 207 434',
    'M516 548 C430 408 337 334 200 284',
    'M533 526 C474 370 391 242 273 178',
    'M548 514 C521 356 517 234 552 114',
    'M561 514 C585 350 636 238 744 108',
  ]
  const rightPaths = [
    'M594 572 C706 483 836 450 1050 443',
    'M592 548 C718 407 814 327 963 276',
    'M580 526 C663 380 740 253 831 168',
    'M566 514 C594 358 603 239 586 98',
  ]

  return (
    <svg className="branch-field" viewBox="0 0 1120 700" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="trunkGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#4d6d31" />
          <stop offset="0.5" stopColor="#6e7642" />
          <stop offset="1" stopColor="#15718b" />
        </linearGradient>
        <linearGradient id="rootGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#334c22" />
          <stop offset="1" stopColor="#0f7191" />
        </linearGradient>
      </defs>

      <path className="root root-left" d="M560 602 C445 640 341 665 130 668" />
      <path className="root root-left thin" d="M552 612 C423 618 297 609 92 583" />
      <path className="root root-left thin" d="M544 623 C418 682 304 698 34 686" />
      <path className="root root-right" d="M562 602 C716 638 858 661 1091 664" />
      <path className="root root-right thin" d="M571 614 C725 616 863 598 1110 562" />
      <path className="root root-right thin" d="M580 627 C737 690 876 707 1088 690" />

      <path className="trunk" d="M560 627 C536 544 530 488 558 413 C586 486 590 547 560 627Z" />
      {leftPaths.map((path) => (
        <path className="branch left" d={path} key={path} />
      ))}
      {rightPaths.map((path) => (
        <path className="branch right" d={path} key={path} />
      ))}

      {Array.from({ length: 70 }).map((_, index) => (
        <circle
          className={index % 2 ? 'sprout right-sprout' : 'sprout left-sprout'}
          cx={90 + ((index * 137) % 940)}
          cy={110 + ((index * 89) % 390)}
          r={index % 3 === 0 ? 2.4 : 1.7}
          key={index}
        />
      ))}

      {Array.from({ length: 52 }).map((_, index) => (
        <path
          className="circuit"
          d={`M${640 + index * 9} ${604 + (index % 7) * 10} h${80 + (index % 5) * 22} v${(index % 2 ? -1 : 1) * (18 + (index % 6) * 8)}`}
          key={`c-${index}`}
        />
      ))}
    </svg>
  )
}

function Sector({ sector, index }) {
  return (
    <article className={`sector sector-${sector.side} tone-${sector.tone}`} style={{ '--delay': `${index * 90}ms` }}>
      <div className="sector-heading">
        <span className="sector-icon">
          <Icon name={sector.icon} />
        </span>
        <h2>{sector.title}</h2>
        <p>{sector.subtitle}</p>
      </div>

      <div className="project-list">
        {sector.items.map(([name, city, flower], itemIndex) => (
          <div className="project-node" style={{ '--item-delay': `${itemIndex * 70}ms` }} key={name}>
            <span className="node-line" />
            <Flower type={flower} />
            <span className="node-copy">
              <strong>{name}</strong>
              <small>{city}</small>
            </span>
          </div>
        ))}
      </div>
    </article>
  )
}

function App() {
  return (
    <main className="singularity-page">
      <section className="hero-shell" aria-labelledby="page-title">
        <div className="topbar">
          <a className="brand" href="#page-title" aria-label="Singularity home">
            <span className="brand-mark" />
            <span>Singularity</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#ecosystem">Ecosystem</a>
            <a href="#principles">Principles</a>
            <a href="#contact">Studio</a>
          </nav>
        </div>

        <div className="intro">
          <span className="eyebrow">Architecture that evolves</span>
          <h1 id="page-title">Singularity</h1>
          <p>
            A point of convergence where regenerative ecosystems meet digital intelligence,
            shaping residential, institutional, healthcare, hospitality, and commercial spaces.
          </p>
        </div>

        <div className="ecosystem-map" id="ecosystem">
          <BranchField />
          <div className="sector-grid">
            {sectors.map((sector, index) => (
              <Sector sector={sector} index={index} key={sector.title} />
            ))}
          </div>
          <div className="origin">
            <span className="pulse" />
            <h3>Singularity</h3>
            <p>Unity of nature and technology</p>
          </div>
        </div>

        <div className="foundation">
          <div>
            <span>Rooted in Nature</span>
            <p>Regenerating ecosystems through responsible design.</p>
          </div>
          <div>
            <span>Driven by Technology</span>
            <p>Digital intelligence for adaptive, measurable spaces.</p>
          </div>
        </div>
      </section>

      <section className="metrics-strip" aria-label="Project statistics">
        {metrics.map(([value, label]) => (
          <div className="metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="principles" id="principles">
        <div className="section-title">
          <span className="eyebrow">Design logic</span>
          <h2>Built like a living system</h2>
          <p>
            Every project is treated as a connected organism: climate, material,
            culture, data, comfort, and long-term operation are designed together.
          </p>
        </div>

        <div className="principle-grid">
          <article>
            <span className="principle-number">01</span>
            <h3>Regenerative Form</h3>
            <p>Landscape, shade, water, and biodiversity become the first layer of the architecture.</p>
          </article>
          <article>
            <span className="principle-number">02</span>
            <h3>Digital Intelligence</h3>
            <p>Energy, airflow, occupancy, and comfort signals guide the building after handover.</p>
          </article>
          <article>
            <span className="principle-number">03</span>
            <h3>Human Experience</h3>
            <p>Quiet spaces, clear movement, natural light, and material warmth shape daily life.</p>
          </article>
        </div>
      </section>

      <section className="studio-band" id="contact">
        <div>
          <span className="eyebrow">Studio model</span>
          <h2>From concept roots to intelligent operations.</h2>
        </div>
        <a href="mailto:studio@singularity.design">Start a project</a>
      </section>
    </main>
  )
}

export default App
