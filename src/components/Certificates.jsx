const certificates = [
  {
    icon: 'verified', iconColor: 'primary', gradientColor: 'primary',
    title: 'Web App Development', issuer: 'EAF / US GOVERNMENT',
  },
  {
    icon: 'terminal', iconColor: 'secondary', gradientColor: 'secondary',
    title: 'Python & Flask', issuer: 'EAF CERTIFIED', delay: '0.05s',
  },
  {
    icon: 'neurology', iconColor: 'primary', gradientColor: 'primary',
    title: 'Computer Vision & NLP', issuer: 'EAF CERTIFIED', delay: '0.1s',
  },
  {
    icon: 'hub', iconColor: 'gold', gradientColor: 'gold',
    title: 'Cisco Network Admin', issuer: 'US GOVERNMENT', delay: '0.15s',
  },
  {
    title: 'C++ Beginner to Expert', issuer: 'UDEMY', delay: '0.2s',
    image: '/certificates/cpp-udemy.png',
    gradientColor: 'tertiary',
  },
  {
    icon: 'layers', iconColor: 'secondary', gradientColor: 'secondary',
    title: 'Qt / QML Mastery', issuer: 'UDEMY', delay: '0.25s',
  },
  {
    title: 'AI Fundamentals', issuer: 'IBM', delay: '0.3s',
    image: '/certificates/ai-cert-ibm.png',
    gradientColor: 'primary',
  },
  {
    title: 'Intro to Generative AI', issuer: 'UDACITY / AWS', delay: '0.35s',
    image: '/certificates/generative-ai-aws.png',
    gradientColor: 'gold',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-28 px-6 md:px-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <div>
            <div className="font-mono text-[10px] text-primary tracking-[0.35em] uppercase mb-3">// SECTION 05</div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight uppercase">Verified_Credentials</h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-transparent mt-4"></div>
          </div>
          <p className="font-mono text-[10px] text-outline uppercase tracking-widest">Total: 08 Validated</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="bg-surface-container p-5 border border-outline-variant/10 hover:shadow-[0_0_24px_rgba(0,240,255,0.1)] transition-all duration-300 group reveal"
              style={cert.delay ? { transitionDelay: cert.delay } : {}}
            >
              <div className={`aspect-video bg-gradient-to-br from-${cert.gradientColor}/10 to-surface-container-highest mb-5 flex items-center justify-center border border-outline-variant/20 relative overflow-hidden`}>
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span
                    className={`material-symbols-outlined text-5xl text-${cert.iconColor || cert.gradientColor}/30`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {cert.icon}
                  </span>
                )}
                <div className={`absolute inset-0 border border-${cert.gradientColor}/10 group-hover:border-${cert.gradientColor}/30 transition-colors`}></div>
              </div>
              <h5 className="font-headline text-base font-bold uppercase leading-tight">{cert.title}</h5>
              <p className="font-mono text-[10px] text-outline mt-2 tracking-widest">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
