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
              A passionate developer with an eye for design
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 2, lineHeight: 1.8 }}
            >
              I'm a full-stack developer based in {SITE_CONFIG.location} with
              over 6 years of experience building web applications. I
              specialize in creating fast, accessible, and visually
              appealing digital experiences.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 2, lineHeight: 1.8 }}
            >
              My journey in software development started during my time at
              UC Berkeley, where I discovered my passion for creating
              things that live on the internet. Since then, I've had the
              privilege of working with startups, agencies, and larger
              corporations.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, lineHeight: 1.8 }}
            >
              When I'm not coding, you can find me hiking in the Bay Area,
              experimenting with new recipes, or contributing to
              open-source projects. I believe in continuous learning and
              enjoy staying up-to-date with the latest web technologies.
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

          {education.map((edu, index) => (
            <Box
              key={index}
              sx={{
                p: 4,
                border: '1px solid #E5E5E5',
                borderRadius: 2,
                '&:hover': { borderColor: '#000000' },
                transition: 'border-color 0.2s ease',
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: '#000000', mb: 0.5 }}
              >
                {edu.degree}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#666666', mb: 0.5, fontWeight: 500 }}
              >
                {edu.school}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#999999', mb: 1.5 }}
              >
                {edu.period}
              </Typography>
              <Typography variant="body2" sx={{ color: '#444444' }}>
                {edu.details}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;