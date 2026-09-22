export const profile = {
  name: 'Pathum Thennakoon',
  first: 'Pathum',
  last: 'Thennakoon',
  role: 'Backend Software Engineer',
  tagline: 'I architect backends that stay fast when everything else is on fire.',
  summary:
    'Backend Software Engineer with around 4 years of experience designing and delivering scalable, high-performance backend systems, microservices and RESTful APIs. Proficient in Laravel, Node.js, PHP, TypeScript, SQL and NoSQL databases, Docker and cloud-based deployments.',
  summary2:
    'Experienced in building and maintaining high-load, real-time applications, payment integrations and secure financial transaction platforms. Strong analytical mindset with the ability to architect and manage complex backend infrastructures in production environments.',
  location: 'No. 291/1A, Araliya Uyana, Muththettugala, Kurunegala, Sri Lanka',
  email: 'pathumthennakoon6@gmail.com',
  phone: '+94 70-221 1819',
  linkedin: 'http://www.linkedin.com/in/pathum-thennakoon',
  photo: '/assets/pathum.webp',
}

export const stats = [
  { value: 4, suffix: '+', label: 'Years building backends' },
  { value: 4, suffix: '', label: 'Engineering teams' },
  { value: 20, suffix: '+', label: 'Production services' },
  { value: 11, suffix: '', label: 'Laravel versions shipped' },
]

export const skillGroups = [
  {
    title: 'Backend',
    accent: 'violet',
    items: [
      'PHP',
      'Laravel (8-11)',
      'Node.js',
      'Express.js',
      'NestJS',
      'REST API Development',
      'Microservices',
      'WebSockets',
    ],
  },
  {
    title: 'Frontend',
    accent: 'cyan',
    items: ['React.js', 'Angular (Basic)', 'JavaScript', 'TypeScript', 'HTML5', 'Bootstrap'],
  },
  {
    title: 'Databases',
    accent: 'amber',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'DevOps & Cloud',
    accent: 'emerald',
    items: ['Docker', 'PM2', 'Nginx', 'AWS (Basic)', 'Linux'],
  },
]

export const experience = [
  {
    company: 'Trades Pay Hero',
    role: 'Software Engineer / QA Engineer',
    period: 'Apr 2026 — Present',
    current: true,
    points: [
      'Developed and maintained scalable web applications using Laravel, Node.js and MySQL.',
      'Designed and executed automated and manual testing to ensure software quality.',
      'Collaborated with cross-functional teams to deliver reliable, high-performance solutions.',
      'Improved application stability by identifying, debugging and resolving critical issues.',
    ],
    stack: ['Laravel', 'Node.js', 'MySQL', 'QA Automation'],
  },
  {
    company: 'Endless Raven Software Solutions',
    role: 'Software Engineer',
    period: 'Sep 2025 — Mar 2026',
    points: [
      'Engineered scalable backend systems using Laravel, Node.js and MySQL.',
      'Built and optimized POS, inventory and workflow automation platforms.',
      'Delivered tailored solutions for retail, finance and service sectors.',
      'Integrated secure APIs and architected multi-branch backend systems.',
    ],
    stack: ['Laravel', 'Node.js', 'MySQL', 'POS', 'Multi-branch'],
  },
  {
    company: 'Parallax Technologies Pvt. Ltd.',
    role: 'Junior Software Engineer',
    period: 'May 2024 — Aug 2025',
    points: [
      'Engineered backend systems using Laravel, Node.js and MySQL.',
      'Developed financial modules, admin dashboards, microservices and API integrations.',
      'Optimized backend performance and improved database efficiency.',
    ],
    stack: ['Laravel', 'Node.js', 'MySQL', 'Microservices'],
  },
  {
    company: 'Block-Stars Pvt. Ltd. / Empire Dragon Solutions',
    role: 'Associate Software Engineer',
    period: 'Jul 2022 — May 2024',
    points: [
      'Engineered backend systems using Laravel, Node.js and MySQL.',
      'Developed financial modules, admin dashboards, microservices and API integrations.',
      'Optimized backend performance and improved database efficiency.',
    ],
    stack: ['Laravel', 'Node.js', 'MySQL', 'Dashboards'],
  },
]

export const projects = [
  {
    index: '01',
    title: 'Casino Platform Backend',
    blurb:
      'Secure wallet, auto-betting and real-time result processing built for extreme concurrency.',
    points: [
      'Developed secure wallet and auto-betting systems using microservice architecture and cron-based processing.',
      'Implemented real-time betting, result processing and notifications optimized for high-concurrency environments.',
      'Conducted backend testing, transaction validation and QA monitoring to ensure accuracy and system stability.',
    ],
    stack: ['Node.js', 'Express', 'React', 'MySQL', 'Redis', 'Socket.IO', 'REST APIs'],
  },
  {
    index: '02',
    title: 'LMS System Backend',
    blurb: 'Online examinations, student management and adaptive HLS video streaming at scale.',
    points: [
      'Built online examination and student management systems with analytics dashboards.',
      'Implemented HLS video streaming with FFmpeg, including multi-quality outputs and thumbnail generation.',
      'Performed testing, debugging and QA validation for exams, video modules and API workflows.',
    ],
    stack: ['Laravel', 'React', 'MySQL', 'FFmpeg', 'HLS', 'REST APIs'],
  },
  {
    index: '03',
    title: 'Payment Notification & Payout System',
    blurb:
      'Batch payouts with multi-level approvals, audit trails and automated status notifications.',
    points: [
      'Implemented batch-based payout processing with multi-level approvals and audit logging.',
      'Developed automated notification workflows for payout tracking and status updates.',
    ],
    stack: ['Laravel', 'MySQL', 'REST APIs'],
  },
  {
    index: '04',
    title: 'Inventory & Order Management System',
    blurb: 'Multi-branch stock control, order lifecycle tracking and reconciliation reporting.',
    points: [
      'Built multi-branch inventory tracking with stock movement, transfer and reconciliation workflows.',
      'Developed the order lifecycle engine covering purchasing, fulfilment and returns.',
      'Delivered reporting APIs and role-based access for operations and finance teams.',
    ],
    stack: ['Laravel', 'MySQL', 'REST APIs'],
  },
]

export const education = [
  {
    title: 'BSc (Hons) in Information Technology',
    place: 'Sri Lanka Institute of Information Technology — SLIIT',
    period: 'Jan 2020 — Mar 2025',
  },
  {
    title: 'Advanced Level',
    place: 'Maliyadeva College, Kurunegala',
    period: 'Mar 2017 — Dec 2019',
  },
  {
    title: 'Ordinary Level',
    place: 'Maliyadeva College, Kurunegala',
    period: 'Jan 2006 — Mar 2017',
  },
]

export const extras = [
  { label: 'Languages', value: 'English, Sinhala' },
  { label: 'Certifications', value: 'British Council Intermediate English Course — Colombo' },
  { label: 'Awards', value: 'Emerging Talent Award, Parallax — 2024' },
]

export const references = [
  {
    name: 'Pasindu Piyathilake',
    role: 'CEO & Senior Software Engineer',
    company: 'Block-Stars Pvt. Ltd. / Empire Dragon Solutions',
    phone: '+94 711 641 942',
    email: 'piyathilaka@gmail.com',
  },
  {
    name: 'Jayasinghe J A P P K',
    role: 'Software Engineer',
    company: 'Swivel Tech',
    phone: '+94 712 696 138',
    email: 'pasankalhara13@gmail.com',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
