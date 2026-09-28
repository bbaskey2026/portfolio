import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import ExperienceTimeline from '../../components/ui/ExperienceTimeline';
import { experiences } from '../../store/portfolioData';

const Experience = () => {
  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 12 }, backgroundColor: '#ffffff', minHeight: '85vh', color: '#000000', width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3, md: 4 } }}>
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
            EXPERIENCE
          </Typography>

          <Box sx={{ minWidth: 0, width: '100%' }}>
            <Typography
              sx={{
                fontSize: {
                  xs: 24,
                  sm: 32,
                  md: 40,
                },
                lineHeight: 1.2,
                fontWeight: 700,
                letterSpacing: '-1px',
                color: '#000000',
                mb: 2,
                wordBreak: 'break-word',
              }}
            >
              Work Experience & Roles
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18 },
                lineHeight: 1.8,
                color: '#555555',
                maxWidth: 750,
                mb: { xs: 4, md: 6 },
                wordBreak: 'break-word',
              }}
            >
              My hands-on development experience building full-stack applications, REST APIs,
              and contributing to academic and independent projects.
            </Typography>

            <ExperienceTimeline experiences={experiences} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;