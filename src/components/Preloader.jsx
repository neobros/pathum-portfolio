import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/* Reads like a backend boot log — one service resolves per tick. */
const SERVICES = [
  { name: 'node', tag: '20.x', status: 'booted' },
  { name: 'dotnet', tag: '8.0', status: 'booted' },
  { name: 'laravel', tag: '11.x', status: 'booted' },
  { name: 'postgres', tag: '16', status: 'connected' },
  { name: 'redis', tag: '7.2', status: 'connected' },
  { name: 'socket.io', tag: '4.x', status: 'listening' },
]

const TICK = 250

export default function Preloader({ onDone }) {
  // How many services have resolved. Equal to SERVICES.length => all done.
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step >= SERVICES.length) {
      const finish = setTimeout(onDone, 820)
      return () => clearTimeout(finish)
    }
    const next = setTimeout(() => setStep((s) => s + 1), TICK)
    return () => clearTimeout(next)
  }, [step, onDone])

  const done = step >= SERVICES.length

  return (
    <motion.div
      className="preloader"
      exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.div
        className="boot"
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="boot__bar">
          <i /><i /><i />
          <span>pathum@portfolio — zsh</span>
        </div>

        <div className="boot__body">
          <div className="boot__line">
            <span className="boot__prompt">$</span>
            <span className="boot__cmd">pathum serve --stack=backend</span>
          </div>

          {/* Every row is always in the DOM and merely faded in, so the card
              keeps one fixed height instead of growing and re-centring. */}
          {SERVICES.map((svc, i) => {
            const reached = i <= step
            const resolved = i < step
            return (
              <motion.div
                className="boot__line"
                key={svc.name}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: reached ? 1 : 0, x: reached ? 0 : -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {resolved ? (
                  <span className="boot__ok">✓</span>
                ) : (
                  <motion.span
                    className="boot__pending"
                    animate={{ opacity: [1, 0.25, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    ●
                  </motion.span>
                )}
                <span className="boot__name">{svc.name}</span>
                <span className="boot__tag">{svc.tag}</span>
                <span className="boot__status">{resolved ? svc.status : 'starting…'}</span>
              </motion.div>
            )
          })}

          <motion.div
            className="boot__line boot__line--final"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: done ? 1 : 0, x: done ? 0 : -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="boot__arrow">→</span>
            <span className="grad-text">Pathum Thennakoon</span>
            <span className="boot__status">software engineer</span>
            <motion.span
              className="boot__caret"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
            />
          </motion.div>
        </div>

        <div className="boot__progress">
          <motion.i
            animate={{ scaleX: step / SERVICES.length }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
