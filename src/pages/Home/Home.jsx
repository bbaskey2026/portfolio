import React from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';
import { projects, experiences, education } from '../../store/portfolioData';
import { SITE_CONFIG } from '../../config/constants';
import ProjectCard from '../../components/ui/ProjectCard';

const SKILL_CATEGORIES = [
  {
    category: 'Languages',
    skills: ['C++', 'JavaScript', 'Python', 'Java', 'TypeScript', 'Go'],
  },
  {
    category: 'Backend',
    skills: ['RESTful APIs', 'Node.js', 'Express.js', 'Spring Boot', 'Fiber (Go)', 'WebSockets'],
  },
  {
    category: 'Frameworks',
    skills: ['React.js', 'Next.js', 'Angular', 'Material-UI', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'SFTP Workflows'],
  },
  {
    category: 'Version control',
    skills: ['Git', 'GitHub', 'CI/CD', 'Docker'],
  },
  {
    category: 'Dev tools',
    skills: ['VS Code', 'Postman', 'Chrome DevTools', 'Curl', 'Linux'],
  },
];

const Home = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <Box
      sx={{
        bgcolor: '#000000',
        color: '#ffffff',
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
      }}
    >
      {/* ── HERO SECTION ── */}
      <Box
        component="section"
        id="hero"
        sx={{
          maxWidth: '1040px',
          margin: '0 auto',
          padding: { xs: '40px 16px 28px', sm: '56px 24px 40px', md: '64px 24px 56px' },
        }}
      >
        <Typography
          sx={{
            color: '#8ec5ff',
            fontSize: { xs: '13px', sm: '14px' },
            marginBottom: '12px',
            fontWeight: 500,
            letterSpacing: '0.01em',
          }}
        >
          Software Engineer at iServeU · {SITE_CONFIG.location}
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontSize: 'clamp(32px, 8vw, 68px)',
            lineHeight: { xs: 1.08, sm: 1.03 },
            letterSpacing: '-.04em',
            fontWeight: 500,
            margin: '0 0 24px',
            maxWidth: '800px',
            color: '#ffffff',
            wordBreak: 'break-word',
          }}
        >
          Building scalable web apps, end to end.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <Typography
            sx={{
              color: '#cfcfcf',
              maxWidth: '520px',
              margin: 0,
              fontSize: { xs: '15px', sm: '16px' },
              lineHeight: 1.6,
            }}
          >
            Skilled in the MERN stack, C++, JavaScript and AI integrations. Passionate about solving real-world problems with user-friendly solutions, and eager to grow as a full-stack developer.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              flexWrap: 'wrap',
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <Button
              variant="contained"
              onClick={() => navigate('/projects')}
              sx={{
                bgcolor: '#ffffff',
                color: '#000000',
                padding: '10px 22px',
                borderRadius: 999,
                fontSize: '15px',
                fontWeight: 500,
                border: '1px solid #ffffff',
                flexGrow: { xs: 1, sm: 0 },
                transition: 'transform .2s',
                '&:hover': {
                  bgcolor: '#ffffff',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              View projects
            </Button>

            <Button
              variant="outlined"
              href={SITE_CONFIG.resumeUrl}
              startIcon={<DownloadIcon sx={{ fontSize: 16 }} />}
              sx={{
                borderColor: '#2a2a2a',
                color: '#cfcfcf',
                padding: '10px 20px',
                borderRadius: 999,
                fontSize: '14px',
                fontWeight: 500,
                flexGrow: { xs: 1, sm: 0 },
                '&:hover': {
                  borderColor: '#3b82f6',
                  color: '#ffffff',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Resume
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ── THE BLUEPRINT STAGE ── */}
      <Box
        sx={{
          bgcolor: '#000000',
          overflow: 'hidden',
          height: { xs: 260, sm: 320, md: 380 },
          position: 'relative',
          width: '100%',
        }}
        aria-hidden="true"
      >
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '16px', sm: '24px' },
            top: { xs: '16px', sm: '24px' },
            fontSize: '12px',
            color: '#6a6a6a',
            zIndex: 2,
          }}
        >
          MERN · REST APIs · AI
        </Box>

        <svg
          viewBox="0 0 1000 380"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
          style={{ position: 'absolute', inset: 0 }}
        >
          <defs>
            <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="#222" strokeWidth="1" />
            </pattern>
            <radialGradient id="r" cx=".7" cy=".4" r=".6">
              <stop offset="0" stopColor="#3b82f6" stopOpacity=".28" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1000" height="380" fill="#000" />
          <rect width="1000" height="380" fill="url(#g)" />
          <rect width="1000" height="380" fill="url(#r)" />

          <g transform="translate(430 60)">
            <rect width="460" height="260" rx="20" fill="#151515" stroke="#2e2e2e" />
            <circle cx="28" cy="26" r="6" fill="#444" />
            <circle cx="50" cy="26" r="6" fill="#444" />
            <circle cx="72" cy="26" r="6" fill="#444" />
            <g fill="#3b82f6">
              <rect x="32" y="62" width="70" height="10" rx="5" />
              <rect x="56" y="122" width="90" height="10" rx="5" />
              <rect x="56" y="182" width="60" height="10" rx="5" />
            </g>
            <g fill="#8ec5ff">
              <rect x="116" y="62" width="130" height="10" rx="5" />
              <rect x="160" y="122" width="140" height="10" rx="5" />
              <rect x="130" y="182" width="170" height="10" rx="5" />
            </g>
            <g fill="#3a3a3a">
              <rect x="56" y="92" width="200" height="10" rx="5" />
              <rect x="56" y="152" width="120" height="10" rx="5" />
              <rect x="32" y="212" width="150" height="10" rx="5" />
            </g>
          </g>

          <g fontFamily="Menlo,Consolas,monospace" fill="#3b82f6">
            <text x="60" y="200" fontSize="120" opacity=".9">
              &lt;/&gt;
            </text>
            <text x="90" y="300" fontSize="60" fill="#8ec5ff" opacity=".6">
              &#123; &#125;
            </text>
          </g>

          <g stroke="#3b82f6" strokeOpacity=".5" fill="none">
            <path d="M60 330 L200 270 L330 320 L430 250" />
            <path d="M200 270 L260 110" />
          </g>
          <g fill="#8ec5ff">
            <circle cx="60" cy="330" r="5" />
            <circle cx="200" cy="270" r="5" />
            <circle cx="330" cy="320" r="5" />
            <circle cx="260" cy="110" r="5" />
          </g>
        </svg>
      </Box>

      {/* ── MAIN CONTENT WRAPPER ── */}
      <Box sx={{ maxWidth: '1040px', margin: '0 auto', padding: { xs: '0 16px', sm: '0 24px' } }}>
        {/* ── PROJECTS / FEATURED WORK ── */}
        <Box component="section" id="work" sx={{ padding: { xs: '48px 0', md: '72px 0' } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: '28px', flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Typography sx={{ color: '#8ec5ff', fontSize: '14px', marginBottom: '8px' }}>
                Projects
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: 'clamp(26px, 5vw, 44px)',
                  letterSpacing: '-.03em',
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Featured work
              </Typography>
            </Box>

            <Button
              variant="text"
              onClick={() => navigate('/projects')}
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                color: '#8ec5ff',
                fontSize: '14px',
                p: 0,
                '&:hover': { color: '#ffffff', textDecoration: 'underline' },
              }}
            >
              All projects
            </Button>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: { xs: '20px', md: '36px' },
            }}
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </Box>
        </Box>

        {/* ── SKILLS / TECHNICAL TOOLKIT ── */}
        <Box component="section" id="skills" sx={{ padding: { xs: '48px 0', md: '72px 0' } }}>
          <Typography sx={{ color: '#8ec5ff', fontSize: '14px', marginBottom: '8px' }}>
            Skills
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: 'clamp(26px, 5vw, 44px)',
              letterSpacing: '-.03em',
              fontWeight: 500,
              margin: '0 0 28px',
            }}
          >
            Technical toolkit
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: '20px',
            }}
          >
            {SKILL_CATEGORIES.map((cat) => (
              <Box
                key={cat.category}
                sx={{
                  background: 'transparent',
                  border: 0,
                  borderTop: '1px solid #2a2a2a',
                  borderRadius: 0,
                  padding: '20px 0',
                  transition: 'border-top-color 0.25s ease',
                  '&:hover': {
                    borderTopColor: '#3b82f6',
                  },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    margin: '0 0 8px',
                    fontWeight: 500,
                    fontSize: '16px',
                    color: '#8ec5ff',
                  }}
                >
                  {cat.category}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', mt: '12px' }}>
                  {cat.skills.map((s) => (
                    <Box
                      key={s}
                      component="span"
                      sx={{
                        border: '1px solid #2a2a2a',
                        borderRadius: 999,
                        padding: '5px 12px',
                        fontSize: '13px',
                        color: '#dddddd',
                        display: 'inline-block',
                      }}
                    >
                      {s}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── EXPERIENCE / WHERE I’VE WORKED ── */}
        <Box component="section" id="experience" sx={{ padding: { xs: '48px 0', md: '72px 0' } }}>
          <Typography sx={{ color: '#8ec5ff', fontSize: '14px', marginBottom: '8px' }}>
            Experience
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: 'clamp(26px, 5vw, 44px)',
              letterSpacing: '-.03em',
              fontWeight: 500,
              margin: '0 0 28px',
            }}
          >
            Where I’ve worked
          </Typography>

          <Stack spacing="32px">
            {experiences.map((exp) => (
              <Box
                key={exp.id}
                sx={{
                  borderLeft: '1px solid #2a2a2a',
                  paddingLeft: { xs: '16px', sm: '24px' },
                  marginLeft: '4px',
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    margin: 0,
                    fontWeight: 500,
                    fontSize: { xs: '19px', sm: '22px' },
                    color: '#ffffff',
                    wordBreak: 'break-word',
                  }}
                >
                  {exp.role} <span style={{ color: '#9a9a9a', fontWeight: 400 }}>· {exp.company}</span>
                </Typography>

                <Typography
                  sx={{
                    color: '#8ec5ff',
                    fontSize: '14px',
                    margin: '4px 0 12px',
                  }}
                >
                  {exp.period} · {exp.location}
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    margin: 0,
                    paddingLeft: '18px',
                    color: '#cfcfcf',
                  }}
                >
                  {exp.description.map((item, idx) => (
                    <Box
                      component="li"
                      key={idx}
                      sx={{
                        marginBottom: '8px',
                        fontSize: { xs: '14px', sm: '15px' },
                        lineHeight: 1.6,
                        wordBreak: 'break-word',
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', mt: '12px' }}>
                  {exp.technologies.map((t) => (
                    <Box
                      key={t}
                      component="span"
                      sx={{
                        border: '1px solid #2a2a2a',
                        borderRadius: 999,
                        padding: '4px 12px',
                        fontSize: '12px',
                        color: '#cfcfcf',
                      }}
                    >
                      {t}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* ── EDUCATION / LEARNING PATH ── */}
        <Box component="section" id="education" sx={{ padding: { xs: '48px 0', md: '72px 0' } }}>
          <Typography sx={{ color: '#8ec5ff', fontSize: '14px', marginBottom: '8px' }}>
            Education
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: 'clamp(26px, 5vw, 44px)',
              letterSpacing: '-.03em',
              fontWeight: 500,
              margin: '0 0 28px',
            }}
          >
            Learning path
          </Typography>

          <Box>
            {education.map((edu) => (
              <Box
                key={edu.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '12px',
                  padding: '16px 0',
                  borderBottom: '1px solid #2a2a2a',
                  flexWrap: 'wrap',
                }}
              >
                <Box sx={{ minWidth: { xs: '100%', sm: 'auto' } }}>
                  <Typography component="b" sx={{ fontWeight: 500, color: '#ffffff', fontSize: '16px', display: 'block' }}>
                    {edu.institution}
                  </Typography>
                  <Typography component="span" sx={{ color: '#9a9a9a', fontSize: '14px' }}>
                    {edu.degree} — {edu.field}
                  </Typography>
                </Box>
                <Typography component="span" sx={{ color: '#9a9a9a', fontSize: '14px' }}>
                  {edu.period}
                </Typography>
              </Box>
            ))}

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
              <Box
                component="span"
                sx={{
                  border: '1px solid #2a2a2a',
                  borderRadius: 999,
                  padding: '5px 12px',
                  fontSize: '13px',
                  color: '#dddddd',
                  wordBreak: 'break-word',
                }}
              >
                Data Structures &amp; Algorithms — Udemy (Abdul Bari)
              </Box>
              <Box
                component="span"
                sx={{
                  border: '1px solid #2a2a2a',
                  borderRadius: 999,
                  padding: '5px 12px',
                  fontSize: '13px',
                  color: '#dddddd',
                  wordBreak: 'break-word',
                }}
              >
                MERN-STACK — 30dayscoding
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ── CALL TO ACTION (.cta) ── */}
        <Box
          component="section"
          id="contact"
          sx={{
            background: 'transparent',
            color: '#ffffff',
            borderRadius: 0,
            borderTop: '1px solid #2a2a2a',
            padding: { xs: '44px 0', sm: '56px 0' },
            textAlign: 'center',
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: 'clamp(26px, 5vw, 44px)',
              letterSpacing: '-.03em',
              fontWeight: 500,
              margin: '0 0 12px',
            }}
          >
            Let’s work together.
          </Typography>

          <Typography
            sx={{
              margin: '0 0 24px',
              color: '#cfcfcf',
              fontSize: { xs: '15px', sm: '16px' },
            }}
          >
            Open to internships and full-time software roles.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <Box
              component="a"
              href={`mailto:${SITE_CONFIG.email}`}
              sx={{
                display: 'inline-block',
                background: '#ffffff',
                color: '#000000',
                padding: '10px 22px',
                borderRadius: 999,
                fontSize: { xs: '14px', sm: '15px' },
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'transform .2s',
                overflowWrap: 'anywhere',
                wordBreak: 'break-all',
                maxWidth: '100%',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {SITE_CONFIG.email}
            </Box>

            <Box
              component="a"
              href={`tel:${SITE_CONFIG.phone}`}
              sx={{
                display: 'inline-block',
                background: '#ffffff',
                color: '#000000',
                padding: '10px 22px',
                borderRadius: 999,
                fontSize: { xs: '14px', sm: '15px' },
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'transform .2s',
                overflowWrap: 'anywhere',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {SITE_CONFIG.phone}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
