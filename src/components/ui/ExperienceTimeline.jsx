import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ExperienceItem = ({ experience, index }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        gap: { xs: 2, md: 4 },
        pb: 5,
        position: 'relative',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `all 0.5s ease ${index * 0.1}s`,
        '&:last-child': { pb: 0 },
      }}
    >
      {/* Timeline line */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 20,
        }}
      >
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '2px solid #000000',
            boxShadow: '0 0 0 2px #333333',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            width: 1,
            flexGrow: 1,
            backgroundColor: '#222222',
            mt: 1,
          }}
        />
      </Box>

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box
          sx={{
            p: { xs: 2.5, md: 3.5 },
            backgroundColor: '#0a0a0a',
            border: '1px solid #222222',
            borderRadius: '16px',
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
              alignItems: { xs: 'flex-start', sm: 'center' },
              flexDirection: { xs: 'column', sm: 'row' },
              mb: 1,
              gap: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: '#ffffff', fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.2rem' }, letterSpacing: '-0.02em' }}
            >
              {experience.role}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#a1a1a1',
                fontSize: '0.8rem',
                fontFamily: 'monospace',
                backgroundColor: '#141414',
                border: '1px solid #262626',
                borderRadius: '9999px',
                px: 1.2,
                py: 0.3,
                whiteSpace: 'nowrap',
              }}
            >
              {experience.period}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: '#a1a1a1',
              mb: 2.5,
              fontWeight: 500,
              fontSize: '0.95rem',
            }}
          >
            {experience.company} · <span style={{ color: '#777777' }}>{experience.location}</span>
          </Typography>

          <Box component="ul" sx={{ pl: 2, mb: 3 }}>
            {experience.description.map((item, i) => (
              <Box
                component="li"
                key={i}
                sx={{
                  mb: 0.8,
                  color: '#888888',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                }}
              >
                {item}
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, width: '100%', maxWidth: '100%' }}>
            {experience.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  fontSize: '0.75rem',
                  borderRadius: '9999px',
                  px: 1,
                  py: 0.4,
                  backgroundColor: '#141414',
                  color: '#a1a1a1',
                  border: '1px solid #262626',
                  maxWidth: '100%',
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const ExperienceTimeline = ({ experiences }) => {
  return (
    <Box>
      {experiences.map((exp, index) => (
        <ExperienceItem key={exp.id} experience={exp} index={index} />
      ))}
    </Box>
  );
};

export default ExperienceTimeline;