import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiArrowDownRight, FiMail, FiPhone } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import {
  SiLaravel,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiMysql,
  SiRedis,
  SiDocker,
  SiMongodb,
  SiTypescript,
  SiNginx,
  SiPostgresql,
  SiSocketdotio,
} from 'react-icons/si'
import { profile } from '../data/content.js'

/* Icons that ride the outer orbit ring */
const OUTER = [
  { Icon: SiLaravel, color: '#f05340', label: 'Laravel' },
  { Icon: SiNodedotjs, color: '#5fa04e', label: 'Node.js' },
  { Icon: SiPhp, color: '#8892bf', label: 'PHP' },
  { Icon: SiReact, color: '#61dafb', label: 'React' },
  { Icon: SiMysql, color: '#4479a1', label: 'MySQL' },
  { Icon: SiDocker, color: '#2496ed', label: 'Docker' },
  { Icon: SiRedis, color: '#ff4438', label: 'Redis' },
  { Icon: SiTypescript, color: '#3178c6', label: 'TypeScript' },
]

/* Icons on the tighter, counter-rotating inner ring */
const INNER = [
  { Icon: SiMongodb, color: '#47a248', label: 'MongoDB' },
  { Icon: SiNginx, color: '#009639', label: 'Nginx' },
  { Icon: SiPostgresql, color: '#4169e1', label: 'PostgreSQL' },
  { Icon: SiSocketdotio, color: '#e9ecf5', label: 'Socket.IO' },
]

/**
 * Places items evenly around a circle. The radius comes from the --orbit-r
 * custom property so CSS media queries can shrink the ring on small screens,
 * and the offsets are returned as framer-motion x/y so they compose with the
 * entrance scale instead of fighting a raw `transform` string.
 */
function orbitStyle(index, total) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2
  return {
    x: `calc(var(--orbit-r) * ${Math.cos(angle).toFixed(4)})`,
    y: `calc(var(--orbit-r) * ${Math.sin(angle).toFixed(4)})`,
  }
}

