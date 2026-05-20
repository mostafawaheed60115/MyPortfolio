const skills = [
  {
    icon: 'neurology', label: 'S01', title: 'AI & Deep Learning',
    tags: ['TensorFlow', 'Agno Agents', 'NLP', 'Computer Vision', 'ML / DL'],
  },
  {
    icon: 'terminal', label: 'S02', title: 'Python & Web',
    tags: ['Python', 'Flask & FastAPI', 'React', 'Quart', 'Pandas'], delay: '0.05s',
  },
  {
    icon: 'code', label: 'S03', title: 'C++ & Systems',
    tags: ['C++', 'Qt / QML', 'Linux', 'Simulators'], delay: '0.1s',
  },
  {
    icon: 'database', label: 'S04', title: 'Backend & Caching',
    tags: ['PostgreSQL', 'MySQL', 'Redis', 'RESTful APIs'], delay: '0.15s',
  },
  {
    icon: 'hub', label: 'S05', title: 'Cloud & Networking',
    tags: ['GCP', 'Cisco Networking', 'Docker', 'Deployment', 'Integration'], delay: '0.2s',
  },
  {
    icon: 'psychology', label: 'S06', title: 'Training & Instruction',
    tags: ['CS Teaching', 'Technical Training', 'Leadership', 'Communication'], delay: '0.25s',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-surface-container-low px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <div className="font-mono text-[10px] text-primary tracking-[0.35em] uppercase mb-3">// Core_Capabilities · 04</div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight uppercase">Technical_Arsenal</h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/10">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="tech-card bg-surface-container p-8 border border-outline-variant/10 group reveal"
              style={skill.delay ? { transitionDelay: skill.delay } : {}}
            >
              <div className="flex justify-between items-start mb-10">
                <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{skill.icon}</span>
                <span className="font-mono text-[10px] text-outline uppercase tracking-widest">{skill.label}</span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-4">{skill.title}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, j) => (
                  <span key={j} className="px-2 py-1 bg-surface-container-highest text-on-surface font-mono text-[10px] font-bold uppercase tracking-widest border border-outline-variant/20 group-hover:border-primary/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* shimmer bar */}
        <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent w-20" style={{ animation: 'shimmer 2.5s infinite' }}></div>
        </div>
      </div>
    </section>
  )
}
