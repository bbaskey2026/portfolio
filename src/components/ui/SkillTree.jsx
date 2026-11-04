import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
} from '@mui/material';
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
import {
  FaJava,
  FaServer,
  FaLayerGroup,
  FaDatabase,
  FaTools,
} from 'react-icons/fa';

const TREE_DATA = [
  {
    id: 'backend',
    domain: 'Backend Engineering',
    branches: [
      {
        name: 'Languages & Runtimes',
        skills: [
          { name: 'Java', tag: 'Core', desc: 'OOP, Collections & Streams' },
          { name: 'Node.js', tag: 'Runtime', desc: 'Asynchronous event loop & non-blocking I/O' },
          { name: 'Go (Golang)', tag: 'Systems', desc: 'High concurrency & microservices' },
        ],
      },
      {
        name: 'Frameworks & APIs',
        skills: [
          { name: 'Spring Boot', tag: 'Enterprise', desc: 'REST, JPA & Hibernate' },
          { name: 'Express.js', tag: 'Framework', desc: 'Routing, middleware & API endpoints' },
          { name: 'Fiber (Go)', tag: 'Go Web', desc: 'High-performance HTTP server' },
          { name: 'REST APIs', tag: 'Architecture', desc: 'CRUD, versioning & JSON contracts' },
        ],
      },
      {
        name: 'Integrations',
        skills: [
          { name: 'SFTP Workflows', tag: 'Pipelines', desc: 'Automated batch file transfers' },
          { name: 'JWT & Auth', tag: 'Security', desc: 'Stateless session tokens & RBAC' },
        ],
      },
    ],
  },
  {
    id: 'frontend',
    domain: 'Frontend & UI',
    branches: [
      {
        name: 'Libraries & Frameworks',
        skills: [
          { name: 'React', tag: 'UI', desc: 'Hooks, state management & virtual DOM' },
          { name: 'Angular', tag: 'Framework', desc: 'Components & services architecture' },
          { name: 'Next.js', tag: 'SSR', desc: 'Server rendering & static generation' },
        ],
      },
      {
        name: 'Languages & Markup',
        skills: [
          { name: 'TypeScript', tag: 'Types', desc: 'Static types & interfaces' },
          { name: 'JavaScript', tag: 'Language', desc: 'ES6+, async/await & DOM' },
          { name: 'HTML5 & CSS3', tag: 'Web', desc: 'Flexbox, Grid & responsive design' },
        ],
      },
      {
        name: 'Design & Tooling',
        skills: [
          { name: 'Material UI', tag: 'Design System', desc: 'Accessible components & theming' },
          { name: 'Tailwind CSS', tag: 'Styling', desc: 'Utility classes & rapid UI' },
          { name: 'Vite', tag: 'Build', desc: 'Fast HMR & modern bundling' },
        ],
      },
    ],
  },
  {
    id: 'database-devops',
    domain: 'Databases & Tools',
    branches: [
      {
        name: 'Databases',
        skills: [
          { name: 'PostgreSQL', tag: 'SQL', desc: 'Transactions, indexing & queries' },
          { name: 'MongoDB', tag: 'NoSQL', desc: 'Document schemas & aggregations' },
          { name: 'MySQL', tag: 'SQL', desc: 'Relational schemas & normalization' },
        ],
      },
      {
        name: 'DevOps & Testing',
        skills: [
          { name: 'Git & GitHub', tag: 'VCS', desc: 'Branching, PRs & collaboration' },
          { name: 'Docker', tag: 'Containers', desc: 'Dockerfiles & containerized apps' },
          { name: 'Postman', tag: 'API Tool', desc: 'Endpoint debugging & tests' },
          { name: 'VS Code & Linux', tag: 'Environment', desc: 'Shell scripting & development' },
        ],
      },
    ],
  },
];

const SkillTree = () => {
  const [activeDomain, setActiveDomain] = useState('all');

  const displayedTrees = activeDomain === 'all'
    ? TREE_DATA
    : TREE_DATA.filter((d) => d.id === activeDomain);

  return (
    <Box sx={{ width: '100%' }}>
      {/* Interactive Domain Filter Tabs */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          mb: '32px',
        }}
      >
        <Box
          component="button"
          onClick={() => setActiveDomain('all')}
          sx={{
            background: activeDomain === 'all' ? '#ffffff' : 'transparent',
            color: activeDomain === 'all' ? '#000000' : '#dddddd',
            border: '1px solid',
            borderColor: activeDomain === 'all' ? '#ffffff' : '#2a2a2a',
            borderRadius: 999,
            padding: '6px 16px',
            fontSize: '13px',
            fontFamily: 'inherit',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          All Domains
        </Box>

        {TREE_DATA.map((tree) => (
          <Box
            key={tree.id}
            component="button"
            onClick={() => setActiveDomain(tree.id)}
            sx={{
              background: activeDomain === tree.id ? '#ffffff' : 'transparent',
              color: activeDomain === tree.id ? '#000000' : '#dddddd',
              border: '1px solid',
              borderColor: activeDomain === tree.id ? '#ffffff' : '#2a2a2a',
              borderRadius: 999,
              padding: '6px 16px',
              fontSize: '13px',
              fontFamily: 'inherit',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {tree.domain}
          </Box>
        ))}
      </Box>

      {/* Plain Tree Structure */}
      <Stack spacing="40px">
        {displayedTrees.map((tree) => (
          <Box
            key={tree.id}
            sx={{
              borderTop: '1px solid #2a2a2a',
              paddingTop: '28px',
            }}
          >
            <Typography
              component="h3"
              sx={{
                fontSize: '20px',
                fontWeight: 500,
                color: '#ffffff',
                mb: '20px',
              }}
            >
              {tree.domain}
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: '24px',
              }}
            >
              {tree.branches.map((branch) => (
                <Box key={branch.name}>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#8ec5ff',
                      fontWeight: 500,
                      mb: '12px',
                    }}
                  >
                    {branch.name}
                  </Typography>

                  <Stack spacing="10px">
                    {branch.skills.map((skill) => (
                      <Box key={skill.name}>
                        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                          <Typography
                            component="span"
                            sx={{
                              color: '#ffffff',
                              fontSize: '15px',
                              fontWeight: 500,
                            }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              color: '#6a6a6a',
                              fontSize: '12px',
                            }}
                          >
                            ({skill.tag})
                          </Typography>
                        </Box>
                        <Typography sx={{ color: '#9a9a9a', fontSize: '13px', lineHeight: 1.4 }}>
                          {skill.desc}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default SkillTree;
