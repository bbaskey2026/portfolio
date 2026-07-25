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
import { projects, skills } from '../../store/portfolioData';
import { SITE_CONFIG } from '../../config/constants';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import profileImg from '../../assets/images/profileImage.jpeg';

const Home = () => {
  const navigate = useNavigate();
  const [skillsRef, skillsVisible] = useIntersectionObserver();
  const [projectsRef, projectsVisible] = useIntersectionObserver();

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Box>
      {/* ── Hero Section ── */}
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          backgroundImage: [
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1600 900\' preserveAspectRatio=\'none\'%3E%3Crect width=\'1600\' height=\'900\' fill=\'%23ffffff\'/%3E%3Cpath d=\'M0 620 C280 560 520 700 780 660 C1040 620 1240 520 1600 580 L1600 900 L0 900 Z\' fill=\'%23e8f4e8\' opacity=\'0.7\'/%3E%3Cpath d=\'M0 720 C300 660 560 800 840 760 C1100 720 1300 620 1600 680 L1600 900 L0 900 Z\' fill=\'%23c8e6c8\' opacity=\'0.6\'/%3E%3Cpath d=\'M0 820 C320 760 580 880 880 840 C1140 805 1340 720 1600 780 L1600 900 L0 900 Z\' fill=\'%23a5d6a5\' opacity=\'0.5\'/%3E%3C/svg%3E")',
            'linear-gradient(180deg, #ffffff 0%, #f9fdf9 100%)',
          ].join(', '),
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center, center',
        }}
      >
        {/* Decorative circles */}
        <Box
          sx={{
            position: 'absolute',
            top: '8%',
            right: '4%',
            width: 420,
            height: 420,
            borderRadius: '50%',
            border: '1px solid rgba(0,0,0,0.05)',
            display: { xs: 'none', lg: 'block' },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '18%',
            right: '9%',
            width: 260,
            height: 260,
            borderRadius: '50%',
            border: '1px solid rgba(0,0,0,0.05)',
            display: { xs: 'none', lg: 'block' },
          }}
        />

        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left — Text */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  animation: 'fadeInUp 0.8s ease',
                  '@keyframes fadeInUp': {
                    from: { opacity: 0, transform: 'translateY(40px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                <Chip
                  label="✨ Open to internships & entry-level opportunities"
                  sx={{
                    mb: 3,
                    borderRadius: '20px',
                    border: '1px solid #E5E5E5',
                    backgroundColor: '#FAFAFA',
                    fontSize: '0.85rem',
                    fontWeight: 400,
                  }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    mb: 3,
                    color: '#000000',
                    lineHeight: 1.15,
                  }}
                >
                  Hi, I'm{' '}
                  <Box
                    component="span"
                    sx={{
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 4,
                        left: 0,
                        width: '100%',
                        height: 8,
                        backgroundColor: 'rgba(0,0,0,0.07)',
                        borderRadius: 4,
                      },
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
                    maxWidth: 520,
                    fontSize: '1.1rem',
                    color: '#555555',
                    lineHeight: 1.85,
                  }}
                >
                  A passionate B.Tech student specializing in{' '}
                  <strong>Java, Spring Boot</strong> and the{' '}
                  <strong>MERN stack</strong>. I love turning ideas into
                  clean, functional web applications.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    maxWidth: 520,
                    fontSize: '1.05rem',
                    color: '#777777',
                    lineHeight: 1.85,
                  }}
                >
                  Currently seeking an internship or entry-level role where
                  I can contribute, learn, and grow as a developer.
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => navigate('/projects')}
                    sx={{ py: 1.5, px: 4 }}
                  >
                    View My Work
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<DownloadIcon />}
                    href={SITE_CONFIG.resumeUrl}
                    sx={{ py: 1.5, px: 4 }}
                  >
                    Resume
                  </Button>
                </Stack>

                <SocialLinks />
              </Box>
            </Grid>

            {/* Right — Profile Image */}
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 500,
                  position: 'relative',
                  animation: 'fadeInUp 0.8s ease 0.2s both',
                }}
              >
                <Box
                  sx={{
                    width: '80%',
                    height: '85%',
                    mx: 'auto',
                    backgroundColor: '#F5F5F5',
                    borderRadius: '24px',
                    border: '1px solid #E5E5E5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                  }}
                >
                  <Box
                    component="img"
                    src={profileImg}
                    alt="Profile"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>

              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Featured Projects ── */}
      <Box
        sx={{
          py: 10,
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#f4eed7',
        }}
      >
        {/* Wavy background overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.3,
            backgroundImage: [
              'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
              'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 600\' preserveAspectRatio=\'none\'%3E%3Crect width=\'1200\' height=\'600\' fill=\'%23f4eed7\'/%3E%3Cpath d=\'M0,160 C240,140 360,220 540,180 C720,140 840,60 1020,80 C1140,95 1200,110 1200,110 L1200,600 L0,600 Z\' fill=\'%238ec1f4\' opacity=\'0.85\'/%3E%3Cpath d=\'M0,240 C240,220 360,280 540,240 C720,200 840,120 1020,150 C1140,175 1200,190 1200,190 L1200,600 L0,600 Z\' fill=\'%23d5e6fb\' opacity=\'0.9\'/%3E%3C/svg%3E")',
            ].join(', '),
            backgroundSize: '40px 40px, 40px 40px, cover',
            backgroundPosition: '0 0, 0 0, 0 0',
            backgroundRepeat: 'repeat, repeat, no-repeat',
          }}
        />

       
      </Box>
      
    </Box>
  );
};

export default Home;