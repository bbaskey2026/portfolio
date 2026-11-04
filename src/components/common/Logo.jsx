import React from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.2,
      }}
    >
      <Box
        sx={{
          width: 8,
          height: 8,
          bgcolor: '#3b82f6',
          borderRadius: '50%',
          boxShadow: '0 0 10px #3b82f6',
        }}
      />
      <Typography
        sx={{
          color: '#ffffff',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          fontSize: '1.25rem',
          fontFamily: '"Inter", sans-serif',
          '& span': {
            fontWeight: 300,
            color: '#cfcfcf',
          },
        }}
      >
        Bhima<span> Baskey</span>
      </Typography>
    </Box>
  );
};

export default Logo;
