import Reveal, { SplitText } from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-head">
      <Reveal from="up" duration={0.6}>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <SplitText text={title} className="section-title" as="h2" />
      {copy && (
        <Reveal from="up" delay={0.15}>
          <p>{copy}</p>
        </Reveal>
      )}
    </div>
  )
}
