import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let value = 0
    const tick = setInterval(() => {
      // Ease out so it slows down near the end rather than running linearly.
      value += Math.max(1, (100 - value) * 0.09)
      if (value >= 100) {
        value = 100
        clearInterval(tick)
        setTimeout(onDone, 480)
      }
      setProgress(Math.round(value))
    }, 34)

    return () => clearInterval(tick)
  }, [onDone])

  return (
    <motion.div
      className="preloader"
      exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="preloader__inner">
        <motion.p
          className="preloader__name"
          initial={{ opacity: 0, letterSpacing: '0.9em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Pathum Thennakoon
        </motion.p>

        <div className="preloader__count grad-text">
          {String(progress).padStart(3, '0')}
        </div>

        <div className="preloader__bar">
          <motion.div
            className="preloader__fill"
            style={{ scaleX: progress / 100 }}
            transition={{ ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
