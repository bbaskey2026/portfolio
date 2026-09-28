import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
  Divider,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';
import { projects, experiences } from '../../store/portfolioData';
import { SITE_CONFIG } from '../../config/constants';
import ProjectCard from '../../components/ui/ProjectCard';
import profileImg from '../../assets/images/profileImage.jpeg';

const skillsList = [
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Node.js',
  'Express',
  'Go',
  'Fiber',
  'Java',
  'Spring Boot',
  'PostgreSQL',
  'MongoDB',
  'Material UI',
  'Docker',
  'REST APIs',
  'Git',
];

const Home = () => {
  const navigate = useNavigate();

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#ffffff',
        color: '#000000',
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
          minHeight: {
            xs: 'auto',
            md: 'calc(90vh - 72px)',
          },
          display: 'flex',
          alignItems: 'center',
          py: {
            xs: 6,
            sm: 8,
            md: 10,
          },
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '1.2fr 0.8fr',
              },
              gap: { xs: 5, md: 8 },
              alignItems: 'center',
            }}
          >
            {/* Hero Left Content */}
            <Box sx={{ maxWidth: '100%', minWidth: 0 }}>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 14 },
                  fontWeight: 800,
                  letterSpacing: { xs: 1.5, sm: 2 },
                  mb: { xs: 2, sm: 3 },
                  color: '#000000',
                  textTransform: 'uppercase',
                }}
              >
                SOFTWARE DEVELOPER
              </Typography>

              <Typography
                component="h1"
                sx={{
                  fontSize: {
                    xs: '2.5rem',
                    sm: '3.8rem',
                    md: '5rem',
                    lg: '5.8rem',
                  },
                  lineHeight: 0.98,
                  fontWeight: 800,
                  letterSpacing: { xs: '-1px', sm: '-2px', md: '-3.5px' },
                  color: '#000000',
                  mb: { xs: 3, md: 4 },
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                Building
                <br />
                things for
                <br />
                the web.
              </Typography>

              <Typography
                sx={{
                  maxWidth: 620,
                  fontSize: {
                    xs: 16,
                    sm: 18,
                    md: 20,
                  },
                  lineHeight: 1.7,
                  color: '#444444',
                  mb: { xs: 3.5, md: 4.5 },
                  wordBreak: 'break-word',
                }}
              >
                I'm {SITE_CONFIG.name}, a software developer working with
                React, Node.js, Java, Spring Boot, Go, PostgreSQL, and modern web
                technologies. I enjoy building practical, scalable
                applications and clean user interfaces.
              </Typography>

              <Stack
                direction={{
                  xs: 'column',
                  sm: 'row',
                }}
                spacing={2}
                sx={{ width: '100%', maxWidth: 450 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/projects')}
                  sx={{
                    bgcolor: '#000000',
                    color: '#ffffff',
                    px: 3.5,
                    py: 1.4,
                    borderRadius: 1,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: '#222222',
                    },
                  }}
                >
                  View Projects
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/contact')}
                  sx={{
                    borderColor: '#000000',
                    color: '#000000',
                    px: 3.5,
                    py: 1.4,
                    borderRadius: 1,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: '#000000',
                      bgcolor: '#f5f5f5',
                    },
                  }}
                >
                  Contact Me
                </Button>

                <Button
                  variant="text"
                  size="large"
                  startIcon={<DownloadIcon sx={{ fontSize: 18 }} />}
                  href={SITE_CONFIG.resumeUrl}
                  sx={{
                    color: '#444444',
                    px: 2.5,
                    py: 1.4,
                    borderRadius: 1,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: '#f5f5f5',
                      color: '#000000',
                    },
                  }}
                >
                  Resume
                </Button>
              </Stack>
            </Box>

            {/* Hero Right: Profile Image */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  width: { xs: 220, sm: 280, md: 350, lg: 390 },
                  height: { xs: 220, sm: 280, md: 350, lg: 390 },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 16px 44px rgba(0, 0, 0, 0.09)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  flexShrink: 0,
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0 20px 52px rgba(0, 0, 0, 0.14)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={profileImg}
                  alt={SITE_CONFIG.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    filter: 'contrast(102%)',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* ── ABOUT SECTION ── */}
      <Box
        component="section"
        id="about"
        sx={{
          py: {
            xs: 6,
            sm: 8,
            md: 12,
          },
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '180px 1fr',
              },
              gap: {
                xs: 2.5,
                md: 8,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: 2,
                color: '#000000',
              }}
            >
              ABOUT
            </Typography>

            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: 22,
                    sm: 28,
                    md: 36,
                  },
                  lineHeight: 1.3,
                  fontWeight: 700,
                  letterSpacing: '-1px',
                  color: '#000000',
                  mb: 3,
                  wordBreak: 'break-word',
                }}
              >
                I build full-stack web applications with a focus on
                clean architecture, APIs and user experience.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 18 },
                  lineHeight: 1.8,
                  color: '#555555',
                  maxWidth: 750,
                  mb: 2.5,
                  wordBreak: 'break-word',
                }}
              >
                My development experience includes React and
                Angular frontend applications, Node.js and Express
                REST APIs, Java and Spring Boot microservices, Golang/Fiber backend services,
                PostgreSQL and MongoDB databases, reporting systems and
                SFTP-based workflows.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 15, sm: 17 },
                  lineHeight: 1.8,
                  color: '#666666',
                  maxWidth: 750,
                  mb: 4,
                  wordBreak: 'break-word',
                }}
              >
                Passionate about writing clean, maintainable code and solving complex real-world problems.
                Constantly learning modern system design patterns, cloud tools, and developer workflows.
              </Typography>

              <Button
                variant="outlined"
                onClick={() => navigate('/about')}
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  borderColor: '#000000',
                  color: '#000000',
                  borderRadius: 1,
                  px: 3,
                  py: 1.1,
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                    borderColor: '#000000',
                  },
                }}
              >
                Read More About Me & Education
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* ── SKILLS SECTION ── */}
      <Box
        component="section"
        id="skills"
        sx={{
          py: {
            xs: 6,
            sm: 8,
            md: 12,
          },
          bgcolor: '#fafafa',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3, md: 4 } }}>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2,
              mb: { xs: 3, md: 5 },
              color: '#000000',
            }}
          >
            SKILLS
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 1, sm: 1.5 },
              maxWidth: 950,
            }}
          >
            {skillsList.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  bgcolor: '#ffffff',
                  color: '#000000',
                  border: '1px solid #cccccc',
                  borderRadius: 1,
                  fontSize: { xs: 13, sm: 15 },
                  fontWeight: 500,
                  px: { xs: 0.8, sm: 1 },
                  py: { xs: 1.8, sm: 2.5 },
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                  '&:hover': {
                    borderColor: '#000000',
                    transform: 'translateY(-2px)',
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* ── EXPERIENCE SECTION ── */}
      <Box
        component="section"
        id="experience"
        sx={{
          py: {
            xs: 6,
            sm: 8,
            md: 12,
          },
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '180px 1fr',
              },
              gap: {
                xs: 2.5,
                md: 8,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: 2,
                color: '#000000',
              }}
            >
              EXPERIENCE
            </Typography>

            <Stack spacing={{ xs: 4, md: 6 }} sx={{ minWidth: 0 }}>
              {experiences.map((exp) => (
                <Box key={exp.id} sx={{ minWidth: 0 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      flexDirection: { xs: 'column', sm: 'row' },
                      mb: 1,
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: '#000000',
                        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                        letterSpacing: '-0.5px',
                        wordBreak: 'break-word',
                      }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#666666',
                        fontSize: { xs: 12, sm: 14 },
                        fontWeight: 600,
                        bgcolor: '#f5f5f5',
                        border: '1px solid #e5e5e5',
                        borderRadius: 1,
                        px: 1.2,
                        py: 0.3,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {exp.period}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: '#444444',
                      fontWeight: 600,
                      fontSize: { xs: '0.95rem', sm: '1.05rem' },
                      mb: 2,
                    }}
                  >
                    {exp.company} · <span style={{ color: '#777777', fontWeight: 400 }}>{exp.location}</span>
                  </Typography>

                  <Box component="ul" sx={{ pl: 2.5, mb: 3 }}>
                    {exp.description.map((item, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{
                          mb: 0.8,
                          color: '#555555',
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          lineHeight: 1.7,
                          wordBreak: 'break-word',
                        }}
                      >
                        {item}
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {exp.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: '#f1f1f1',
                          color: '#000000',
                          border: '1px solid #e5e5e5',
                          borderRadius: 1,
                          fontSize: '0.8rem',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              ))}

              <Box>
                <Button
                  variant="outlined"
                  onClick={() => navigate('/experience')}
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    borderColor: '#000000',
                    color: '#000000',
                    borderRadius: 1,
                    px: 3,
                    py: 1.1,
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: '#f5f5f5',
                      borderColor: '#000000',
                    },
                  }}
                >
                  View Complete Timeline
                </Button>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* ── PROJECTS SECTION ── */}
      <Box
        component="section"
        id="projects"
        sx={{
          py: {
            xs: 6,
            sm: 8,
            md: 12,
          },
          bgcolor: '#fafafa',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: { xs: 3.5, md: 5 },
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: 2,
                color: '#000000',
              }}
            >
              PROJECTS
            </Typography>

            <Button
              variant="outlined"
              onClick={() => navigate('/projects')}
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                borderColor: '#000000',
                color: '#000000',
                borderRadius: 1,
                px: 2.5,
                py: 0.8,
                fontSize: '0.88rem',
                fontWeight: 600,
                bgcolor: '#ffffff',
                '&:hover': {
                  bgcolor: '#f5f5f5',
                  borderColor: '#000000',
                },
              }}
            >
              All Projects & Repositories
            </Button>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: { xs: 2.5, sm: 3, md: 3.5 },
            }}
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* ── CONTACT SECTION ── */}
      <Box
        component="section"
        id="contact"
        sx={{
          py: {
            xs: 8,
            sm: 10,
            md: 15,
          },
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3, md: 4 } }}>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2,
              mb: 3,
              color: '#000000',
            }}
          >
            CONTACT
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: '2.4rem',
                sm: '3.6rem',
                md: '4.8rem',
              },
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: { xs: '-1px', md: '-3px' },
              maxWidth: 800,
              color: '#000000',
              mb: { xs: 3.5, md: 5 },
              wordBreak: 'break-word',
            }}
          >
            Let's build
            <br />
            something.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="flex-start" sx={{ maxWidth: '100%' }}>
            <Button
              variant="contained"
              size="large"
              href={`mailto:${SITE_CONFIG.email}`}
              sx={{
                bgcolor: '#000000',
                color: '#ffffff',
                px: { xs: 3, sm: 4 },
                py: 1.5,
                borderRadius: 1,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 600,
                wordBreak: 'break-all',
                '&:hover': {
                  bgcolor: '#222222',
                },
              }}
            >
              {SITE_CONFIG.email}
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                borderColor: '#000000',
                color: '#000000',
                px: { xs: 3, sm: 3.5 },
                py: 1.5,
                borderRadius: 1,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 600,
                '&:hover': {
                  borderColor: '#000000',
                  bgcolor: '#f5f5f5',
                },
              }}
            >
              Contact Form & Details
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;