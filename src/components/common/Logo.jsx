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
        gap: 1.5,
      }}
    >
      {/* Vercel-style geometric triangle glyph */}
      <Box
        sx={{
          width: 24,
          height: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 75 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M37.5 0L75 65H0L37.5 0Z" fill="#FFFFFF" />
        </svg>
      </Box>
      <Typography
        variant="h6"
        sx={{
          color: '#ffffff',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          fontSize: '1rem',
        }}
      >
        Bhima Baskey
      </Typography>
    </Box>
  );
};

export default Logo;