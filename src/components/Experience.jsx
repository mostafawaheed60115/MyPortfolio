const experiences = [
  {
    period: 'Present',
    duration: 'Currently',
    title: 'Connecto',
    role: 'AI & Backend Engineer · Remote',
    active: true,
    items: [
      'Design, development, and deployment of the Connecto website and platform.',
      'Providing all technical solutions required for supporting company departments.',
      'Design, development and deployment of Connecto platform AI Agents.',
    ],
  },
  {
    period: 'Mar – Sep 2025',
    duration: '6 Months',
    title: 'Ariegsa Solutions',
    role: 'Software Engineer · Remote',
    items: [
      'Built high-performance military software for simulators, monitoring systems and MFDs using C++ / Qt / QML.',
      'Designed an Operation Software for an aircraft simulator; integrated with Microsoft Flight Simulator and DCS.',
      'Built a Rocket-Launch Decision Helper AI model to assist pilots in air combat.',
      'Delivered flight analytics for pilot attitude and performance using Flask and Chart.js.',
    ],
  },
  {
    period: 'Aug 2024 – Aug 2025',
    duration: '1 Year',
    title: 'Egyptian Air Force · ILS',
    role: 'AI & Python Developer / Instructor',
    items: [
      'Developed and deployed real-time AI models for NLP and CV military applications — classification, detection, tracking, and chatbots using the Agno framework.',
      'Built Flask-based Python backend systems to serve ML/DL models and integrate with internal tools and databases.',
      'Delivered hands-on programming and AI training sessions across the unit.',
    ],
  },
  {
    period: 'Dec 2023 – Jul 2024',
    duration: '8 Months',
    title: 'Egyptian Air Force · ILS',
    role: 'Network Admin & Backend Developer',
    items: [
      'Network administration and support across all Air Force units.',
      'Systems integration across secure military networks using Cisco Networking.',
      'Developed Flask + MySQL web applications to serve and monitor military networks.',
    ],
  },
  {
    period: 'Ongoing',
    duration: 'Part-time',
    title: 'IT Spark — El Sahaba Center',
    role: 'CS Instructor',
    items: [
      'Taught Networking, Web Development, Python Programming, and Machine Learning to CS and BIS students.',
      'Designed structured course materials, hands-on labs, and practical projects.',
      'Mentored students with guidance, exam preparation, and career direction in technical tracks.',
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
              <div className="md:col-span-9 py-10 md:pl-10 group-hover:bg-surface-container-low transition-colors duration-500 relative">
                <div className={`absolute left-0 top-10 w-2 h-2 ${exp.active ? 'bg-primary' : 'bg-outline'} rounded-full -translate-x-1 hidden md:block`} style={exp.active ? { animation: 'pulse-dot 2s infinite' } : {}}></div>
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