export default function Hero() {
  const stageRef = useRef(null)

  // Mouse parallax — raw pointer position normalised to -0.5..0.5
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.6 })

  // Vertical travel is deliberately small — it stacks with the `bob` keyframe,
  // and together they must not lift the top of his head into the navbar.
  const photoX = useTransform(sx, [-0.5, 0.5], [-16, 16])
  const photoY = useTransform(sy, [-0.5, 0.5], [-9, 9])
  const rotY = useTransform(sx, [-0.5, 0.5], [7, -7])
  const rotX = useTransform(sy, [-0.5, 0.5], [-4, 4])
  const ringsX = useTransform(sx, [-0.5, 0.5], [16, -16])
  const ringsY = useTransform(sy, [-0.5, 0.5], [12, -12])

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      mx.set((e.clientX - rect.left) / rect.width - 0.5)
      my.set((e.clientY - rect.top) / rect.height - 0.5)
    }
    const onLeave = () => {
      mx.set(0)
      my.set(0)
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [mx, my])

  return (
    <section className="hero" id="home">
      <div className="shell hero__grid">
        {/* ---------------- copy ---------------- */}
        <div>
          <motion.span
            className="hero__status"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__dot" />
            Available for backend work
          </motion.span>

          <h1 className="hero__title">
            {[profile.first, profile.last].map((word, i) => (
              <span key={word} style={{ overflow: 'hidden', display: 'block' }}>
                <motion.span
                  style={{ display: 'block' }}
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 1,
                    delay: 0.45 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={i === 1 ? 'grad-text' : ''}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="hero__role"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typewriter
              words={[
                'Backend Software Engineer',
                'Laravel & Node.js Specialist',
                'Microservices Architect',
                'Real-time Systems Builder',
              ]}
            />
          </motion.div>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Around 4 years designing scalable APIs, microservices and secure financial
            transaction platforms that hold up under real production load.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.02, ease: [0.22, 1, 0.36, 1] }}
          >
            <a className="btn btn--primary" href="#projects">
              View my work <FiArrowDownRight size={17} />
            </a>
            <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
              Get in touch <FiMail size={16} />
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.14, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              className="hero__social"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={17} />
            </a>
            <a className="hero__social" href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail size={17} />
            </a>
            <a
              className="hero__social"
              href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
              aria-label="Phone"
            >
              <FiPhone size={17} />
            </a>
          </motion.div>
        </div>

        {/* ---------------- visual ---------------- */}
        <div className="hero__visual" ref={stageRef}>
          <div className="hero__halo" />

          {/*
            Parallax lives on this wrapper only. The rings and orbit tracks below
            are animated by CSS keyframes, and a CSS animation beats an inline
            transform — so the two must never sit on the same element.
          */}
          <motion.div className="hero__parallax" style={{ x: ringsX, y: ringsY }}>
            <div className="hero__ring hero__ring--a" />
            <div className="hero__ring hero__ring--b" />

            {/* outer tech orbit */}
            <div className="orbit">
              {OUTER.map(({ Icon, color, label }, i) => (
                <motion.div
                  key={label}
                  className="orbit__item"
                  style={orbitStyle(i, OUTER.length)}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.25 + i * 0.07,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  title={label}
                >
                  <Icon className="orbit__icon" style={{ color }} />
                </motion.div>
              ))}
            </div>

            {/* inner tech orbit */}
            <div className="orbit orbit--inner">
              {INNER.map(({ Icon, color, label }, i) => (
                <motion.div
                  key={label}
                  className="orbit__item"
                  style={orbitStyle(i, INNER.length)}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.6 + i * 0.07,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  title={label}
                >
                  <Icon className="orbit__icon" style={{ color }} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* portrait */}
          <motion.div
            className="hero__photo-wrap"
            style={{
              x: photoX,
              y: photoY,
              rotateX: rotX,
              rotateY: rotY,
              transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, scale: 0.88, clipPath: 'inset(100% 0 0 0)' }}
            animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.35, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              className="hero__photo"
              src={profile.photo}
              alt={`${profile.name}, backend software engineer`}
              width={578}
              height={1371}
            />
            <div className="hero__scan" />
          </motion.div>

          {/* floating code cards */}
          <motion.div
            className="snippet snippet--1"
            initial={{ opacity: 0, y: 26, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="snippet__bar">
              <i /><i /><i />
            </div>
            <span className="c">// api/routes.php</span>
            {'\n'}
            <span className="k">Route</span>::<span className="f">apiResource</span>(
            <span className="s">'payouts'</span>);
          </motion.div>

          <motion.div
            className="snippet snippet--2"
            initial={{ opacity: 0, y: 26, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.68, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="snippet__bar">
              <i /><i /><i />
            </div>
            <span className="k">io</span>.<span className="f">on</span>(
            <span className="s">'bet:placed'</span>, <span className="k">async</span> (e) =&gt; {'{'}
            {'\n'}
            {'  '}<span className="k">await</span> <span className="f">settle</span>(e);
            {'\n'}
            {'}'});
          </motion.div>

          <motion.div
            className="snippet snippet--3"
            initial={{ opacity: 0, y: 26, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.86, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="c">$</span> docker compose up <span className="n">-d</span>
            {'\n'}
            <span className="s">✔</span> <span className="c">api · redis · mysql ready</span>
          </motion.div>
        </div>
      </div>

      <div className="hero__scrollcue">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  )
}

/** Cycles through phrases, typing and deleting each one. */
function Typewriter({ words, typeSpeed = 70, deleteSpeed = 34, hold = 1700 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]

    if (!deleting && text === word) {
      const pause = setTimeout(() => setDeleting(true), hold)
      return () => clearTimeout(pause)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const timer = setTimeout(
      () => {
        setText((current) =>
          deleting ? word.slice(0, current.length - 1) : word.slice(0, current.length + 1)
        )
      },
      deleting ? deleteSpeed : typeSpeed
    )

    return () => clearTimeout(timer)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, hold])

  return (
    <span>
      {text}
      <motion.span
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
        style={{ marginLeft: 2 }}
      >
        _
      </motion.span>
    </span>
  )
}
