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
        display: 'flex',
        alignItems: 'center',
        gap: 1.2,
      }}
    >
      <Box
        sx={{
          width: 14,
          height: 14,
          bgcolor: '#000000',
          borderRadius: '2px',
        }}
      />
      <Typography
        variant="h6"
        sx={{
          color: '#000000',
          fontWeight: 800,
          letterSpacing: '-0.5px',
          fontSize: '1.1rem',
        }}
      >
        Bhima Baskey
      </Typography>
    </Box>
  );
};

export default Logo;