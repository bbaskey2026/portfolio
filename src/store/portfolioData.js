import vssutImage from '../assets/images/bhisut.png';
import fakirMohanImage from '../assets/images/vssut.png';

export const projects = [
  {
    id: 1,
    title: 'Student Management Portal',
    description:
      'A Java and Spring Boot based academic project for managing students, courses, and attendance efficiently with a clean backend structure.',
    image: '',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Tracker Dashboard',
    description:
      'A personal productivity app built with React and Node.js to organize daily tasks, track progress, and manage simple workflows.',
    image: '',
    technologies: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    featured: true,
  },
  {
    id: 3,
    title: 'Blogging Platform API',
    description:
      'A backend-focused project using Spring Boot to create secure APIs for posts, comments, and user authentication.',
    image: '',
    technologies: ['Spring Boot', 'JWT', 'MySQL', 'Java'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    featured: true,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio built with React and Material UI to showcase projects, education, and contact information.',
    image: '',
    technologies: ['React', 'Material UI', 'JavaScript', 'Vite'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    featured: false,
  },
  {
    id: 5,
    title: 'Mini E-Commerce App',
    description:
      'A beginner-level MERN stack project that demonstrates CRUD operations, routing, and a simple shopping experience.',
    image: '',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    featured: false,
  },
  {
    id: 6,
    title: 'Learning Tracker',
    description:
      'A small web app to track study hours, topics covered, and goals while practicing full-stack development fundamentals.',
    image: '',
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    featured: false,
  },
];

export const skills = {
  frontend: [
    { name: 'React', level: 72 },
    { name: 'JavaScript', level: 78 },
    { name: 'HTML/CSS', level: 74 },
    { name: 'Material-UI', level: 70 },
    { name: 'Vite', level: 68 },
  ],
  backend: [
    { name: 'Java', level: 76 },
    { name: 'Spring Boot', level: 72 },
    { name: 'Node.js', level: 70 },
    { name: 'Express', level: 68 },
    { name: 'MongoDB', level: 66 },
    { name: 'MySQL', level: 64 },
    { name: 'REST APIs', level: 74 },
  ],
  tools: [
    { name: 'Git', level: 72 },
    { name: 'Postman', level: 70 },
    { name: 'VS Code', level: 76 },
    { name: 'Linux', level: 62 },
    { name: 'Figma', level: 58 },
  ],
};

export const experiences = [
  {
    id: 1,
    role: 'Student Developer',
    company: 'VSSUT',
    location: 'Bhubaneswar, Odisha',
    period: '2022 — Present',
    description: [
      'Building academic and personal projects in Java, Spring Boot, and the MERN stack',
      'Learning backend architecture, REST APIs, and database integration',
      'Improving problem-solving and software engineering fundamentals through coursework',
      'Exploring full-stack development by creating practical web applications',
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    role: 'Self-Learning Developer',
    company: 'Independent Projects',
    location: 'Remote',
    period: '2023 — Present',
    description: [
      'Practiced frontend development with React and Material UI',
      'Built small backend services and REST APIs for learning purposes',
      'Developed portfolio and project management apps to strengthen full-stack skills',
      'Continuously improving through hands-on implementation and debugging',
    ],
    technologies: ['JavaScript', 'React', 'Express', 'MongoDB', 'Git'],
  },
];
export const education = [
  {
    degree: 'Bachelor of Technology – Electrical and Electronics Engineering',
    school: 'Veer Surendra Sai University of Technology (VSSUT), Burla, Odisha',
    period: '2022 — 2026',

    points: [
      'Currently pursuing B.Tech in Electrical & Electronics Engineering.',
      'CGPA: 8.xx / 10 (replace with your CGPA).',
      'Built projects using React, Node.js, Java, Spring Boot and Golang.',
      'Actively learning Data Structures, System Design and Backend Engineering.'
    ],

    skills: [
      'React',
      'Node.js',
      'Java',
      'Spring Boot',
      'Go',
      'SQL',
      'Git'
    ],

    image: vssutImage
  },

  {
    degree: 'Higher Secondary Education',
    school: 'Fakir Mohan Higher Secondary School',
    period: '2020 — 2022',

    points: [
      'Completed Higher Secondary in Science.',
      'Developed interest in programming and software development.',
      'Built a strong foundation in Mathematics and Physics.'
    ],

    skills: [
      'Mathematics',
      'Physics',
      'Chemistry'
    ],

    image: fakirMohanImage
  }
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