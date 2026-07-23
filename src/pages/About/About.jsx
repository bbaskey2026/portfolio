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
        <SectionTitle
          title="About Me"
          subtitle="Learn more about my background, skills, and what drives me."
        />

        {/* Bio Section */}
          <Grid
          container
          spacing={8}
          ref={bioRef}
          sx={{
            mb: 10,
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
                setImgError(true)
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
              I am Bhima Baskey, a beginner-level Software Engineering student based in {SITE_CONFIG.location}. I am currently pursuing B.Tech in Electrical and Electronics Engineering at VSSUT while actively learning Java, Spring Boot, JavaScript, and the MERN stack.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 2, lineHeight: 1.8 }}
            >
              My focus is on strengthening my backend and full-stack development skills by building academic and personal projects. I enjoy turning ideas into practical web applications and growing through hands-on learning.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, lineHeight: 1.8 }}
            >
              I am currently looking for an entry-level role or internship where I can gain real-world experience, contribute under guidance, and continue improving as a developer.
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
        <Box
          ref={eduRef}
          sx={{
            opacity: eduVisible ? 1 : 0,
            transform: eduVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease',
          }}
        >
          <SectionTitle
            title="Education"
            subtitle="My academic background."
          />

          <Grid container spacing={4}>
            {education.map((edu, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: index % 2 === 0 ? 'row' : 'row-reverse' },
                    alignItems: 'stretch',
                    gap: 2,
                    p: 0,
                    borderRadius: 0,
                    overflow: 'hidden',
                    boxShadow: '0 20px 45px rgba(15, 70, 30, 0.08)',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(47,125,59,0.12)',
                    transition: 'transform 0.25s ease, border-color 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: '#2f7d3b',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={edu.image}
                    alt={edu.school}
                    sx={{
                      width: { xs: '100%', sm: 220 },
                      minHeight: 220,
                      objectFit: 'cover',
                      backgroundColor: '#f4faf4',
                    }}
                  />

                  <Box sx={{ p: 4, background: 'linear-gradient(180deg, #f5f9f5 0%, #e8f5e9 100%)' }}>
                    <Typography variant="subtitle2" sx={{ color: '#2f7d3b', mb: 1, fontWeight: 700 }}>
                      {edu.period}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, color: '#102f17', fontWeight: 700 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: '#375b32', fontWeight: 600 }}>
                      {edu.school}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#375b32', lineHeight: 1.8 }}>
                      {edu.details}
                    </Typography>
                  </Box>
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