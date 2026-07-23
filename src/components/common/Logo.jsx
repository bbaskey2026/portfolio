import React from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaGem } from 'react-icons/fa';

const Logo = () => {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FaGem style={{ color: 'white', width: 28, height: 28 }} />
      </Box>
      <Typography
        variant="h6"
        sx={{
          color: 'text.primary',
          fontWeight: 700,
          letterSpacing: '-0.02em',
        }}
      >
        Alex Morgan
      </Typography>
    </Box>
  );
};

export default Logo;