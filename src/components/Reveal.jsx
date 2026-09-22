import { motion } from 'framer-motion'

const OFFSETS = {
  up: { y: 42, x: 0 },
  down: { y: -42, x: 0 },
  left: { x: 46, y: 0 },
  right: { x: -46, y: 0 },
  none: { x: 0, y: 0 },
}

/**
 * Scroll-triggered entrance. Fires once, when ~20% of the element is visible.
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.8,
  from = 'up',
  blur = true,
  className,
  as = 'div',
  ...rest
}) {
  const offset = OFFSETS[from] ?? OFFSETS.up
  const Tag = motion[as] ?? motion.div

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offset, filter: blur ? 'blur(10px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Staggers direct children of a container as it scrolls into view. */
export function RevealGroup({ children, className, stagger = 0.09, delay = 0, ...rest }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export const revealChild = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Splits a string into per-word spans that rise into place. */
export function SplitText({ text, className, delay = 0, stagger = 0.05, as: Tag = 'h2' }) {
  const MotionTag = motion[Tag] ?? motion.h2
  const words = text.split(' ')

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            variants={{
              hidden: { y: '110%', opacity: 0 },
              show: { y: '0%', opacity: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}
