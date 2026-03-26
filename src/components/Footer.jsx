export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-outline-variant/20 bg-surface-container-low">
      <div className="flex flex-col items-center gap-6 px-4 max-w-7xl mx-auto">
        <span className="text-primary font-bold font-headline tracking-[0.25em] uppercase text-lg">
          MW_<span className="text-on-surface">SYSTEMS</span>
        </span>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="https://www.linkedin.com/in/mostafa-waheed-29009b346/" target="_blank" rel="noreferrer" className="font-mono text-[10px] tracking-[0.2em] uppercase text-outline hover:text-primary transition-colors">LinkedIn</a>
          <a href="mailto:mostafaawaheed0@gmail.com" className="font-mono text-[10px] tracking-[0.2em] uppercase text-outline hover:text-primary transition-colors">Email</a>
          <a href="tel:+201509999283" className="font-mono text-[10px] tracking-[0.2em] uppercase text-outline hover:text-primary transition-colors">Phone</a>
        </div>
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-outline/50">© 2025 MOSTAFA WAHEED // SYSTEM_STABLE</p>
      </div>
    </footer>
  )
}
