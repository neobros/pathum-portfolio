export const profile = {
  name: 'Pathum Thennakoon',
  first: 'Pathum',
  last: 'Thennakoon',
  role: 'Software Engineer',
  tagline: 'I build systems that stay fast when everything else is on fire.',
  summary:
    'Software Engineer with 5+ years of experience building scalable, high-performance applications, with a strong focus on backend systems. Experienced in full-stack development using Node.js, NestJS, TypeScript, React, Laravel and PHP, including the design and development of REST APIs and real-time applications.',
  summary2:
    'Skilled in PostgreSQL, MySQL, MongoDB, Redis, AWS, CI/CD and production deployments. Experienced in developing payment and financial systems and performance-optimized applications, with a strong focus on reliability, scalability and maintainable software architecture.',
  location: 'Sri Lanka',
  email: 'pathumthennakoon6@gmail.com',
  phone: '+94 70-2211819',
  linkedin: 'http://www.linkedin.com/in/pathum-thennakoon',
  photo: '/assets/pathum.webp',
  avatar: '/assets/pathum-profile.webp',
  mark: '/assets/pathum-avatar.webp',
}

export const stats = [
  { value: 5, suffix: '+', label: 'Years of experience' },
  { value: 4, suffix: '', label: 'Engineering teams' },
  { value: 4, suffix: '', label: 'Flagship platforms' },
  { value: 15, suffix: '+', label: 'Technologies in production' },
]

export const skillGroups = [
  {
    title: 'Backend',
    accent: 'violet',
    items: [
      'Node.js',
      'NestJS',
      'Express.js',
      'Laravel',
      'PHP',
      '.NET',
      'Python',
      'REST APIs',
      'Microservices',
      'WebSockets',
    ],
  },
  {
    title: 'Frontend',
    accent: 'cyan',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'Bootstrap'],
  },
  {
    title: 'Databases',
    accent: 'amber',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'DevOps & Cloud',
    accent: 'emerald',
    items: ['AWS', 'CI/CD', 'Docker', 'Nginx', 'PM2', 'Linux', 'Git'],
  },
]

export const experience = [
  {
    company: 'Trades Pay Hero',
    role: 'Software Engineer / QA Engineer',
    period: 'Apr 2026 — Present',
    current: true,
    points: [
      'Develop and maintain scalable web applications using React, .NET and PostgreSQL, with a focus on performance, reliability and maintainability.',
      'Design and implement backend APIs, business logic, frontend features and database-driven application functionality.',
      'Perform automated and manual testing, API testing, regression testing, debugging and defect validation to ensure software quality.',
      'Investigate and resolve application defects, production issues and performance bottlenecks to improve overall system stability.',
      'Collaborate with developers and cross-functional teams to deliver reliable features and production-ready releases.',
    ],
    stack: [
      'React',
      '.NET',
      'PostgreSQL',
      'REST APIs',
      'Automated Testing',
      'Manual Testing',
      'API Testing',
      'Git',
    ],
  },
  {
    company: 'Endless Raven Software Solutions',
    role: 'Software Engineer',
    period: 'Sep 2025 — Mar 2026',
    points: [
      'Designed and developed scalable backend and full-stack applications using Laravel, Node.js, React, Python, PostgreSQL and MySQL.',
      'Built and enhanced POS systems, inventory management platforms, medical-support systems and workflow automation solutions for retail, finance, healthcare and service-sector operations.',
      'Developed and maintained REST APIs, backend business logic and data-processing workflows for complex business requirements.',
      'Designed backend architectures for multi-branch applications, enabling centralized data management and operational control across multiple locations.',
    ],
    stack: [
      'Laravel',
      'PHP',
      'Node.js',
      'React',
      'Python',
      'PostgreSQL',
      'MySQL',
      'REST APIs',
      'Git',
    ],
  },
  {
    company: 'Parallax Technologies Pvt. Ltd.',
    role: 'Junior Software Engineer',
    period: 'May 2024 — Aug 2025',
    points: [
      'Developed backend services and application features using Laravel, NestJS, React and PostgreSQL.',
      'Built financial modules, admin dashboards, microservices and REST APIs.',
      'Implemented backend business logic and database-driven workflows.',
      'Optimized database queries and backend processes for better performance.',
      'Supported debugging, maintenance and production application improvements.',
    ],
    stack: [
      'Laravel',
      'PHP',
      'NestJS',
      'Node.js',
      'React',
      'PostgreSQL',
      'REST APIs',
      'Microservices',
      'Git',
    ],
  },
  {
    company: 'Block-Stars Pvt. Ltd. / Empire Dragon Solutions',
    role: 'Associate Software Engineer',
    period: 'Jul 2022 — May 2024',
    points: [
      'Developed and maintained scalable web applications using Laravel, Node.js, React, MongoDB and MySQL.',
      'Contributed to financial modules, admin systems, microservices, entertainment platforms and casino-related systems.',
      'Supported mobile application backends, MetaMask-related features and API-based integrations.',
      'Developed backend logic and database-driven features for high-activity application workflows.',
    ],
    stack: [
      'Laravel',
      'PHP',
      'Node.js',
      'React',
      'MongoDB',
      'MySQL',
      'REST APIs',
      'Microservices',
      'MetaMask',
      'Git',
    ],
  },
]

