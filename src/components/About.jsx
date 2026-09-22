import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone, FiLinkedin } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal, { RevealGroup, revealChild } from './Reveal.jsx'
import { profile, stats } from '../data/content.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <SectionHeading
          eyebrow="About"
          title="Backend first, full-stack throughout."
          copy="Five years of shipping the parts nobody sees — the ones that decide whether the product stays up."
        />

        <div className="about__grid">
          <div className="about__body">
            <Reveal from="up">
              <p>{profile.summary}</p>
            </Reveal>
            <Reveal from="up" delay={0.12}>
              <p>{profile.summary2}</p>
            </Reveal>

            <RevealGroup className="about__facts">
              <motion.a
                className="fact"
                variants={revealChild}
                href={`mailto:${profile.email}`}
              >
                <FiMail />
                <span>{profile.email}</span>
              </motion.a>
              <motion.a
                className="fact"
                variants={revealChild}
                href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
              >
                <FiPhone />
                <span>{profile.phone}</span>
              </motion.a>
              <motion.a
                className="fact"
                variants={revealChild}
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
                <span>linkedin.com/in/pathum-thennakoon</span>
              </motion.a>
              <motion.div className="fact" variants={revealChild}>
                <FiMapPin />
                <span>{profile.location}</span>
              </motion.div>
            </RevealGroup>
          </div>

          <div className="about__side">
            {/* Vertical reveal only: an x-offset on a full-width element sits
                outside the viewport until it scrolls in, widening the page. */}
            <Reveal from="up" duration={0.9}>
              <figure className="avatar">
                <img
                  className="avatar__img"
                  src={profile.avatar}
                  alt={profile.name}
                  width={760}
                  height={760}
                  loading="lazy"
                />
                <figcaption className="avatar__tag">
                  <span className="avatar__dot" />
                  {profile.role}
                </figcaption>
              </figure>
            </Reveal>

            <RevealGroup className="stats" stagger={0.1}>
              {stats.map((s) => (
                <motion.div className="stat" key={s.label} variants={revealChild}>
                  <div className="stat__num grad-text">
                    <Counter to={s.value} />
                    {s.suffix}
                  </div>
                  <div className="stat__label">{s.label}</div>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Counts up from 0 once the number scrolls into view. */
function Counter({ to, duration = 1500 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      // easeOutCubic
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return <span ref={ref}>{value}</span>
}
