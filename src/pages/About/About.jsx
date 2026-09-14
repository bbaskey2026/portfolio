import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import SectionTitle from '../../components/common/SectionTitle';
import SkillChart from '../../components/ui/SkillChart';
import { skills, education } from '../../store/portfolioData';
import profileImg from '../../assets/images/profileImage.jpeg';
import { SITE_CONFIG } from '../../config/constants';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const About = () => {
  const [bioRef, bioVisible] = useIntersectionObserver();
  const [eduRef, eduVisible] = useIntersectionObserver();
  const [imgError, setImgError] = useState(false);

  return (
    <Box sx={{ py: 8, backgroundColor: '#000000', color: '#ededed' }}>
      <Container maxWidth="lg">
        {/* Bio Section */}
        <Box
          sx={{
            mb: 10,
            p: { xs: 3, md: 5 },
            backgroundColor: '#0a0a0a',
            border: '1px solid #222222',
            borderRadius: '16px',
            position: 'relative',
          }}
        >
          <SectionTitle
            title="About Me"
            subtitle="Learn more about my background, skills, and what drives me."
          />

          <Grid
            container
            spacing={6}
            ref={bioRef}
            alignItems="center"
            sx={{
              opacity: bioVisible ? 1 : 0,
              transform: bioVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.5s ease',
            }}
          >
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 440,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src={profileImg || '/profile.jpg'}
                  alt="Profile"
                  sx={{
                    width: '100%',
                    maxHeight: 520,
                    objectFit: 'cover',
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8))',
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    display: imgError ? 'none' : 'block',
                    transition: 'all 0.3s ease',
                    transform: 'scale(1.04)',
                    '&:hover': {
                      transform: 'scale(1.07)',
                    },
                  }}
                  onError={() => {
                    setImgError(true);
                  }}
                />

                {/* Fallback if image fails to load */}
                <Box
                  sx={{
                    width: '100%',
                    height: 350,
                    display: imgError ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '4rem' }}>
                    👨‍💻
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h4"
                sx={{ mb: 2.5, color: '#ffffff', fontWeight: 700, letterSpacing: '-0.02em' }}
              >
                A motivated student building a career in software engineering
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 2, lineHeight: 1.8, color: '#a1a1a1' }}
              >
                I am Bhima Baskey, a Software Engineering student based in{' '}
                <strong style={{ color: '#ffffff' }}>{SITE_CONFIG.location}</strong>. I am currently pursuing B.Tech in Electrical and
                Electronics Engineering at VSSUT while actively learning <strong style={{ color: '#ffffff' }}>Java, Spring Boot, JavaScript</strong>, and the <strong style={{ color: '#ffffff' }}>MERN stack</strong>.
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 2, lineHeight: 1.8, color: '#a1a1a1' }}
              >
                My focus is on strengthening my backend and full-stack development skills by
                building academic and personal projects. I enjoy turning ideas into practical,
                high-performance web applications and continuously learning new technologies.
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 3.5, lineHeight: 1.8, color: '#a1a1a1' }}
              >
                I am currently looking for an entry-level role or internship where I can gain
                real-world experience, contribute to exciting products, and continue improving as a
                developer.
              </Typography>

              <Button
                variant="contained"
                startIcon={<DownloadIcon sx={{ fontSize: 18 }} />}
                href={SITE_CONFIG.resumeUrl}
                size="large"
                sx={{
                  py: 1.3,
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
                Download Resume
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Skills Section */}
        <Box
          sx={{
            mb: 10,
            p: { xs: 3, md: 5 },
            backgroundColor: '#0a0a0a',
            border: '1px solid #222222',
            borderRadius: '16px',
          }}
        >
          <SectionTitle
            title="Technical Skills"
            subtitle="A comprehensive overview of my technical expertise and proficiency levels."
          />

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 2.5, backgroundColor: '#050505', border: '1px solid #1a1a1a', borderRadius: '12px', height: '100%' }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2.5,
                    pb: 1,
                    borderBottom: '1px solid #222222',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  }}
                >
                  Frontend
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {skills.frontend.map((skill) => (
                    <SkillChart key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 2.5, backgroundColor: '#050505', border: '1px solid #1a1a1a', borderRadius: '12px', height: '100%' }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2.5,
                    pb: 1,
                    borderBottom: '1px solid #222222',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  }}
                >
                  Backend & Database
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {skills.backend.map((skill) => (
                    <SkillChart key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 2.5, backgroundColor: '#050505', border: '1px solid #1a1a1a', borderRadius: '12px', height: '100%' }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2.5,
                    pb: 1,
                    borderBottom: '1px solid #222222',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  }}
                >
                  Tools & DevOps
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {skills.tools.map((skill) => (
                    <SkillChart key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Education Section */}
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            backgroundColor: '#0a0a0a',
            border: '1px solid #222222',
            borderRadius: '16px',
          }}
        >
          <SectionTitle
            title="Education"
            subtitle="My academic background and qualifications."
          />

          <Grid
            container
            spacing={3}
            ref={eduRef}
            sx={{
              opacity: eduVisible ? 1 : 0,
              transform: eduVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.5s ease',
            }}
          >
            {education.map((edu) => (
              <Grid size={{ xs: 12, md: 6 }} key={edu.id}>
                <Box
                  sx={{
                    p: 3.5,
                    backgroundColor: '#050505',
                    border: '1px solid #1f1f1f',
                    borderRadius: '12px',
                    height: '100%',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: '#444444',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      mb: 1.5,
                      flexWrap: 'wrap',
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ color: '#ffffff', fontWeight: 600, fontSize: '1.15rem', letterSpacing: '-0.01em' }}
                    >
                      {edu.degree}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#888888',
                        fontFamily: 'monospace',
                        backgroundColor: '#141414',
                        px: 1,
                        py: 0.4,
                        borderRadius: '4px',
                        border: '1px solid #222222',
                      }}
                    >
                      {edu.period}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{ color: '#a1a1a1', fontWeight: 500, mb: 1.5 }}
                  >
                    {edu.institution} · <span style={{ color: '#777777' }}>{edu.location}</span>
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: '#888888', lineHeight: 1.7 }}
                  >
                    {edu.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;