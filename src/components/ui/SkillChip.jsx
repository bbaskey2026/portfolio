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
          sx={{ fontWeight: 500, color: '#ededed', fontSize: '0.9rem' }}
        >
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#888888', fontSize: '0.85rem' }}>
          {level}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={level}
        sx={{
          height: 4,
          borderRadius: 2,
          backgroundColor: '#1a1a1a',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#ffffff',
            borderRadius: 2,
          },
        }}
      />
    </Box>
  );
};

export default SkillChip;