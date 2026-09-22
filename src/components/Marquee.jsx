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
  SiDotnet,
  SiPython,
  SiGit,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const TECH = [
  { Icon: SiNodedotjs, label: 'Node.js', color: '#5fa04e' },
  { Icon: SiNestjs, label: 'NestJS', color: '#e0234e' },
  { Icon: SiExpress, label: 'Express', color: '#e9ecf5' },
  { Icon: SiDotnet, label: '.NET', color: '#8c4ee8' },
  { Icon: SiLaravel, label: 'Laravel', color: '#f05340' },
  { Icon: SiPhp, label: 'PHP', color: '#8892bf' },
  { Icon: SiPython, label: 'Python', color: '#ffd845' },
  { Icon: SiReact, label: 'React', color: '#61dafb' },
  { Icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
  { Icon: SiJavascript, label: 'JavaScript', color: '#f7df1e' },
  { Icon: SiPostgresql, label: 'PostgreSQL', color: '#4169e1' },
  { Icon: SiMysql, label: 'MySQL', color: '#4479a1' },
  { Icon: SiMongodb, label: 'MongoDB', color: '#47a248' },
  { Icon: SiRedis, label: 'Redis', color: '#ff4438' },
  { Icon: SiSocketdotio, label: 'Socket.IO', color: '#e9ecf5' },
  { Icon: FaAws, label: 'AWS', color: '#ff9900' },
  { Icon: SiDocker, label: 'Docker', color: '#2496ed' },
  { Icon: SiNginx, label: 'Nginx', color: '#009639' },
  { Icon: SiGit, label: 'Git', color: '#f05032' },
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
