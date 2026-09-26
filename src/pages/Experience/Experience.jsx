import React from 'react';
import { Box, Container } from '@mui/material';
import SectionTitle from '../../components/common/SectionTitle';
import ExperienceTimeline from '../../components/ui/ExperienceTimeline';
import { experiences } from '../../store/portfolioData';

const Experience = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#000000', minHeight: '80vh', color: '#ededed' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and the organizations I've contributed to."
        />

        <Box sx={{ maxWidth: 840, mx: 'auto' }}>
          <ExperienceTimeline experiences={experiences} />
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;