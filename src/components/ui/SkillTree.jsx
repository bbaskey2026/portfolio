import React, { useState } from 'react';
import {
  Box,
  Typography,
  Chip,
  Stack,
  Button,
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
  FaCodeBranch,
} from 'react-icons/fa';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const TREE_DATA = [
  {
    id: 'backend',
    domain: 'Backend Engineering & Services',
    icon: <FaServer size={20} />,
    description: 'Server architecture, REST microservices, concurrency & secure business APIs',
    color: '#000000',
    branches: [
      {
        name: 'Languages & Runtimes',
        skills: [
          { name: 'Java', icon: <FaJava size={20} />, tag: 'OOP Core', desc: 'Object-oriented programming, Collections & Streams' },
          { name: 'Node.js', icon: <SiNodedotjs size={20} />, tag: 'Runtime', desc: 'Asynchronous event loop & non-blocking server I/O' },
          { name: 'Go (Golang)', icon: <SiGo size={20} />, tag: 'Systems', desc: 'High concurrency, routines & compiled microservices' },
        ],
      },
      {
        name: 'Frameworks & API Engines',
        skills: [
          { name: 'Spring Boot', icon: <SiSpringboot size={20} />, tag: 'Enterprise', desc: 'REST controllers, Spring Security, JPA & Hibernate' },
          { name: 'Express.js', icon: <SiExpress size={20} />, tag: 'Web Framework', desc: 'Lightweight routing, middleware & API endpoints' },
          { name: 'Fiber (Go)', icon: <SiGo size={20} />, tag: 'Go Framework', desc: 'Ultra-fast HTTP server built on Fasthttp' },
          { name: 'REST APIs', icon: <FaServer size={20} />, tag: 'Architecture', desc: 'API versioning, CRUD operations & JSON contracts' },
        ],
      },
      {
        name: 'Enterprise Integrations',
        skills: [
          { name: 'SFTP Workflows', icon: <FaLayerGroup size={20} />, tag: 'File Transfer', desc: 'Secure scheduled batch transfers & automated pipelines' },
          { name: 'JWT & Auth', icon: <FaTools size={20} />, tag: 'Security', desc: 'Stateless session tokens & role-based access' },
        ],
      },
    ],
  },
  {
    id: 'frontend',
    domain: 'Frontend Architecture & UI',
    icon: <FaLayerGroup size={20} />,
    description: 'Modular component ecosystems, state management & reactive web interfaces',
    color: '#000000',
    branches: [
      {
        name: 'Core Libraries & Frameworks',
        skills: [
          { name: 'React', icon: <SiReact size={20} />, tag: 'UI Library', desc: 'Hooks, custom components & virtual DOM rendering' },
          { name: 'Angular', icon: <SiAngular size={20} />, tag: 'Framework', desc: 'Component architecture, dependency injection & services' },
          { name: 'Next.js', icon: <SiNextdotjs size={20} />, tag: 'Full-Stack UI', desc: 'Server-side rendering, routing & static optimization' },
        ],
      },
      {
        name: 'Languages & Web Standards',
        skills: [
          { name: 'TypeScript', icon: <SiTypescript size={20} />, tag: 'Type Safety', desc: 'Interfaces, type definitions & robust refactoring' },
          { name: 'JavaScript (ES6+)', icon: <SiJavascript size={20} />, tag: 'Language', desc: 'Modern async/await, closures & DOM manipulation' },
          { name: 'HTML5 & CSS3', icon: <SiHtml5 size={20} />, tag: 'Markup', desc: 'Semantic layouts, Flexbox, Grid & responsive design' },
        ],
      },
      {
        name: 'Design Systems & Tooling',
        skills: [
          { name: 'Material UI (MUI)', icon: <SiMui size={20} />, tag: 'Design System', desc: 'Custom themes, tokens & accessible component kit' },
          { name: 'Tailwind CSS', icon: <SiTailwindcss size={20} />, tag: 'Utility Styling', desc: 'Fast utility classes & design token compilation' },
          { name: 'Vite', icon: <SiVite size={20} />, tag: 'Build Tool', desc: 'Lightning-fast HMR & modern ESM bundler' },
        ],
      },
    ],
  },
  {
    id: 'database-devops',
    domain: 'Databases, DevOps & Tools',
    icon: <FaDatabase size={20} />,
    description: 'Data persistence, container orchestration, debugging & developer workflows',
    color: '#000000',
    branches: [
      {
        name: 'Databases & Storage',
        skills: [
          { name: 'PostgreSQL', icon: <SiPostgresql size={20} />, tag: 'Relational DB', desc: 'ACID transactions, relational schema & complex SQL queries' },
          { name: 'MongoDB', icon: <SiMongodb size={20} />, tag: 'NoSQL DB', desc: 'Document schemas, BSON indexing & aggregation pipelines' },
          { name: 'MySQL', icon: <SiMysql size={20} />, tag: 'Relational DB', desc: 'Table normalization, foreign keys & query optimization' },
        ],
      },
      {
        name: 'DevOps & Containers',
        skills: [
          { name: 'Docker', icon: <SiDocker size={20} />, tag: 'Containers', desc: 'Dockerfiles, multi-stage builds & containerized services' },
          { name: 'Linux', icon: <SiLinux size={20} />, tag: 'OS / CLI', desc: 'Bash scripting, permissions, SSH & server environments' },
        ],
      },
      {
        name: 'Development & Testing',
        skills: [
          { name: 'Git & GitHub', icon: <SiGit size={20} />, tag: 'VCS', desc: 'Branching strategies, code reviews & pull requests' },
          { name: 'Postman', icon: <SiPostman size={20} />, tag: 'API Tool', desc: 'Automated test suites & mock API environments' },
          { name: 'VS Code', icon: <SiVisualstudiocode size={20} />, tag: 'Editor', desc: 'Debugging, extensions & full-stack workspace' },
          { name: 'Figma', icon: <SiFigma size={20} />, tag: 'Design', desc: 'UI prototyping, layouts & developer handoff' },
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
    <Box sx={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      {/* Interactive Domain Filter Tabs */}
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        gap={1}
        sx={{ mb: { xs: 4, md: 6 }, width: '100%' }}
      >
        <Button
          variant={activeDomain === 'all' ? 'contained' : 'outlined'}
          onClick={() => setActiveDomain('all')}
          startIcon={<AccountTreeIcon sx={{ fontSize: 18 }} />}
          sx={{
            borderRadius: 1,
            px: { xs: 2, md: 2.5 },
            py: 1,
            fontWeight: 700,
            fontSize: { xs: '0.82rem', sm: '0.9rem' },
            ...(activeDomain === 'all'
              ? { bgcolor: '#000000', color: '#ffffff' }
              : { borderColor: '#e5e5e5', color: '#000000', bgcolor: '#ffffff' }),
          }}
        >
          All Domains
        </Button>

        {TREE_DATA.map((tree) => (
          <Button
            key={tree.id}
            variant={activeDomain === tree.id ? 'contained' : 'outlined'}
            onClick={() => setActiveDomain(tree.id)}
            sx={{
              borderRadius: 1,
              px: { xs: 1.8, md: 2.5 },
              py: 1,
              fontWeight: 600,
              fontSize: { xs: '0.82rem', sm: '0.9rem' },
              ...(activeDomain === tree.id
                ? { bgcolor: '#000000', color: '#ffffff' }
                : { borderColor: '#e5e5e5', color: '#555555', bgcolor: '#ffffff' }),
            }}
          >
            {tree.domain.split('&')[0].trim()}
          </Button>
        ))}
      </Stack>

      {/* Tree Structures List */}
      <Stack spacing={{ xs: 4, md: 6 }} sx={{ width: '100%', maxWidth: '100%' }}>
        {displayedTrees.map((tree) => (
          <Box
            key={tree.id}
            sx={{
              p: { xs: 2.2, sm: 3.5, md: 4.5 },
              bgcolor: '#ffffff',
              border: '1px solid #e5e5e5',
              borderRadius: 2,
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)',
              position: 'relative',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            {/* 1. DOMAIN TRUNK / ROOT NODE */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: { xs: 1.5, sm: 2 },
                p: { xs: 1.5, sm: 2 },
                pr: { xs: 2, sm: 3.5 },
                bgcolor: '#000000',
                color: '#ffffff',
                borderRadius: 1.5,
                mb: { xs: 3, md: 4 },
                maxWidth: '100%',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              }}
            >
              <Box
                sx={{
                  width: { xs: 36, sm: 44 },
                  height: { xs: 36, sm: 44 },
                  borderRadius: 1,
                  bgcolor: '#ffffff',
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {tree.icon}
              </Box>

              <Box sx={{ minWidth: 0 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: 1.2,
                    color: '#a1a1a1',
                    textTransform: 'uppercase',
                    display: 'block',
                  }}
                >
                  DOMAIN ROOT
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.35rem' },
                    letterSpacing: '-0.5px',
                    wordBreak: 'break-word',
                  }}
                >
                  {tree.domain}
                </Typography>
              </Box>
            </Box>

            {/* Tree Branch Canvas / Connecting Layout */}
            <Box sx={{ position: 'relative', pl: { xs: 0, sm: 2.5, md: 3.5 }, width: '100%' }}>
              {/* Vertical Domain Trunk Line on sm+ screens */}
              <Box
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  position: 'absolute',
                  left: { sm: '6px', md: '12px' },
                  top: 0,
                  bottom: '30px',
                  width: '2px',
                  bgcolor: '#000000',
                  zIndex: 1,
                }}
              />

              {/* 2. SUB-BRANCHES */}
              <Stack spacing={{ xs: 3.5, md: 4.5 }} sx={{ width: '100%' }}>
                {tree.branches.map((branch) => (
                  <Box
                    key={branch.name}
                    sx={{
                      position: 'relative',
                      pl: { xs: 0, sm: 2.5, md: 3.5 },
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                  >
                    {/* Horizontal Connector Line on sm+ screens */}
                    <Box
                      sx={{
                        display: { xs: 'none', sm: 'block' },
                        position: 'absolute',
                        left: { sm: '-14px', md: '-16px' },
                        top: '18px',
                        width: { sm: '20px', md: '28px' },
                        height: '2px',
                        bgcolor: '#000000',
                        zIndex: 1,
                      }}
                    />

                    {/* Branch Header Tag */}
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        px: { xs: 1.8, sm: 2.2 },
                        py: 0.8,
                        bgcolor: '#f5f5f5',
                        border: '1px solid #d4d4d4',
                        borderRadius: 1.5,
                        mb: 2.5,
                        maxWidth: '100%',
                        flexWrap: 'wrap',
                      }}
                    >
                      <FaCodeBranch size={12} color="#000000" />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: '0.85rem', sm: '0.92rem' },
                          color: '#000000',
                          letterSpacing: '-0.2px',
                        }}
                      >
                        {branch.name}
                      </Typography>
                      <Chip
                        label={`${branch.skills.length}`}
                        size="small"
                        sx={{
                          height: 18,
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          bgcolor: '#ffffff',
                          color: '#000000',
                          border: '1px solid #e5e5e5',
                          borderRadius: 1,
                        }}
                      />
                    </Box>

                    {/* 3. LEAF SKILL NODES (GRID) */}
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                          xs: '1fr',
                          sm: 'repeat(2, 1fr)',
                          lg: 'repeat(2, 1fr)',
                        },
                        gap: 2,
                        width: '100%',
                      }}
                    >
                      {branch.skills.map((skill) => (
                        <Box
                          key={skill.name}
                          sx={{
                            p: { xs: 2, sm: 2.4 },
                            bgcolor: '#ffffff',
                            border: '1px solid #e5e5e5',
                            borderRadius: 1.5,
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 1.8,
                            transition: 'all 0.2s ease',
                            width: '100%',
                            boxSizing: 'border-box',
                            overflow: 'hidden',
                            '&:hover': {
                              borderColor: '#000000',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                            },
                          }}
                        >
                          {/* Skill Node Icon */}
                          <Box
                            sx={{
                              width: { xs: 38, sm: 42 },
                              height: { xs: 38, sm: 42 },
                              borderRadius: 1,
                              bgcolor: '#f5f5f5',
                              border: '1px solid #e5e5e5',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#000000',
                              flexShrink: 0,
                            }}
                          >
                            {skill.icon}
                          </Box>

                          {/* Skill Info */}
                          <Box sx={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                mb: 0.5,
                                gap: 0.8,
                                flexWrap: 'wrap',
                              }}
                            >
                              <Typography
                                variant="body1"
                                sx={{
                                  fontWeight: 800,
                                  color: '#000000',
                                  fontSize: { xs: '0.92rem', sm: '0.98rem' },
                                  letterSpacing: '-0.3px',
                                  wordBreak: 'break-word',
                                }}
                              >
                                {skill.name}
                              </Typography>
                              <Chip
                                label={skill.tag}
                                size="small"
                                sx={{
                                  height: 20,
                                  fontSize: '0.7rem',
                                  fontWeight: 600,
                                  bgcolor: '#f1f1f1',
                                  color: '#444444',
                                  borderRadius: 1,
                                  border: '1px solid #e5e5e5',
                                }}
                              />
                            </Box>

                            <Typography
                              variant="body2"
                              sx={{
                                color: '#555555',
                                fontSize: { xs: '0.8rem', sm: '0.84rem' },
                                lineHeight: 1.45,
                                wordBreak: 'break-word',
                              }}
                            >
                              {skill.desc}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default SkillTree;
