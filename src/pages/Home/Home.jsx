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
import { projects, skills, testimonials } from '../../store/portfolioData';
import { SITE_CONFIG } from '../../config/constants';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import profileImg from '../../assets/images/profileImage.jpeg';

const Home = () => {
  const navigate = useNavigate();
  const [statsRef, statsVisible] = useIntersectionObserver();
  const [testimonialRef, testimonialVisible] = useIntersectionObserver();

  const featuredProjects = projects.filter((p) => p.featured);

  const stats = [
    { label: 'Years Experience', value: '6+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '20+' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.18,
            backgroundImage: [
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
              'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 800 200\'%3E%3Cpath d=\'M0 40 C120 80 240 0 360 40 S600 80 720 40 S840 0 960 40\' stroke=\'rgba(255,255,255,0.12)\' stroke-width=\'1.5\' fill=\'none\'/%3E%3C/svg%3E")',
            ].join(', '),
            backgroundSize: '40px 40px, 40px 40px, 800px 200px',
            backgroundPosition: '0 0, 0 0, 0 50px',
          }}
        />
        {/* Subtle background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            border: '1px solid #F0F0F0',
            display: { xs: 'none', lg: 'block' },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: 250,
            height: 250,
            borderRadius: '50%',
            border: '1px solid #F0F0F0',
            display: { xs: 'none', lg: 'block' },
          }}
        />

        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  animation: 'fadeInUp 0.8s ease',
                  '@keyframes fadeInUp': {
                    from: {
                      opacity: 0,
                      transform: 'translateY(40px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                }}
              >
                <Chip
                  label="✨ Open to internships and entry-level opportunities"
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
                        backgroundColor: 'rgba(0,0,0,0.08)',
                        borderRadius: 4,
                      },
                    }}
                  >
                    {SITE_CONFIG.name.split(' ')[0]}
                  </Box>
                  .
                  <br />I build things for
                  <br />
                  the web.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    maxWidth: 500,
                    fontSize: '1.15rem',
                    color: '#666666',
                    lineHeight: 1.8,
                  }}
                >
                  {SITE_CONFIG.description}
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
                {/* Profile image placeholder */}
                <Box
                  sx={{
                    width: '80%',
                    height: '80%',
                    mx: 'auto',
                    backgroundColor: '#F5F5F5',
                    borderRadius: '24px',
                    border: '1px solid #E5E5E5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
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

      {/* Stats Section */}
      <Box sx={{ py: 8, borderTop: '1px solid #E5E5E5' }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            ref={statsRef}
            sx={{
              opacity: statsVisible ? 1 : 0,
              transform: statsVisible
                ? 'translateY(0)'
                : 'translateY(30px)',
              transition: 'all 0.6s ease',
            }}
          >
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRight:
                      index < stats.length - 1
                        ? { md: '1px solid #E5E5E5' }
                        : 'none',
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: '#000000',
                      mb: 0.5,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#999999' }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Projects */}
      <Box
        sx={{
          py: 10,
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#f4eed7',
        }}
      >
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
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              mb: 6,
            }}
          >
            <SectionTitle
              title="Featured Projects"
              subtitle="A selection of my recent work and side projects."
            />
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/projects')}
              sx={{
                display: { xs: 'none', sm: 'flex' },
                mb: 8,
              }}
            >
              View All
            </Button>
          </Box>

          <Grid container spacing={3}>
            {featuredProjects.map((project, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
                <ProjectCard project={project} index={index} />
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              justifyContent: 'center',
              mt: 4,
            }}
          >
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/projects')}
            >
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Skills Overview */}
      <Box
        sx={{
          py: 10,
          backgroundColor: '#FAFAFA',
          borderTop: '1px solid #E5E5E5',
          borderBottom: '1px solid #E5E5E5',
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            title="Skills & Technologies"
            subtitle="Technologies I've been working with recently."
            align="center"
          />

          <Box sx={{ textAlign: 'center' }}>
            {Object.values(skills)
              .flat()
              .map((skill) => (
                <Chip
                  key={skill.name}
                  label={skill.name}
                  sx={{
                    m: 0.5,
                    px: 1,
                    py: 2.5,
                    fontSize: '0.9rem',
                    borderRadius: '8px',
                    border: '1px solid #E5E5E5',
                    backgroundColor: '#FFFFFF',
                    color: '#333333',
                    fontWeight: 500,
                    '&:hover': {
                      borderColor: '#000000',
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                    },
                    transition: 'all 0.2s ease',
                    cursor: 'default',
                  }}
                />
              ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <SectionTitle
            title="What People Say"
            subtitle="Testimonials from colleagues and clients I've worked with."
            align="center"
          />

          <Grid container spacing={3} ref={testimonialRef}>
            {testimonials.map((testimonial, index) => (
              <Grid
                size={{ xs: 12, md: 4 }}
                key={testimonial.id}
                sx={{
                  opacity: testimonialVisible ? 1 : 0,
                  transform: testimonialVisible
                    ? 'translateY(0)'
                    : 'translateY(30px)',
                  transition: `all 0.6s ease ${index * 0.15}s`,
                }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    border: '1px solid #E5E5E5',
                    borderRadius: 2,
                    '&:hover': { borderColor: '#000000' },
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      color: '#E0E0E0',
                      mb: 2,
                      lineHeight: 1,
                    }}
                  >
                    "
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mb: 3, fontStyle: 'italic', color: '#444444' }}
                  >
                    {testimonial.text}
                  </Typography>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, color: '#000000' }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#999999', fontSize: '0.8rem' }}
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          backgroundColor: '#000000',
          color: '#FFFFFF',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              color: '#FFFFFF',
              mb: 2,
            }}
          >
            Let's work together
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#999999',
              mb: 4,
              maxWidth: 500,
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            I'm always open to new opportunities and interesting projects.
            Let's create something amazing together.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/contact')}
            sx={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              py: 1.5,
              px: 4,
              '&:hover': {
                backgroundColor: '#F0F0F0',
              },
            }}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;