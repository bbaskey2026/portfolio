import React from 'react';
import { Typography, Box } from '@mui/material';

const SectionTitle = ({ tag, title, subtitle, align = 'left' }) => {
  return (
    <Box sx={{ mb: 5, textAlign: align }}>
      {tag && (
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: 2,
            color: '#000000',
            mb: 2,
            textTransform: 'uppercase',
          }}
        >
          {tag}
        </Typography>
      )}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          mb: 1.5,
          color: '#000000',
          letterSpacing: '-1.5px',
          fontWeight: 800,
          fontSize: { xs: '2rem', md: '2.5rem' },
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            maxWidth: 700,
            mx: align === 'center' ? 'auto' : 0,
            color: '#555555',
            fontSize: '1.05rem',
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;