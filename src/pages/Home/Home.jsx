import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Chip,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';
import SocialLinks from '../../components/ui/SocialLinks';
import ProjectCard from '../../components/ui/ProjectCard';
import SectionTitle from '../../components/common/SectionTitle';
import { projects } from '../../store/portfolioData';
import { SITE_CONFIG } from '../../config/constants';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import profileImg from '../../assets/images/profileImage.jpeg';

const Home = () => {
  const navigate = useNavigate();
  const [projectsRef, projectsVisible] = useIntersectionObserver();

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Box sx={{ backgroundColor: '#000000', color: '#ededed' }}>
      {/* ── Hero Section ── */}
      <Box
        sx={{
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#000000',
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.15), transparent 70%),
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <Grid container spacing={6} alignItems="center">
            {/* Left — Text */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  animation: 'fadeInUp 0.6s ease',
                  '@keyframes fadeInUp': {
                    from: { opacity: 0, transform: 'translateY(24px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                <Chip
                  label="✨ Open to internships & entry-level opportunities"
                  sx={{
                    mb: 3,
                    borderRadius: '20px',
                    border: '1px solid #262626',
                    backgroundColor: '#111111',
                    color: '#ededed',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    px: 0.5,
                  }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    mb: 3,
                    color: '#ffffff',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.12,
                  }}
                >
                  Hi, I'm{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(180deg, #FFFFFF 0%, #A1A1A1 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {SITE_CONFIG.name.split(' ')[0]}
                  </Box>
                  .
                  <br />
                  I build things for
                  <br />
                  the web.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    maxWidth: 540,
                    fontSize: '1.1rem',
                    color: '#a1a1a1',
                    lineHeight: 1.8,
                  }}
                >
                  A passionate Software Engineering student specializing in{' '}
                  <strong style={{ color: '#ffffff' }}>Java, Spring Boot</strong> and the{' '}
                  <strong style={{ color: '#ffffff' }}>MERN stack</strong>. I love turning ideas into
                  clean, high-performance web applications.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    maxWidth: 540,
                    fontSize: '1rem',
                    color: '#777777',
                    lineHeight: 1.8,
                  }}
                >
                  Currently seeking an internship or entry-level role where
                  I can contribute, learn, and grow as a developer.
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap', gap: 1.5 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                    onClick={() => navigate('/projects')}
                    sx={{
                      py: 1.4,
                      px: 3.5,
                      backgroundColor: '#ffffff',
                      color: '#000000',
                      fontWeight: 600,
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: '#eaeaea',
                      },
                    }}
                  >
                    View My Work
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<DownloadIcon sx={{ fontSize: 18 }} />}
                    href={SITE_CONFIG.resumeUrl}
                    sx={{
                      py: 1.4,
                      px: 3.5,
                      borderColor: '#333333',
                      color: '#ededed',
                      borderRadius: '8px',
                      '&:hover': {
                        borderColor: '#ffffff',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      },
                    }}
                  >
                    Resume
                  </Button>
                </Stack>

                <SocialLinks />
              </Box>
            </Grid>

            {/* Right — Profile Image (Full Color & Scaled) */}
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 480,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'fadeInUp 0.6s ease 0.15s both',
                }}
              >
                <Box
                  component="img"
                  src={profileImg}
                  alt="Profile"
                  sx={{
                    width: '100%',
                    maxHeight: 580,
                    objectFit: 'cover',
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8))',
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    transition: 'all 0.3s ease',
                    transform: 'scale(1.05)',
                    '&:hover': {
                      transform: 'scale(1.08)',
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Featured Projects ── */}
      <Box
        sx={{
          py: 12,
          borderTop: '1px solid #1a1a1a',
          backgroundColor: '#000000',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              mb: 6,
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <SectionTitle
              title="Featured Projects"
              subtitle="A selection of my best work and open-source contributions."
            />
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              onClick={() => navigate('/projects')}
              sx={{
                mb: { xs: 0, md: 6 },
                borderColor: '#262626',
                color: '#ededed',
                fontSize: '0.875rem',
                borderRadius: '6px',
                '&:hover': {
                  borderColor: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                },
              }}
            >
              All Projects
            </Button>
          </Box>

          <Grid
            container
            spacing={4}
            ref={projectsRef}
            sx={{
              opacity: projectsVisible ? 1 : 0,
              transform: projectsVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease',
            }}
          >
            {featuredProjects.map((project, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={project.id}>
                <ProjectCard project={project} index={index} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;