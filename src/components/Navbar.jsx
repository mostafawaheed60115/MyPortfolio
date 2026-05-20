import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav id="navbar" className="fixed top-0 w-full z-50 transition-all duration-300" style={{ background: 'rgba(6,12,20,0.85)', backdropFilter: 'blur(20px)', boxShadow: '0 4px 40px rgba(0,0,0,0.5)' }}>
      <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-xl font-bold tracking-[0.2em] text-primary uppercase font-headline" style={{ textShadow: '0 0 10px rgba(0,240,255,0.3)' }}>
          Mostafa<span className="text-on-surface" style={{ textShadow: 'none' }}>Waheed</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {['about', 'experience', 'skills', 'certificates', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleNavClick(e, `#${section}`)}
              className="relative py-1 font-headline tracking-wider text-on-surface hover:text-primary transition-colors uppercase text-xs font-bold group/nav"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/nav:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-glow bg-gradient-to-r from-primary to-[#00aecc] text-on-primary-fixed px-6 py-2 font-headline font-bold uppercase tracking-wider text-xs active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="hamburger"
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="flex-col gap-4 px-6 pb-6 flex md:hidden bg-surface-container border-t border-outline-variant/20">
          {['about', 'experience', 'skills', 'certificates', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleNavClick(e, `#${section}`)}
              className="font-headline text-on-surface uppercase text-sm font-bold tracking-widest hover:text-primary"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-block bg-primary text-on-primary-fixed px-6 py-2 font-headline font-bold uppercase tracking-wider text-xs text-center mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
