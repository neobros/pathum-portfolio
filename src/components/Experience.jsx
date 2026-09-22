import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { experience } from '../data/content.js'
import useCardSheen from '../hooks/useCardSheen.js'

export default function Experience() {
  const railRef = useRef(null)
  const onMove = useCardSheen()

  // The gradient rail fills as the timeline scrolls past.
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 75%', 'end 60%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.4 })

  return (
    <section className="section" id="experience">
      <div className="shell">
        <SectionHeading
          eyebrow="Experience"
          title="Four years, four teams."
          copy="From associate to owning backend architecture — each step added load, money or both."
        />

        <div className="timeline" ref={railRef}>
          <div className="timeline__rail">
            <motion.div className="timeline__progress" style={{ scaleY }} />
          </div>

          {experience.map((job, i) => (
            <Reveal
              className={`tl-item ${job.current ? 'tl-item--current' : ''}`}
              key={job.company}
              from="up"
              delay={i * 0.05}
            >
              <span className="tl-node">
                <i />
              </span>

              <motion.div
                className="card tl-card"
                onPointerMove={onMove}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              >
                <div className="tl-head">
                  <h3 className="tl-company">
                    {job.company}
                    {job.current && <span className="tl-badge">Current</span>}
                  </h3>
                  <span className="tl-period">{job.period}</span>
                </div>

                <p className="tl-role">{job.role}</p>

                <ul className="tl-points">
                  {job.points.map((point, p) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.06 * p, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>

                <div className="tl-stack">
                  {job.stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
