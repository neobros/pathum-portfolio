import { profile } from '../data/content.js'

/**
 * Brand mark — the circular headshot inside a gradient ring, matching
 * public/favicon.svg. Rendered as a ringed <img> rather than inline SVG so the
 * photo is fetched once and cached, instead of being base64'd into the bundle.
 */
export default function Logo({ size = 32, className = '', title = 'Pathum Thennakoon' }) {
  return (
    <span
      className={`logo ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={title}
    >
      <img src={profile.mark} alt="" width={128} height={128} />
    </span>
  )
}
