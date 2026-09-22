import { motion } from 'framer-motion'
import { FiServer, FiLayout, FiDatabase, FiCloud } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import { RevealGroup, revealChild } from './Reveal.jsx'
import { skillGroups } from '../data/content.js'
import useCardSheen from '../hooks/useCardSheen.js'

const ICONS = {
  Backend: FiServer,
  Frontend: FiLayout,
  Databases: FiDatabase,
  'DevOps & Cloud': FiCloud,
}

export default function Skills() {
  const onMove = useCardSheen()

  return (
    <section className="section" id="skills">
      <div className="shell">
        <SectionHeading
          eyebrow="Technical skills"
          title="The stack I reach for."
          copy="Chosen for what holds up in production, not what trends this quarter."
        />

        <RevealGroup className="skills__grid" stagger={0.1}>
          {skillGroups.map((group) => {
            const Icon = ICONS[group.title] ?? FiServer

            return (
              <motion.div
                className="card skillcard"
                key={group.title}
                variants={revealChild}
                onPointerMove={onMove}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              >
                <div className="skillcard__head">
                  <span className={`skillcard__icon acc-${group.accent}`}>
                    <Icon />
                  </span>
                  <h3 className="skillcard__title">{group.title}</h3>
                  <span className="skillcard__count">
                    {String(group.items.length).padStart(2, '0')}
                  </span>
                </div>

                <div className="skillcard__items">
                  {group.items.map((item, i) => (
                    <motion.span
                      className="chip"
                      key={item}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
