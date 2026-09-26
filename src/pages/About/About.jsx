import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
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
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#000000', color: '#ededed' }}>
      <Container maxWidth="lg">
        {/* ── 1. Bio Section (Flat Plain) ── */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle
            title="About Me"
            subtitle="Learn more about my background, skills, and what drives me."
          />

          <Grid
            container
            spacing={{ xs: 3, md: 6 }}
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
                variant="h3"
                sx={{
                  mb: 2.5,
                  color: '#ffffff',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  fontSize: { xs: '1.8rem', md: '2.4rem' },
                  lineHeight: 1.2,
                }}
              >
                A motivated student building a career in software engineering
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 2, lineHeight: 1.8, color: '#a1a1a1', fontSize: '1.05rem' }}
              >
                I am Bhima Baskey, a Software Engineering student based in{' '}
                <strong style={{ color: '#ffffff' }}>{SITE_CONFIG.location}</strong>. I am currently pursuing B.Tech in Electrical and
                Electronics Engineering at VSSUT while actively learning <strong style={{ color: '#ffffff' }}>Java, Spring Boot, JavaScript</strong>, and the <strong style={{ color: '#ffffff' }}>MERN stack</strong>.
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 2, lineHeight: 1.8, color: '#a1a1a1', fontSize: '1.05rem' }}
              >
                My focus is on strengthening my backend and full-stack development skills by
                building academic and personal projects. I enjoy turning ideas into practical,
                high-performance web applications and continuously learning new technologies.
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 3.5, lineHeight: 1.8, color: '#a1a1a1', fontSize: '1.05rem' }}
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
                  py: 1.5,
                  px: 4,
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  border: '1px solid #ffffff',
                  '&:hover': {
                    backgroundColor: '#eaeaea',
                    borderColor: '#eaeaea',
                  },
                }}
              >
                Download Resume
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: '#1a1a1a', my: { xs: 6, md: 10 } }} />

        {/* ── 2. Skills Section (Flat Plain) ── */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle
            title="Technical Skills"
            subtitle="A comprehensive overview of my technical expertise and proficiency levels."
          />

          <Grid container spacing={{ xs: 2.5, md: 3.5 }}>
            {/* Frontend */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  backgroundColor: '#060606',
                  border: '1px solid #1c1c1c',
                  borderRadius: '16px',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2.5,
                    pb: 1.5,
                    borderBottom: '1px solid #191919',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                    <CodeIcon sx={{ fontSize: 20, color: '#61DAFB' }} />
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      Frontend
                    </Typography>
                  </Box>
                  <Chip
                    label={`${skills.frontend.length} skills`}
                    size="small"
                    sx={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      borderRadius: '9999px',
                      backgroundColor: '#111111',
                      color: '#a1a1a1',
                      border: '1px solid #222222',
                    }}
                  />
                </Box>
                <Stack spacing={1.5}>
                  {skills.frontend.map((skill) => (
                    <SkillChart key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Backend & Database */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  backgroundColor: '#060606',
                  border: '1px solid #1c1c1c',
                  borderRadius: '16px',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2.5,
                    pb: 1.5,
                    borderBottom: '1px solid #191919',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                    <StorageIcon sx={{ fontSize: 20, color: '#6DB33F' }} />
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      Backend & Database
                    </Typography>
                  </Box>
                  <Chip
                    label={`${skills.backend.length} skills`}
                    size="small"
                    sx={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      borderRadius: '9999px',
                      backgroundColor: '#111111',
                      color: '#a1a1a1',
                      border: '1px solid #222222',
                    }}
                  />
                </Box>
                <Stack spacing={1.5}>
                  {skills.backend.map((skill) => (
                    <SkillChart key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Tools & DevOps */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  backgroundColor: '#060606',
                  border: '1px solid #1c1c1c',
                  borderRadius: '16px',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2.5,
                    pb: 1.5,
                    borderBottom: '1px solid #191919',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                    <BuildIcon sx={{ fontSize: 20, color: '#FF6C37' }} />
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      Tools & DevOps
                    </Typography>
                  </Box>
                  <Chip
                    label={`${skills.tools.length} skills`}
                    size="small"
                    sx={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      borderRadius: '9999px',
                      backgroundColor: '#111111',
                      color: '#a1a1a1',
                      border: '1px solid #222222',
                    }}
                  />
                </Box>
                <Stack spacing={1.5}>
                  {skills.tools.map((skill) => (
                    <SkillChart key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: '#1a1a1a', my: { xs: 6, md: 10 } }} />

        {/* ── 3. Education Section (Flat Plain) ── */}
        <Box>
          <SectionTitle
            title="Education"
            subtitle="My academic background and qualifications."
          />

          <Grid
            container
            spacing={{ xs: 2.5, md: 3.5 }}
            ref={eduRef}
            sx={{
              opacity: eduVisible ? 1 : 0,
              transform: eduVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.5s ease',
            }}
          >
            {education.map((edu) => (
              <Grid size={{ xs: 12, md: edu.id === 1 ? 12 : 6 }} key={edu.id} sx={{ minWidth: 0, maxWidth: '100%' }}>
                <Box
                  sx={{
                    p: { xs: 2.5, md: 4 },
                    backgroundColor: '#060606',
                    border: '1px solid #1c1c1c',
                    borderRadius: '16px',
                    height: '100%',
                    width: '100%',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    '&:hover': {
                      borderColor: '#444444',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
                    },
                  }}
                >
                  <Box sx={{ width: '100%', minWidth: 0 }}>
                    {/* Header: Type Badge & Period */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                        flexWrap: 'wrap',
                        gap: 1.2,
                        width: '100%',
                      }}
                    >
                      <Chip
                        icon={<SchoolIcon sx={{ fontSize: '15px !important', color: '#ffffff' }} />}
                        label={edu.type}
                        size="small"
                        sx={{
                          backgroundColor: '#111111',
                          color: '#ffffff',
                          border: '1px solid #282828',
                          borderRadius: '9999px',
                          fontWeight: 600,
                          fontSize: '0.78rem',
                          px: 1,
                          py: 0.5,
                          maxWidth: '100%',
                        }}
                      />
                      <Chip
                        icon={<CalendarMonthIcon sx={{ fontSize: '14px !important', color: '#888888' }} />}
                        label={edu.period}
                        size="small"
                        sx={{
                          color: '#a1a1a1',
                          fontFamily: 'monospace',
                          backgroundColor: '#0c0c0c',
                          px: 1,
                          py: 0.5,
                          borderRadius: '9999px',
                          border: '1px solid #222222',
                          fontSize: '0.78rem',
                          maxWidth: '100%',
                        }}
                      />
                    </Box>

                    {/* Degree & Field */}
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                        letterSpacing: '-0.02em',
                        mb: 0.5,
                        wordBreak: 'break-word',
                      }}
                    >
                      {edu.degree}
                    </Typography>

                    {edu.field && (
                      <Typography
                        variant="body2"
                        sx={{ color: '#888888', fontWeight: 500, fontSize: '0.9rem', mb: 1.5, wordBreak: 'break-word' }}
                      >
                        {edu.field}
                      </Typography>
                    )}

                    {/* Institution & Location */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, mb: 2.5, flexWrap: 'wrap' }}>
                      <Typography
                        variant="body2"
                        sx={{ color: '#ededed', fontWeight: 600, fontSize: '0.95rem', wordBreak: 'break-word' }}
                      >
                        {edu.institution}
                      </Typography>
                      {edu.location && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3, color: '#777777', fontSize: '0.85rem' }}>
                          <LocationOnIcon sx={{ fontSize: 15, color: '#666666' }} />
                          <span>{edu.location}</span>
                        </Box>
                      )}
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{ color: '#999999', lineHeight: 1.7, mb: 3, fontSize: '0.9rem', wordBreak: 'break-word' }}
                    >
                      {edu.description}
                    </Typography>

                    {/* Key Highlights / Points */}
                    {edu.points && edu.points.length > 0 && (
                      <Box component="ul" sx={{ pl: 2.5, mb: 3, color: '#888888', fontSize: '0.875rem' }}>
                        {edu.points.map((point, idx) => (
                          <Box
                            component="li"
                            key={idx}
                            sx={{
                              mb: 0.8,
                              lineHeight: 1.6,
                              color: '#a1a1a1',
                              wordBreak: 'break-word',
                              '&::marker': { color: '#ffffff' },
                            }}
                          >
                            {point}
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>

                  {/* Skills / Focus Areas */}
                  {edu.skills && edu.skills.length > 0 && (
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        pt: 2,
                        borderTop: '1px solid #161616',
                        width: '100%',
                        maxWidth: '100%',
                      }}
                    >
                      {edu.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: '#111111',
                            color: '#a1a1a1',
                            border: '1px solid #222222',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            px: 1,
                            py: 0.4,
                            maxWidth: '100%',
                            '&:hover': {
                              borderColor: '#444444',
                              color: '#ffffff',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  )}
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