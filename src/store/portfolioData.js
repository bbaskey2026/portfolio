export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Includes user authentication, product management, cart functionality, and payment processing with Stripe.',
    image: '',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Project Management Tool',
    description:
      'A collaborative project management application with real-time updates, drag-and-drop task boards, team collaboration features, and detailed analytics dashboards.',
    image: '',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description:
      'An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy using advanced language models.',
    image: '',
    technologies: ['Python', 'FastAPI', 'React', 'OpenAI', 'Docker'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Real-Time Chat Application',
    description:
      'A modern real-time messaging application with group chats, file sharing, video calls, and end-to-end encryption for secure communication.',
    image: '',
    technologies: ['React', 'Firebase', 'WebRTC', 'Material-UI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Fitness Tracking Dashboard',
    description:
      'A comprehensive fitness tracking dashboard with workout logging, progress visualization, meal planning, and integration with wearable devices.',
    image: '',
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Chart.js', 'PWA'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Developer Portfolio CMS',
    description:
      'A headless CMS specifically designed for developer portfolios. Manage projects, blog posts, and resume data through an intuitive admin interface.',
    image: '',
    technologies: ['Next.js', 'Sanity', 'Tailwind', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];

export const skills = {
  frontend: [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 92 },
    { name: 'Material-UI', level: 85 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Redux', level: 82 },
  ],
  backend: [
    { name: 'Node.js', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'Express', level: 88 },
    { name: 'PostgreSQL', level: 82 },
    { name: 'MongoDB', level: 85 },
    { name: 'GraphQL', level: 78 },
    { name: 'REST APIs', level: 92 },
    { name: 'Docker', level: 80 },
  ],
  tools: [
    { name: 'Git', level: 92 },
    { name: 'AWS', level: 78 },
    { name: 'CI/CD', level: 80 },
    { name: 'Figma', level: 75 },
    { name: 'Linux', level: 82 },
    { name: 'Jest', level: 85 },
  ],
};

export const experiences = [
  {
    id: 1,
    role: 'Senior Full-Stack Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    period: 'Jan 2023 — Present',
    description: [
      'Led development of a microservices architecture serving 2M+ daily active users',
      'Mentored a team of 5 junior developers and conducted regular code reviews',
      'Reduced application load time by 40% through performance optimization',
      'Implemented CI/CD pipelines reducing deployment time from hours to minutes',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'Digital Agency Co.',
    location: 'New York, NY',
    period: 'Jun 2021 — Dec 2022',
    description: [
      'Built and maintained 15+ client projects from concept to deployment',
      'Developed reusable component libraries reducing development time by 30%',
      'Integrated third-party APIs including Stripe, Twilio, and SendGrid',
      'Collaborated with designers to implement pixel-perfect, responsive UIs',
    ],
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Vercel'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'StartupHub',
    location: 'Austin, TX',
    period: 'Mar 2019 — May 2021',
    description: [
      'Developed interactive dashboards with real-time data visualization',
      'Migrated legacy jQuery codebase to modern React application',
      'Improved web accessibility achieving WCAG 2.1 AA compliance',
      'Wrote comprehensive unit and integration tests achieving 90% coverage',
    ],
    technologies: ['React', 'Redux', 'D3.js', 'Jest', 'Sass'],
  },
  {
    id: 4,
    role: 'Junior Web Developer',
    company: 'WebWorks Studio',
    location: 'Portland, OR',
    period: 'Aug 2017 — Feb 2019',
    description: [
      'Built responsive websites for local businesses and startups',
      'Gained experience with modern JavaScript frameworks and tools',
      'Participated in agile development processes and sprint planning',
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'PHP', 'WordPress'],
  },
];

export const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'University of California, Berkeley',
    period: '2013 — 2017',
    details: 'Focus on Software Engineering and Algorithms. GPA: 3.8/4.0',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Product Manager at TechCorp',
    text: 'Alex is an exceptional developer who consistently delivers high-quality work. Their ability to translate complex requirements into elegant solutions is remarkable.',
  },
  {
    id: 2,
    name: 'Michael Torres',
    role: 'CTO at Digital Agency Co.',
    text: 'Working with Alex was a pleasure. They brought both technical expertise and creative thinking to every project, always going above and beyond expectations.',
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Design Lead at StartupHub',
    text: 'Alex has an incredible eye for detail and a deep understanding of user experience. They always ensured designs were implemented flawlessly across all devices.',
  },
];