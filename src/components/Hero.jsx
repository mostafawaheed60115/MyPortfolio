export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-10 hero-bg scan-line relative">
      {/* corner decorations */}
      <div className="absolute top-28 left-6 font-mono text-[10px] text-primary/30 tracking-widest hidden lg:block">
        [SYS::ACTIVE]<br />BUILD_2025.03.26<br />STATUS::ONLINE
      </div>
      <div className="absolute top-28 right-6 font-mono text-[10px] text-outline/50 tracking-widest hidden lg:block text-right">
        AI_ENGINEER<br />BACKEND_ARCH<br />CV_EXPERT
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-20">
        {/* Text */}
        <div className="order-2 lg:order-1 space-y-8 animate-fade-up">
          <div className="space-y-3">
            <span className="font-mono text-primary tracking-[0.35em] uppercase text-[10px] font-bold">
              // AI + BACKEND ENGINEER · 01
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-none uppercase">
              Mostafa<br />
              <span className="text-primary" style={{ textShadow: '0 0 16px rgba(0,240,255,0.4)' }}>Waheed</span>
            </h1>
            <p className="text-xl md:text-2xl font-headline text-on-surface-variant font-light max-w-lg leading-snug">
              Mission-grade AI systems built with military precision and backend expertise.
            </p>
          </div>
          <p className="font-body text-on-surface/70 max-w-md leading-relaxed text-sm">
            Two years of high-stakes AI engineering at the Egyptian Air Force — crafting NLP models, computer vision systems, C++ simulators, and intelligent backend architectures that perform when it counts.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="https://www.linkedin.com/in/mostafa-waheed-29009b346/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary-dim transition-colors group"
            >
              <span className="material-symbols-outlined text-base">open_in_new</span>
              <span className="font-mono uppercase text-xs tracking-widest font-bold border-b border-primary/40 pb-0.5">
                LinkedIn Profile
              </span>
            </a>
            {/* Added CV Download */}
            <a
              href="/mostafa_waheed_.pdf"
              download
              className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors group"
            >
              <span className="material-symbols-outlined text-base">download</span>
              <span className="font-mono uppercase text-xs tracking-widest font-bold border-b border-gold/40 pb-0.5">
                Download CV
              </span>
            </a>
            <div className="h-px w-10 bg-outline-variant/40"></div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" style={{ animation: 'pulse-dot 2s infinite' }}></span>
              <span className="font-mono text-[10px] text-outline uppercase tracking-widest">Available for Hire</span>
            </div>
          </div>
          
          {/* Stats row */}
          <div className="flex gap-8 pt-4 border-t border-outline-variant/20">
            <div>
              <div className="font-headline text-3xl font-bold text-primary">2.5+</div>
              <div className="font-mono text-[10px] text-outline uppercase tracking-wider mt-1">Years Active</div>
            </div>
            <div>
              <div className="font-headline text-3xl font-bold text-primary">8+</div>
              <div className="font-mono text-[10px] text-outline uppercase tracking-wider mt-1">Certificates</div>
            </div>
            <div>
              <div className="font-headline text-3xl font-bold text-primary">5+</div>
              <div className="font-mono text-[10px] text-outline uppercase tracking-wider mt-1">Roles Held</div>
            </div>
            <div>
              <div className="font-headline text-3xl font-bold text-primary">∞</div>
              <div className="font-mono text-[10px] text-outline uppercase tracking-wider mt-1">Drive</div>
            </div>
          </div>
        </div>

        {/* Card / visual */}
        <div className="order-1 lg:order-2 relative animate-fade-up anim-2">
          {/* subtle glow behind card container */}
          <div className="absolute -inset-6 bg-primary/5 blur-3xl rounded-full"></div>
          {/* Profile card */}
          <div className="relative bg-surface-container border border-outline-variant/30 p-8 space-y-6" style={{ animation: 'borderGlow 4s infinite' }}>
            {/* Header bar */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-tertiary"></div>
              <div className="w-3 h-3 rounded-full bg-gold"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="font-mono text-[10px] text-outline ml-2 tracking-widest">profile.init</span>
            </div>
            {/* Profile Photo */}
            <div className="flex items-end gap-5">
              <div className="relative flex-shrink-0" style={{ width: '110px', height: '130px' }}>
                {/* cyan glow behind */}
                <div className="absolute inset-0 bg-primary/10 blur-xl rounded-sm"></div>
                {/* corner brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/70 z-10"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/70 z-10"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/70 z-10"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/70 z-10"></div>
                {/* photo */}
                <img
                  src="/profile-photo.png"
                  alt="Mostafa Waheed"
                  className="relative w-full h-full object-cover z-0"
                />
              </div>
              <div>
                <div className="font-headline text-lg font-bold leading-tight">Mostafa Waheed</div>
                <p className="font-mono text-[10px] text-primary tracking-widest uppercase mt-1">AI &amp; Backend Engineer</p>
                <p className="font-mono text-[8px] text-outline/60 mt-1 uppercase tracking-widest">Asyut, Egypt <span className="text-[6px]">EG</span></p>
              </div>
            </div>

            {/* Info rows */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[16px]">mail</span>
                <span className="font-mono text-[10px] text-on-surface-variant">mostafaawaheed0@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[16px]">phone_iphone</span>
                <span className="font-mono text-[10px] text-on-surface-variant">+201509999283</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[16px]">school</span>
                <span className="font-mono text-[10px] text-on-surface-variant">Military Technical College · 2018-2023</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { label: 'Python', color: 'primary' },
                { label: 'FastAPI', color: 'secondary' },
                { label: 'PostgreSQL & MySQL', color: 'secondary' },
                { label: 'NLP & CV', color: 'secondary' },
                { label: 'C++ / Qt', color: 'tertiary' },
                { label: 'RAG', color: 'gold' },
                { label: 'Flask & Quart', color: 'primary' },
              ].map((tag, i) => (
                <span
                  key={i}
                  className={`px-2 py-1 bg-${tag.color}/5 border border-${tag.color}/30 text-${tag.color} font-mono text-[10px] tracking-widest`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 bg-surface-container border border-outline-variant/30 px-4 py-3 shadow-xl">
              <div className="flex gap-2 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" style={{ animation: 'pulse-dot 1.5s infinite' }}></span>
                <span className="font-headline text-xs font-bold tracking-widest uppercase">System_Active</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
