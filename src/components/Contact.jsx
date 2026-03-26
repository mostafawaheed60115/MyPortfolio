export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-10">
      <div className="max-w-4xl mx-auto reveal">
        <div className="glass-panel border border-primary/15 p-10 md:p-16 text-center space-y-8 relative overflow-hidden">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/40"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/40"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary/40"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/40"></div>
          {/* bg glow */}
          <div className="absolute inset-0 bg-primary/3 blur-3xl pointer-events-none"></div>

          <div className="relative space-y-8">
            <div className="font-mono text-[10px] text-primary tracking-[0.35em] uppercase">// SECTION 06 · Initiate_Collaboration</div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter uppercase">
              Ready to Build<br /><span className="text-primary">Together?</span>
            </h2>
            <p className="font-body text-on-surface-variant max-w-xl mx-auto text-sm leading-relaxed">
              My terminal is open for professional inquiries, AI architecture discussions, and collaboration on high-impact projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:mostafaawaheed0@gmail.com"
                className="bg-gradient-to-r from-primary to-[#00c8d4] text-on-primary-fixed px-10 py-4 font-headline font-bold uppercase tracking-[0.2em] text-sm hover:shadow-[0_0_28px_rgba(0,240,255,0.45)] transition-all"
              >
                Send_Message
              </a>
              <a
                href="https://www.linkedin.com/in/mostafa-waheed-29009b346/"
                target="_blank"
                rel="noreferrer"
                className="border border-outline-variant/40 text-primary px-10 py-4 font-headline font-bold uppercase tracking-[0.2em] text-sm hover:bg-primary/10 hover:border-primary/40 transition-all"
              >
                LinkedIn_Profile
              </a>
            </div>
            {/* Contact row */}
            <div className="flex flex-wrap justify-center gap-8 pt-4 border-t border-outline-variant/20">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                <span className="font-mono text-[10px] tracking-wider">mostafawaheed60115@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm">phone_iphone</span>
                <span className="font-mono text-[10px] tracking-wider">+201509999283</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                <span className="font-mono text-[10px] tracking-wider">Asyut, Egypt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
