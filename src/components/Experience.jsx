const experiences = [
  {
    period: 'Sep 2025 – Present',
    duration: '9 Months',
    title: 'Connecto',
    role: 'Lead Backend Architect / AI & Backend Engineer · Remote',
    active: true,
    items: [
      'Lead backend architect of connecto-me.com — a unified e-commerce management platform serving 2,000+ merchants across Amazon, Noon, Jumia, and Trendyol.',
      'Designed, developed, and deployed the full Connecto web platform and its backend infrastructure from the ground up.',
      'Built and deployed AI-powered agents to automate product listing, catalogue management, and merchant workflows.',
      'Provided all technical solutions supporting cross-department operations, ensuring platform reliability and scalability.',
      'Delivered AI features including intelligent product image processing (background removal, platform compliance) and advanced analytics.',
    ],
  },
  {
    period: 'Mar – Sep 2025',
    duration: '6 Months',
    title: 'Ariegsa Solutions',
    role: 'Software Engineer · Remote',
    items: [
      'Designed high-performance military software using C++ and Qt/QML for simulators, monitoring systems, and MFDs.',
      'Developed a full Operation Software for an aircraft simulator, integrating with Microsoft Flight Simulator and DCS.',
      'Engineered a Rocket-Launch Decision Helper model to assist pilots in real-time air combat scenarios.',
      'Delivered hands-on programming and AI training sessions to technical staff.',
    ],
  },
  {
    period: 'Aug 2024 – Aug 2025',
    duration: '1 Year',
    title: 'Egyptian Air Force — ILS',
    role: 'AI & Python Developer / Instructor',
    items: [
      'Developed and deployed multiple real-time AI models for military applications in NLP and Computer Vision, covering classification, detection, tracking, and agentic chatbots using Agno.',
      'Built Flask-based backend systems to serve ML/DL models and integrate with internal databases and military tools.',
      'Conducted structured AI and Python training sessions for technical military personnel.',
    ],
  },
  {
    period: 'Dec 2023 – Jul 2024',
    duration: '8 Months',
    title: 'Egyptian Air Force — ILS',
    role: 'Network Administrator & Backend Developer',
    items: [
      'Managed network administration and support across all Air Force units, leveraging Cisco networking expertise.',
      'Developed Flask web applications integrated with MySQL databases to serve and monitor secure military networks.',
    ],
  },
  {
    period: 'Concurrent',
    duration: 'Part-time',
    title: 'IT Spark — El Sahaba Center',
    role: 'CS Instructor',
    items: [
      'Taught Networking, Web Development, Python, Machine Learning, Operating Systems, and Data Security to CS and BIS students.',
      'Designed course materials, hands-on labs, and practical projects; mentored students through exam preparation.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 md:px-10 overflow-hidden relative">
      <div className="absolute -left-10 top-0 font-headline text-[160px] font-bold tracking-tighter opacity-[0.03] pointer-events-none select-none leading-none">LOG_HIST</div>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal">
          <div className="font-mono text-[10px] text-primary tracking-[0.35em] uppercase mb-3">// SECTION 03</div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight uppercase">Work_Experience</h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-transparent mt-4"></div>
        </div>

        <div className="space-y-0 relative">
          <div className="absolute left-0 md:left-[24.5%] top-0 bottom-0 w-px bg-outline-variant/20 hidden md:block"></div>

          {experiences.map((exp, i) => (
            <div key={i} className="grid md:grid-cols-12 group reveal">
              <div className="md:col-span-3 py-10 md:border-r border-outline-variant/20 flex md:justify-end md:pr-10">
                <div className="text-left md:text-right">
                  <span className={`font-mono text-xs ${exp.active ? 'text-primary' : 'text-on-surface-variant'} font-bold block`}>{exp.period}</span>
                  <span className="font-mono text-[10px] text-outline uppercase">{exp.duration}</span>
                </div>
              </div>
              <div className="md:col-span-9 py-8 md:pl-10 md:pr-6 md:my-2 rounded-lg border border-transparent group-hover:border-outline-variant/40 group-hover:bg-surface-container/40 transition-all duration-350 relative">
                <div className={`absolute left-0 top-12 w-2 h-2 ${exp.active ? 'bg-primary' : 'bg-outline'} rounded-full -translate-x-1 hidden md:block`} style={exp.active ? { animation: 'pulse-dot 2s infinite' } : {}}></div>
                <h3 className="font-headline text-2xl md:text-3xl font-bold mb-1">{exp.title}</h3>
                <p className="text-primary font-mono text-[10px] uppercase tracking-[0.2em] font-bold mb-6">{exp.role}</p>
                <ul className="space-y-3 max-w-2xl">
                  {exp.items.map((item, j) => (
                    <li key={j} className="flex gap-4 items-start text-on-surface-variant font-body text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