export const projects = [
  {
    index: '01',
    title: 'Casino Platform',
    blurb:
      'Wallet operations, automated betting and real-time game processing built for high concurrency.',
    points: [
      'Developed a scalable casino platform backend supporting wallet operations, automated betting and real-time game processing.',
      'Implemented secure wallet transactions, bet placement, result processing and settlement workflows.',
      'Built automated betting workflows using microservices and scheduled processing.',
      'Used Socket.IO and Redis to support real-time betting updates and high-concurrency operations.',
      'Performed transaction validation, backend testing, debugging and QA monitoring to improve system reliability.',
    ],
    stack: [
      'Node.js',
      'Express.js',
      'React',
      'MySQL',
      'Redis',
      'Socket.IO',
      'REST APIs',
      'Microservices',
    ],
  },
  {
    index: '02',
    title: 'LMS System',
    blurb:
      'Student management, online examinations and adaptive HLS video streaming in one platform.',
    points: [
      'Developed an LMS platform for student management, online examinations, video lessons and learning content.',
      'Built examination workflows and student management features with analytics dashboards.',
      'Implemented HLS video streaming using FFmpeg with multiple video quality levels and thumbnail generation.',
      'Developed and maintained backend APIs for exams, student data, video content and application workflows.',
      'Performed testing, debugging and QA validation across examination, video and API modules.',
    ],
    stack: ['Laravel', 'PHP', 'React', 'MySQL', 'FFmpeg', 'HLS', 'REST APIs'],
  },
  {
    index: '03',
    title: 'Construction Workforce & Job Management Platform',
    region: 'UK',
    blurb:
      'Multi-tenant platform connecting clients, contractors and workers — with real-time chat and an AI assistant.',
    points: [
      'Developed a multi-tenant construction platform connecting clients, contractors and workers in one system.',
      'Enabled users to post jobs, find workers, apply for work, review job details, communicate and manage work through completion.',
      'Built real-time chat and communication features using Socket.IO for direct interaction between clients and workers.',
      'Integrated an AI-powered chatbot to help users navigate the platform, manage tasks and access system features more efficiently.',
      'Implemented SMTP email notifications for important actions, job updates and workflow events.',
      'Added inventory management features to support materials and resources used for construction work.',
      'Supported both web and mobile applications, with a .NET backend and React frontend.',
      'Designed the platform as a tenant-based system, allowing separate organizations to manage their own users, jobs and data securely.',
    ],
    stack: [
      '.NET',
      'React',
      'Socket.IO',
      'SMTP',
      'Multi-Tenant',
      'REST APIs',
      'Mobile Integration',
      'AI Chatbot',
    ],
  },
  {
    index: '04',
    title: 'Inventory & Order Management System',
    blurb: 'Products, stock levels and customer orders across daily business operations.',
    points: [
      'Developed an inventory and order management system to manage products, stock levels, customer orders and daily business operations across the platform.',
      'Implemented structured workflows for order processing, stock updates, inventory tracking and transaction records, ensuring accurate and consistent data management.',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'REST APIs'],
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
  {
    label: 'Certifications',
    value: 'British Council Intermediate English Course — Colombo (Sep — Dec 2019)',
  },
  { label: 'Awards / Achievements', value: 'Emerging Talent Award, Parallax — 2024' },
  { label: 'Based in', value: 'Sri Lanka' },
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
