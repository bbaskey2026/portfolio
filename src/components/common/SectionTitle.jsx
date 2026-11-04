import React from 'react';
import { Typography, Box } from '@mui/material';

const SectionTitle = ({ tag, title, subtitle, align = 'left' }) => {
  return (
    <Box sx={{ mb: 4, textAlign: align }}>
      {tag && (
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#8ec5ff',
            mb: 1.2,
          }}
        >
          {tag}
        </Typography>
      )}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          mb: subtitle ? 1.5 : 0,
          color: '#ffffff',
          letterSpacing: '-0.03em',
          fontWeight: 500,
          fontSize: 'clamp(28px, 5vw, 44px)',
          lineHeight: 1.15,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            maxWidth: 680,
            mx: align === 'center' ? 'auto' : 0,
            color: '#cfcfcf',
            fontSize: '1rem',
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
