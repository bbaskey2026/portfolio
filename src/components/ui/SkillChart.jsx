import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMui,
  SiVite,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiPostman,
  SiVisualstudiocode,
  SiLinux,
  SiFigma,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiDocker,
  SiPython,
  SiGo,
  SiAngular,
} from 'react-icons/si';
import { FaJava, FaCode, FaServer } from 'react-icons/fa';

export const SKILL_METADATA = {
  React: { icon: SiReact, tag: 'UI Library', desc: 'Component architecture, hooks & performance' },
  JavaScript: { icon: SiJavascript, tag: 'Core Language', desc: 'ES6+, Async/Await, DOM APIs & events' },
  TypeScript: { icon: SiTypescript, tag: 'Typed JS', desc: 'Type safety, generics & robust interfaces' },
  Angular: { icon: SiAngular, tag: 'Framework', desc: 'Enterprise client architecture & services' },
  'HTML/CSS': { icon: SiHtml5, tag: 'Web Core', desc: 'Semantic HTML5, modern flexbox & grid' },
  'Material-UI': { icon: SiMui, tag: 'Design System', desc: 'Custom design themes & accessible UI' },
  'Material UI': { icon: SiMui, tag: 'Design System', desc: 'Custom design themes & accessible UI' },
  Vite: { icon: SiVite, tag: 'Build Tool', desc: 'Fast HMR & modern ESM bundling' },
  'Tailwind CSS': { icon: SiTailwindcss, tag: 'Styling', desc: 'Utility-first modern styling' },
  'Next.js': { icon: SiNextdotjs, tag: 'Framework', desc: 'Server-side rendering & API routes' },

  Java: { icon: FaJava, tag: 'OOP Language', desc: 'Core Java, Collections, OOP & Streams' },
  'Spring Boot': { icon: SiSpringboot, tag: 'Framework', desc: 'Enterprise microservices, JPA & REST APIs' },
  'Node.js': { icon: SiNodedotjs, tag: 'Runtime', desc: 'Event-driven server architecture & async APIs' },
  Express: { icon: SiExpress, tag: 'Backend Framework', desc: 'Middleware, routing & secure endpoints' },
  Go: { icon: SiGo, tag: 'Backend Language', desc: 'High-concurrency services & Fiber framework' },
  Fiber: { icon: SiGo, tag: 'Web Framework', desc: 'High-performance Go web APIs' },
  PostgreSQL: { icon: SiPostgresql, tag: 'Relational DB', desc: 'Complex queries, indexing & transactions' },
  MongoDB: { icon: SiMongodb, tag: 'NoSQL Database', desc: 'Document schemas, CRUD & aggregations' },
  MySQL: { icon: SiMysql, tag: 'Relational DB', desc: 'Normalized schemas & SQL design' },
  'REST APIs': { icon: FaServer, tag: 'Architecture', desc: 'API architecture, CRUD & integrations' },
  Python: { icon: SiPython, tag: 'Programming', desc: 'Scripting, backend logic & automation' },

  Docker: { icon: SiDocker, tag: 'Containers', desc: 'Containerization, Dockerfile & Compose' },
  Git: { icon: SiGit, tag: 'Version Control', desc: 'Branching, merging & team workflows' },
  Postman: { icon: SiPostman, tag: 'API Testing', desc: 'Endpoint debugging & documentation' },
  'VS Code': { icon: SiVisualstudiocode, tag: 'Development', desc: 'Primary IDE & debugging workflows' },
  Linux: { icon: SiLinux, tag: 'Environment', desc: 'Shell scripting & server management' },
  Figma: { icon: SiFigma, tag: 'UI / UX Design', desc: 'Wireframing & design prototypes' },
};

function SkillChart({ name }) {
  const meta = SKILL_METADATA[name] || { icon: FaCode, tag: 'Skill', desc: 'Full-stack engineering capability' };
  const Icon = meta.icon;

  return (
    <Box
      sx={{
        p: 2.6,
        backgroundColor: '#ffffff',
        border: '1px solid #e5e5e5',
        borderRadius: 2,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2.2,
        transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          borderColor: '#000000',
          transform: 'translateY(-3px)',
          boxShadow: '0 10px 28px rgba(0, 0, 0, 0.05)',
        },
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: 1.5,
          backgroundColor: '#f5f5f5',
          border: '1px solid #e5e5e5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000000',
          flexShrink: 0,
        }}
      >
        <Icon size={24} />
      </Box>

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.8, gap: 1 }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 800,
              color: '#000000',
              fontSize: '1.05rem',
              lineHeight: 1.2,
            }}
          >
            {name}
          </Typography>

          <Chip
            label={meta.tag}
            size="small"
            sx={{
              fontSize: '0.78rem',
              fontWeight: 600,
              height: 22,
              backgroundColor: '#f1f1f1',
              color: '#333333',
              borderRadius: 1,
              border: '1px solid #e5e5e5',
            }}
          />
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: '#555555',
            fontSize: '0.88rem',
            lineHeight: 1.45,
            display: 'block',
          }}
        >
          {meta.desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default SkillChart;
