import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import { RevealGroup, revealChild } from './Reveal.jsx'
import { projects } from '../data/content.js'
import useCardSheen from '../hooks/useCardSheen.js'

export default function Projects() {
  const onMove = useCardSheen()

  return (
    <section className="section" id="projects">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Systems built to take a beating."
          copy="Wallets, exams, payouts and stock — the backends behind platforms people use daily."
        />

        <RevealGroup className="projects__grid" stagger={0.1}>
          {projects.map((project) => (
            <motion.article
              className="card pcard"
              key={project.title}
              variants={revealChild}
              onPointerMove={onMove}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            >
              <span className="pcard__glow" />

              <span className="pcard__index">{project.index}</span>
              <h3 className="pcard__title">{project.title}</h3>
              <p className="pcard__blurb">{project.blurb}</p>

              <ul className="pcard__points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="pcard__stack">
                {project.stack.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
