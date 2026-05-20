import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Scroll reveal (IntersectionObserver)
    const revealEls = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })
    revealEls.forEach(el => revealObserver.observe(el))

    return () => revealObserver.disconnect()
  }, [])

  return (
    <>
      {/* Ambient background blur elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/4 rounded-full blur-[120px] animate-float-1"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[55vw] h-[55vw] bg-secondary/4 rounded-full blur-[140px] animate-float-2"></div>
        <div className="absolute top-[50%] left-[30%] w-[45vw] h-[45vw] bg-tertiary/3 rounded-full blur-[150px] animate-float-3"></div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
