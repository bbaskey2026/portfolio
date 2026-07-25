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
import SkillChip from '../../components/ui/SkillChip';
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
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Bio Section with Wavy Background */}
        <Box
          sx={{
            mb: 10,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 4,
            p: { xs: 3, md: 6 },
            backgroundColor: '#eaf4fb',
          }}
        >
          {/* Wavy Background */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              opacity: 0.3,
              backgroundImage: [
                'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)',
                'linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 600\' preserveAspectRatio=\'none\'%3E%3Crect width=\'1200\' height=\'600\' fill=\'%23eaf4fb\'/%3E%3Cpath d=\'M0,200 C300,150 400,300 600,250 C800,200 900,100 1200,180 L1200,600 L0,600 Z\' fill=\'%23b3d9f2\' opacity=\'0.6\'/%3E%3Cpath d=\'M0,300 C200,250 400,400 600,350 C800,300 1000,200 1200,280 L1200,600 L0,600 Z\' fill=\'%237ab8e8\' opacity=\'0.5\'/%3E%3Cpath d=\'M0,400 C300,350 500,500 700,450 C900,400 1100,300 1200,380 L1200,600 L0,600 Z\' fill=\'%234a9bd6\' opacity=\'0.4\'/%3E%3C/svg%3E")',
              ].join(', '),
              backgroundSize: '40px 40px, 40px 40px, cover',
              backgroundPosition: '0 0, 0 0, 0 0',
              backgroundRepeat: 'repeat, repeat, no-repeat',
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <SectionTitle
              title="About Me"
              subtitle="Learn more about my background, skills, and what drives me."
            />

            <Grid
              container
              spacing={8}
              ref={bioRef}
              sx={{
                opacity: bioVisible ? 1 : 0,
                transform: bioVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s ease',
              }}
            >
              <Grid item xs={12} md={5}>
                <Box
                  component="img"
                  src={profileImg || '/profile.jpg'}
                  alt="Profile"
                  sx={{
                    width: '100%',
                    height: 400,
                    objectFit: 'cover',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    display: imgError ? 'none' : 'block',
                  }}
                  onError={() => {
                    setImgError(true);
                  }}
                />

                {/* Fallback if image fails to load */}
                <Box
                  sx={{
                    width: '100%',
                    height: 400,
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    display: imgError ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  id="profile-fallback"
                >
                  <Typography sx={{ fontSize: '5rem', color: 'text.secondary' }}>
                    👨‍💻
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={7}>
                <Typography
                  variant="h3"
                  sx={{ mb: 3, color: '#000000' }}
                >
                  A motivated student building a career in software engineering
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ mb: 2, lineHeight: 1.8 }}
                >
                  I am Bhima Baskey, a beginner-level Software Engineering student based in{' '}
                  {SITE_CONFIG.location}. I am currently pursuing B.Tech in Electrical and
                  Electronics Engineering at VSSUT while actively learning Java, Spring Boot,
                  JavaScript, and the MERN stack.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ mb: 2, lineHeight: 1.8 }}
                >
                  My focus is on strengthening my backend and full-stack development skills by
                  building academic and personal projects. I enjoy turning ideas into practical
                  web applications and growing through hands-on learning.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ mb: 4, lineHeight: 1.8 }}
                >
                  I am currently looking for an entry-level role or internship where I can gain
                  real-world experience, contribute under guidance, and continue improving as a
                  developer.
                </Typography>

                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  href={SITE_CONFIG.resumeUrl}
                  size="large"
                >
                  Download Resume
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Skills Section */}
        <Box
          sx={{
            mb: 10,
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#f4eed7',
            borderRadius: 4,
            p: { xs: 3, md: 4 },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              opacity: 0.22,
              backgroundImage: [
                'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
                'linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
                'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 600\' preserveAspectRatio=\'none\'%3E%3Crect width=\'1200\' height=\'600\' fill=\'%23f4eed7\'/%3E%3Cpath d=\'M0,180 C240,160 360,220 540,200 C720,180 840,100 1020,120 C1140,135 1200,160 1200,160 L1200,600 L0,600 Z\' fill=\'%23c8ddf8\' opacity=\'0.9\'/%3E%3Cpath d=\'M0,260 C240,240 360,300 540,280 C720,260 840,180 1020,200 C1140,215 1200,240 1200,240 L1200,600 L0,600 Z\' fill=\'%2382b6f0\' opacity=\'0.8\'/%3E%3C/svg%3E")',
              ].join(', '),
              backgroundSize: '40px 40px, 40px 40px, cover',
              backgroundPosition: '0 0, 0 0, 0 0',
              backgroundRepeat: 'repeat, repeat, no-repeat',
            }}
          />

          <Box sx={{ position: 'relative' }}>
            <SectionTitle
              title="Technical Skills"
              subtitle="A comprehensive overview of my technical expertise and proficiency levels."
            />

            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    pb: 2,
                    borderBottom: '2px solid',
                    display: 'inline-block',
                  }}
                >
                  Frontend
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                  {skills.frontend.map((skill) => (
                    <SkillChart key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    pb: 2,
                    borderBottom: '2px solid',
                    display: 'inline-block',
                  }}
                >
                  Backend
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                  {skills.backend.map((skill) => (
                    <SkillChart key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    pb: 2,
                    borderBottom: '2px solid',
                    display: 'inline-block',
                  }}
                >
                  Tools & Others
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                  {skills.tools.map((skill) => (
                    <SkillChart key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Education Section */}
        <Box ref={eduRef}>
          <SectionTitle
            title="Education"
            subtitle="My academic background."
          />

          <Box sx={{ mt: 6 }}>
            {education.map((edu, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  mb: 6,
                  position: 'relative',
                }}
              >
                {/* Timeline */}
                <Box
                  sx={{
                    width: 80,
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 18,
                      bottom: -60,
                      width: 4,
                      bgcolor: '#d9d9d9',
                    }}
                  />
                  <Box
                    sx={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      bgcolor: '#fff',
                      border: '3px solid #111',
                      zIndex: 2,
                    }}
                  />
                </Box>

                {/* Card */}
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    bgcolor: '#fff',
                    borderRadius: 4,
                    overflow: 'hidden',
                    border: '1px solid #e5e5e5',
                    transition: '.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,.08)',
                    },
                  }}
                >
                  {/* Image Wrapper — no cropping */}
                  <Box
                    sx={{
                      width: { xs: '100%', md: 240 },
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: '#f9f9f9',
                      borderRight: { xs: 'none', md: '1px solid #eee' },
                      borderBottom: { xs: '1px solid #eee', md: 'none' },
                      p: 3,
                    }}
                  >
                    <Box
                      component="img"
                      src={edu.image}
                      alt={edu.school}
                      sx={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: { xs: 200, md: '100%' },
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </Box>

                  {/* Content */}
                  <Box sx={{ flex: 1, p: 4 }}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      flexWrap="wrap"
                      gap={1}
                    >
                      <Box>
                        <Typography variant="h5" fontWeight={700}>
                          {edu.degree}
                        </Typography>
                        <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                          {edu.school}
                        </Typography>
                      </Box>

                      <Typography color="text.secondary">{edu.period}</Typography>
                    </Box>

                    <Box
                      component="ul"
                      sx={{
                        mt: 3,
                        pl: 3,
                        lineHeight: 2,
                      }}
                    >
                      {edu.points?.map((point, i) => (
                        <li key={i}>
                          <Typography>{point}</Typography>
                        </li>
                      ))}
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        gap: 1,
                        flexWrap: 'wrap',
                        mt: 3,
                      }}
                    >
                      {edu.skills?.map((skill) => (
                        <SkillChip key={skill} label={skill} />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;