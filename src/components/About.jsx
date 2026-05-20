export default function About() {
  return (
    <section id="about" className="py-28 bg-surface-container-low px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-6 reveal">
          <div className="font-mono text-[10px] text-primary tracking-[0.35em] uppercase">// SECTION 02</div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight uppercase">About_Me</h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-transparent"></div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span className="font-mono text-xs uppercase tracking-wide text-primary">mostafawaheed60115@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="font-mono text-xs uppercase tracking-wide text-primary">Asyut, Egypt</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">phone_iphone</span>
              <span className="font-mono text-xs uppercase tracking-wide text-primary">+201509999283</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">link</span>
              <a href="https://www.linkedin.com/in/mostafa-waheed-29009b346/" target="_blank" rel="noreferrer" className="font-mono text-xs uppercase tracking-wide text-primary hover:underline">LinkedIn</a>
            </div>
          </div>

          {/* Education box */}
          <div className="mt-8 p-6 border border-outline-variant/20 bg-surface-container relative">
            <div className="absolute top-0 right-0 m-3 font-mono text-[9px] text-outline uppercase tracking-widest">Edu_Credential</div>
            <h3 className="font-headline text-lg font-bold mt-4">Military Technical College</h3>
            <p className="text-primary font-mono text-[10px] uppercase tracking-[0.2em] font-bold mt-1">B.Sc. Electrical Engineering (AI Dept.)</p>
            <p className="text-outline font-mono text-[10px] uppercase tracking-widest mt-1">2018 – 2023</p>
            <div className="mt-3 inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-3 py-1">
              <span className="text-gold font-mono text-[10px] uppercase tracking-widest font-bold">🏅 Very Good with Honour</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 reveal" style={{ transitionDelay: '0.1s' }}>
          <h2 className="font-body text-lg md:text-xl text-on-surface/90 leading-relaxed font-headline font-bold mr-3 float-left text-primary leading-none">
            AI and Backend Engineer with 2+ years of hands-on experience building mission-critical AI systems and lead backend architect at Connecto, managing full-stack e-commerce infrastructure for 2,000+ merchants.
          </h2>
          <p className="font-body text-on-surface/70 mt-6 leading-relaxed">
            Specializing in NLP, Computer Vision, C++, and full-stack web development. Proven track record of delivering high-performance solutions under high-stakes conditions, from EAF military-grade simulators and secure Flask/MySQL networks to real-time AI agents and GCP cloud-native deployments. Academically developed a <span className="text-primary font-semibold">Multimodal Sentiment Analysis</span> graduation system combining text, emoji, and audio into a unified deep learning model at the Military Technical College.
          </p>

          {/* Language bars */}
          <div className="mt-10 space-y-5">
            <div className="font-mono text-[10px] text-outline uppercase tracking-[0.3em] mb-4">// Languages</div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-headline text-sm font-bold uppercase">Arabic</span>
                <span className="font-mono text-[10px] text-primary tracking-widest">Native</span>
              </div>
              <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-[#00c8d4] rounded-full" style={{ width: '100%', transition: 'width 1.5s ease' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-headline text-sm font-bold uppercase">English</span>
                <span className="font-mono text-[10px] text-primary tracking-widest">C1 · Advanced</span>
              </div>
              <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-secondary to-primary rounded-full" style={{ width: '85%', transition: 'width 1.5s ease' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
