import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import SkillTree from '../../components/ui/SkillTree';
import { education } from '../../store/portfolioData';
import profileImg from '../../assets/images/profileImage.jpeg';
import { SITE_CONFIG } from '../../config/constants';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const About = () => {
  const [bioRef, bioVisible] = useIntersectionObserver();
  const [imgError, setImgError] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        color: '#ffffff',
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
      }}
    >
      <Box
        sx={{
          maxWidth: '1040px',
          margin: '0 auto',
          padding: { xs: '40px 16px', sm: '56px 24px', md: '72px 24px' },
        }}
      >
        {/* ── 1. Bio Section ── */}
        <Box
          component="section"
          ref={bioRef}
          sx={{
            paddingBottom: { xs: '48px', md: '72px' },
            opacity: bioVisible ? 1 : 0,
            transform: bioVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.4s ease',
          }}
        >
          <Typography sx={{ color: '#8ec5ff', fontSize: '14px', marginBottom: '12px', fontWeight: 500 }}>
            About
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: 'clamp(28px, 6vw, 54px)',
              lineHeight: 1.1,
              fontWeight: 500,
              letterSpacing: '-.04em',
              margin: '0 0 24px',
              maxWidth: '850px',
              color: '#ffffff',
              wordBreak: 'break-word',
            }}
          >
            Building scalable software and clean digital experiences.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
              gap: { xs: 4, md: 6 },
              alignItems: 'center',
              mt: 3,
            }}
          >
            <Box>
              <Typography sx={{ mb: 2.5, lineHeight: 1.65, color: '#cfcfcf', fontSize: { xs: '15px', sm: '16px' } }}>
                I am {SITE_CONFIG.name}, a Software Engineering student based in{' '}
                <strong style={{ color: '#ffffff', fontWeight: 500 }}>{SITE_CONFIG.location}</strong>. Currently pursuing B.Tech in Electrical and
                Electronics Engineering at VSSUT while developing production-ready full-stack applications with{' '}
                <strong style={{ color: '#ffffff', fontWeight: 500 }}>React, Node.js, Express, Java, Spring Boot, Go</strong>, and modern databases.
              </Typography>

              <Typography sx={{ mb: 2.5, lineHeight: 1.65, color: '#9a9a9a', fontSize: '15px' }}>
                My focus centers around backend performance, clean REST API design, modular component architecture,
                and intuitive user interfaces. I love solving technical bottlenecks and turning ideas into scalable, reliable products.
              </Typography>

              <Typography sx={{ mb: 4, lineHeight: 1.65, color: '#9a9a9a', fontSize: '15px' }}>
                Currently open to software engineering internships and junior developer opportunities where
                I can collaborate with experienced teams and deliver real customer impact.
              </Typography>

              <Button
                variant="contained"
                startIcon={<DownloadIcon sx={{ fontSize: 18 }} />}
                href={SITE_CONFIG.resumeUrl}
                sx={{
                  bgcolor: '#ffffff',
                  color: '#000000',
                  padding: '10px 22px',
                  borderRadius: 999,
                  fontSize: '15px',
                  fontWeight: 500,
                  border: '1px solid #ffffff',
                  '&:hover': {
                    bgcolor: '#ffffff',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Download resume
              </Button>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Box
                sx={{
                  width: { xs: 190, sm: 240, md: 280 },
                  height: { xs: 190, sm: 240, md: 280 },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1px solid #2a2a2a',
                  flexShrink: 0,
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
                    <Typography sx={{ fontSize: '3rem' }}>👨‍💻</Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ── 2. Skills Section ── */}
        <Box component="section" sx={{ padding: { xs: '48px 0', md: '72px 0' }, borderTop: '1px solid #2a2a2a' }}>
          <Typography sx={{ color: '#8ec5ff', fontSize: '14px', marginBottom: '12px', fontWeight: 500 }}>
            Skills
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: 'clamp(26px, 5vw, 44px)',
              letterSpacing: '-.03em',
              fontWeight: 500,
              margin: '0 0 16px',
            }}
          >
            Technical expertise
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '15px', sm: '16px' },
              lineHeight: 1.6,
              color: '#9a9a9a',
              maxWidth: '680px',
              margin: '0 0 32px',
            }}
          >
            Core engineering domains, backend microservices, frontend systems, and developer tooling.
          </Typography>

          <SkillTree />
        </Box>

        {/* ── 3. Education Section ── */}
        <Box component="section" sx={{ padding: { xs: '48px 0', md: '72px 0' }, borderTop: '1px solid #2a2a2a' }}>
          <Typography sx={{ color: '#8ec5ff', fontSize: '14px', marginBottom: '12px', fontWeight: 500 }}>
            Education
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: 'clamp(26px, 5vw, 44px)',
              letterSpacing: '-.03em',
              fontWeight: 500,
              margin: '0 0 28px',
            }}
          >
            Learning path
          </Typography>

          <Box>
            {education.map((edu) => (
              <Box
                key={edu.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '12px',
                  padding: '16px 0',
                  borderBottom: '1px solid #2a2a2a',
                  flexWrap: 'wrap',
                }}
              >
                <Box sx={{ minWidth: { xs: '100%', sm: 'auto' } }}>
                  <Typography component="b" sx={{ fontWeight: 500, color: '#ffffff', fontSize: '16px', display: 'block' }}>
                    {edu.institution}
                  </Typography>
                  <Typography component="span" sx={{ color: '#9a9a9a', fontSize: '14px' }}>
                    {edu.degree} — {edu.field}
                  </Typography>
                </Box>
                <Typography component="span" sx={{ color: '#8ec5ff', fontSize: '14px', fontWeight: 500 }}>
                  {edu.period}
                </Typography>
              </Box>
            ))}

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
              <Box
                component="span"
                sx={{
                  border: '1px solid #2a2a2a',
                  borderRadius: 999,
                  padding: '5px 12px',
                  fontSize: '13px',
                  color: '#dddddd',
                  wordBreak: 'break-word',
                }}
              >
                Data Structures &amp; Algorithms — Udemy (Abdul Bari)
              </Box>
              <Box
                component="span"
                sx={{
                  border: '1px solid #2a2a2a',
                  borderRadius: 999,
                  padding: '5px 12px',
                  fontSize: '13px',
                  color: '#dddddd',
                  wordBreak: 'break-word',
                }}
              >
                MERN-STACK — 30dayscoding
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
