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
import SkillTree from '../../components/ui/SkillTree';
import { skills, education } from '../../store/portfolioData';
import profileImg from '../../assets/images/profileImage.jpeg';
import { SITE_CONFIG } from '../../config/constants';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const About = () => {
  const [bioRef, bioVisible] = useIntersectionObserver();
  const [eduRef, eduVisible] = useIntersectionObserver();
  const [imgError, setImgError] = useState(false);

  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 12 }, backgroundColor: '#ffffff', color: '#000000', width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3, md: 4 } }}>
        {/* ── 1. Bio Section ── */}
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
            mb: { xs: 6, md: 10 },
            width: '100%',
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

          <Box sx={{ minWidth: 0, width: '100%' }}>
            <Grid
              container
              spacing={{ xs: 4, md: 6 }}
              ref={bioRef}
              alignItems="center"
              sx={{
                opacity: bioVisible ? 1 : 0,
                transform: bioVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.5s ease',
              }}
            >
              <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    width: { xs: 280, sm: 330, md: 360 },
                    height: { xs: 280, sm: 330, md: 360 },
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 16px 44px rgba(0, 0, 0, 0.09)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.03)',
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
                      display: imgError ? 'none' : 'block',
                    }}
                    onError={() => setImgError(true)}
                  />
                  {imgError && (
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography sx={{ fontSize: '3.5rem' }}>👨‍💻</Typography>
                    </Box>
                  )}
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: 26,
                      md: 36,
                    },
                    lineHeight: 1.25,
                    fontWeight: 700,
                    letterSpacing: '-1px',
                    color: '#000000',
                    mb: 3,
                  }}
                >
                  A motivated student building scalable software and clean digital experiences
                </Typography>

                <Typography
                  sx={{ mb: 2.5, lineHeight: 1.8, color: '#444444', fontSize: '1.05rem' }}
                >
                  I am {SITE_CONFIG.name}, a Software Engineering student based in{' '}
                  <strong style={{ color: '#000000' }}>{SITE_CONFIG.location}</strong>. I am currently pursuing B.Tech in Electrical and
                  Electronics Engineering at VSSUT while actively engineering full-stack applications with{' '}
                  <strong style={{ color: '#000000' }}>Java, Spring Boot, React, Node.js, Go</strong>, and modern databases.
                </Typography>

                <Typography
                  sx={{ mb: 2.5, lineHeight: 1.8, color: '#555555', fontSize: '1rem' }}
                >
                  My focus is on strengthening backend architecture, REST API design, transaction workflows,
                  and building intuitive, responsive user interfaces. I enjoy turning complex business requirements
                  into dependable software systems.
                </Typography>

                <Typography
                  sx={{ mb: 4, lineHeight: 1.8, color: '#555555', fontSize: '1rem' }}
                >
                  Currently open to software engineering internships and junior developer opportunities where
                  I can contribute to impactful software products.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={<DownloadIcon sx={{ fontSize: 18 }} />}
                    href={SITE_CONFIG.resumeUrl}
                    size="large"
                    sx={{
                      bgcolor: '#000000',
                      color: '#ffffff',
                      borderRadius: 1,
                      px: 3.5,
                      py: 1.4,
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: '#222222',
                      },
                    }}
                  >
                    Download Resume
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Divider sx={{ my: { xs: 6, md: 10 } }} />

        {/* ── 2. Skills Section ── */}
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
            mb: { xs: 6, md: 10 },
            width: '100%',
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
            SKILLS
          </Typography>

          <Box sx={{ minWidth: 0, width: '100%' }}>
            <Typography
              sx={{
                fontSize: {
                  xs: 22,
                  sm: 28,
                  md: 32,
                },
                lineHeight: 1.3,
                fontWeight: 700,
                letterSpacing: '-1px',
                color: '#000000',
                mb: 2,
                wordBreak: 'break-word',
              }}
            >
              Technical Expertise
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 15, sm: 16 },
                lineHeight: 1.7,
                color: '#555555',
                maxWidth: 750,
                mb: 4,
                wordBreak: 'break-word',
              }}
            >
              System architecture map displaying core engineering domains, framework branches,
              and specific technology leaf nodes.
            </Typography>

            <SkillTree />
          </Box>
        </Box>

        <Divider sx={{ my: { xs: 6, md: 10 } }} />

        {/* ── 3. Education Section ── */}
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
            width: '100%',
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
            EDUCATION
          </Typography>

          <Box sx={{ minWidth: 0, width: '100%' }}>
            <Typography
              sx={{
                fontSize: {
                  xs: 24,
                  md: 32,
                },
                lineHeight: 1.3,
                fontWeight: 700,
                letterSpacing: '-1px',
                color: '#000000',
                mb: 2,
              }}
            >
              Academic Background
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                lineHeight: 1.7,
                color: '#555555',
                maxWidth: 700,
                mb: 5,
              }}
            >
              Formal education and engineering qualifications that built my analytical foundation.
            </Typography>

            <Grid
              container
              spacing={3.5}
              ref={eduRef}
              sx={{
                opacity: eduVisible ? 1 : 0,
                transform: eduVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.5s ease',
              }}
            >
              {education.map((edu) => (
                <Grid size={{ xs: 12, md: edu.id === 1 ? 12 : 6 }} key={edu.id}>
                  <Box
                    sx={{
                      p: { xs: 3, md: 4 },
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e5e5',
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      '&:hover': {
                        borderColor: '#000000',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                      },
                    }}
                  >
                    <Box>
                      {/* Header */}
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          mb: 2,
                          flexWrap: 'wrap',
                          gap: 1,
                        }}
                      >
                        <Chip
                          icon={<SchoolIcon sx={{ fontSize: '15px !important', color: '#000000' }} />}
                          label={edu.type}
                          size="small"
                          sx={{
                            backgroundColor: '#f5f5f5',
                            color: '#000000',
                            border: '1px solid #e5e5e5',
                            borderRadius: 1,
                            fontWeight: 600,
                            fontSize: '0.8rem',
                          }}
                        />
                        <Chip
                          icon={<CalendarMonthIcon sx={{ fontSize: '14px !important', color: '#666666' }} />}
                          label={edu.period}
                          size="small"
                          sx={{
                            color: '#555555',
                            backgroundColor: '#fafafa',
                            borderRadius: 1,
                            border: '1px solid #e5e5e5',
                            fontSize: '0.8rem',
                          }}
                        />
                      </Box>

                      {/* Degree & Field */}
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#000000',
                          fontWeight: 700,
                          fontSize: { xs: '1.2rem', md: '1.35rem' },
                          letterSpacing: '-0.5px',
                          mb: 0.5,
                        }}
                      >
                        {edu.degree}
                      </Typography>

                      <Typography
                        sx={{
                          color: '#444444',
                          fontWeight: 600,
                          fontSize: '1rem',
                          mb: 1.5,
                        }}
                      >
                        {edu.field}
                      </Typography>

                      <Typography
                        sx={{
                          color: '#666666',
                          fontSize: '0.92rem',
                          mb: 2.5,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.6,
                        }}
                      >
                        <LocationOnIcon sx={{ fontSize: 16, color: '#666666' }} />
                        {edu.institution} · {edu.location}
                      </Typography>

                      <Typography
                        sx={{
                          color: '#555555',
                          fontSize: '0.95rem',
                          lineHeight: 1.7,
                          mb: 3,
                        }}
                      >
                        {edu.description}
                      </Typography>

                      {edu.points && edu.points.length > 0 && (
                        <Box component="ul" sx={{ pl: 2.5, mb: 3 }}>
                          {edu.points.map((pt, idx) => (
                            <Box
                              component="li"
                              key={idx}
                              sx={{
                                color: '#666666',
                                fontSize: '0.9rem',
                                lineHeight: 1.65,
                                mb: 0.8,
                              }}
                            >
                              {pt}
                            </Box>
                          ))}
                        </Box>
                      )}
                    </Box>

                    {edu.skills && (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mt: 'auto' }}>
                        {edu.skills.map((s) => (
                          <Chip
                            key={s}
                            label={s}
                            size="small"
                            sx={{
                              fontSize: '0.78rem',
                              borderRadius: 1,
                              backgroundColor: '#f1f1f1',
                              color: '#000000',
                              border: '1px solid #e5e5e5',
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
        </Box>
      </Container>
    </Box>
  );
};

export default About;