import {
  SiLaravel,
  SiNodedotjs,
  SiPhp,
  SiExpress,
  SiNestjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiNginx,
  SiLinux,
  SiSocketdotio,
} from 'react-icons/si'

const TECH = [
  { Icon: SiLaravel, label: 'Laravel', color: '#f05340' },
  { Icon: SiPhp, label: 'PHP', color: '#8892bf' },
  { Icon: SiNodedotjs, label: 'Node.js', color: '#5fa04e' },
  { Icon: SiExpress, label: 'Express', color: '#e9ecf5' },
  { Icon: SiNestjs, label: 'NestJS', color: '#e0234e' },
  { Icon: SiReact, label: 'React', color: '#61dafb' },
  { Icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
  { Icon: SiJavascript, label: 'JavaScript', color: '#f7df1e' },
  { Icon: SiMysql, label: 'MySQL', color: '#4479a1' },
  { Icon: SiPostgresql, label: 'PostgreSQL', color: '#4169e1' },
  { Icon: SiMongodb, label: 'MongoDB', color: '#47a248' },
  { Icon: SiRedis, label: 'Redis', color: '#ff4438' },
  { Icon: SiDocker, label: 'Docker', color: '#2496ed' },
  { Icon: SiNginx, label: 'Nginx', color: '#009639' },
  { Icon: SiSocketdotio, label: 'Socket.IO', color: '#e9ecf5' },
  { Icon: SiLinux, label: 'Linux', color: '#fcc624' },
]

export default function Marquee() {
  // Rendered twice so the -50% keyframe loops seamlessly.
  const loop = [...TECH, ...TECH]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map(({ Icon, label, color }, i) => (
          <span className="marquee__item" key={`${label}-${i}`}>
            <Icon style={{ color }} />
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
