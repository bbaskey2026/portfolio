import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const SkillChip = ({ name, level }) => {
  return (
    <Box sx={{ mb: 2.5 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontWeight: 500, color: '#ffffff', fontSize: '0.9rem' }}
        >
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#8ec5ff', fontSize: '0.85rem', fontWeight: 500 }}>
          {level}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={level}
        sx={{
          height: 6,
          borderRadius: 999,
          backgroundColor: '#2a2a2a',
          '& .MuiLinearProgress-bar': {
            background: 'linear-gradient(90deg, #1d4ed8, #3b82f6 50%, #8ec5ff)',
            borderRadius: 999,
          },
        }}
      />
    </Box>
  );
};

export default SkillChip;
