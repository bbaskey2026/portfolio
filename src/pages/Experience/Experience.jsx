import React from 'react';
import { Box, Typography } from '@mui/material';
import ExperienceTimeline from '../../components/ui/ExperienceTimeline';
import { experiences } from '../../store/portfolioData';

const Experience = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        minHeight: '85vh',
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
          padding: { xs: '40px 16px', sm: '48px 20px', md: '72px 24px' },
        }}
      >
        <Typography
          sx={{
            color: '#8ec5ff',
            fontSize: '14px',
            marginBottom: '12px',
            fontWeight: 500,
          }}
        >
          Experience
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontSize: 'clamp(28px, 5vw, 44px)',
            letterSpacing: '-.03em',
            fontWeight: 500,
            margin: '0 0 16px',
            color: '#ffffff',
          }}
        >
          Where I’ve worked
        </Typography>

        <Typography
          sx={{
            color: '#cfcfcf',
            fontSize: '16px',
            maxWidth: '680px',
            margin: '0 0 40px',
            lineHeight: 1.6,
          }}
        >
          My hands-on development experience building full-stack applications, REST APIs, and production features.
        </Typography>

        <ExperienceTimeline experiences={experiences} />
      </Box>
    </Box>
  );
};

export default Experience;
