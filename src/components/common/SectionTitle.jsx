import React from 'react';
import { Typography, Box } from '@mui/material';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const SectionTitle = ({ title, subtitle, align = 'left' }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <Box
      ref={ref}
      sx={{
        mb: 6,
        textAlign: align,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.5s ease',
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          mb: 1.5,
          color: '#ffffff',
          letterSpacing: '-0.03em',
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            maxWidth: 600,
            mx: align === 'center' ? 'auto' : 0,
            color: '#888888',
            fontSize: '1.05rem',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;