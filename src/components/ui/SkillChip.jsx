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
          sx={{ fontWeight: 500, color: '#000000' }}
        >
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#999999' }}>
          {level}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={level}
        sx={{
          height: 4,
          borderRadius: 2,
          backgroundColor: '#F0F0F0',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#000000',
            borderRadius: 2,
          },
        }}
      />
    </Box>
  );
};

export default SkillChip;