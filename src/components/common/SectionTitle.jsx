import React from 'react';
import { Typography, Box } from '@mui/material';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const SectionTitle = ({ title, subtitle, align = 'left' }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <Box
      ref={ref}
      sx={{
        mb: 8,
        textAlign: align,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.6s ease',
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          mb: 2,
          color: '#000000',
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
            color: '#666666',
            fontSize: '1.1rem',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;