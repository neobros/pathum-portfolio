import { motion } from 'framer-motion'
import { FiAward, FiBookOpen, FiPhone, FiMail } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal, { RevealGroup, revealChild } from './Reveal.jsx'
import { education, extras, references } from '../data/content.js'
import useCardSheen from '../hooks/useCardSheen.js'

export default function Education() {
  const onMove = useCardSheen()

  return (
    <section className="section" id="education">
      <div className="shell">
        <SectionHeading
          eyebrow="Education & credentials"
          title="Where the fundamentals came from."
        />

        <div className="edu__grid">
          <RevealGroup stagger={0.1}>
            {education.map((item) => (
              <motion.div className="edu-item" key={item.title} variants={revealChild}>
                <span className="edu-item__icon">
                  {item.title.startsWith('BSc') ? <FiAward /> : <FiBookOpen />}
                </span>
                <div>
                  <h3 className="edu-item__title">{item.title}</h3>
                  <p className="edu-item__place">{item.place}</p>
                  <p className="edu-item__period">{item.period}</p>
                </div>
              </motion.div>
            ))}
          </RevealGroup>

          <RevealGroup className="extras" stagger={0.1}>
            {extras.map((item) => (
              <motion.div className="extra" key={item.label} variants={revealChild}>
                <div className="extra__label">{item.label}</div>
                <div className="extra__value">{item.value}</div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        {/* ---------------- references ---------------- */}
        <div style={{ marginTop: 'clamp(56px, 8vw, 96px)' }}>
          <Reveal>
            <span className="eyebrow">References</span>
          </Reveal>

          <RevealGroup className="refs" stagger={0.12}>
            {references.map((ref) => (
              <motion.div
                className="card ref"
                key={ref.name}
                variants={revealChild}
                onPointerMove={onMove}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              >
                <h3 className="ref__name">{ref.name}</h3>
                <p className="ref__role">{ref.role}</p>
                <p className="ref__company">{ref.company}</p>

                <div className="ref__contact">
                  <a href={`tel:${ref.phone.replace(/[^+\d]/g, '')}`}>
                    <FiPhone size={13} />
                    {ref.phone}
                  </a>
                  <a href={`mailto:${ref.email}`}>
                    <FiMail size={13} />
                    {ref.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
