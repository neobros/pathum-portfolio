import { FiArrowUp, FiMail, FiPhone } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import Reveal, { SplitText } from './Reveal.jsx'
import Logo from './Logo.jsx'
import { profile } from '../data/content.js'

export default function Contact() {
  return (
    <>
      <section className="section contact" id="contact">
        <div className="shell">
          <Reveal>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Contact
            </span>
          </Reveal>

          <SplitText
            text="Got a backend that needs to scale?"
            className="contact__title"
            as="h2"
          />

          <Reveal delay={0.2}>
            <a className="contact__mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </Reveal>

          <Reveal delay={0.3} className="contact__row">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              Send an email <FiMail size={16} />
            </a>
            <a
              className="btn btn--ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedinIn size={15} />
            </a>
            <a
              className="btn btn--ghost"
              href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
            >
              {profile.phone} <FiPhone size={15} />
            </a>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="shell footer">
          <a className="footer__brand" href="#home" aria-label="Back to top">
            <Logo size={30} />
            <span>
              © {new Date().getFullYear()} {profile.name} · {profile.role}
            </span>
          </a>
          <a className="footer__top" href="#home">
            Back to top <FiArrowUp size={14} />
          </a>
        </div>
      </footer>
    </>
  )
}
