import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import useSmoothScroll from './hooks/useSmoothScroll.js'
import Preloader from './components/Preloader.jsx'
import Cursor from './components/Cursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  useSmoothScroll(!loading)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })

  // Hold the page still (and at the top) while the preloader runs.
  useEffect(() => {
    if (loading) {
      window.scrollTo(0, 0)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader key="preloader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <Cursor />
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      {/* ambient background sits behind everything */}
      <div className="bg-layer">
        <div className="bg-grid" />
        <div className="orb orb--1" />
        <div className="orb orb--2" />
        <div className="orb orb--3" />
        <div className="bg-noise" />
      </div>

      <div className="page">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  )
}
