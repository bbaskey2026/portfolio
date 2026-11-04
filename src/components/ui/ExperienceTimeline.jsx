import React from 'react';
import { Box, Typography } from '@mui/material';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ExperienceItem = ({ experience, index }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <Box
      ref={ref}
      sx={{
        borderLeft: '1px solid #2a2a2a',
        paddingLeft: '24px',
        marginLeft: '6px',
        pb: index === 0 ? '36px' : '36px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `all 0.4s ease ${index * 0.1}s`,
      }}
    >
      <Typography
        component="h3"
        sx={{
          margin: 0,
          fontWeight: 500,
          fontSize: '22px',
          color: '#ffffff',
        }}
      >
        {experience.role} <span style={{ color: '#9a9a9a', fontWeight: 400 }}>· {experience.company}</span>
      </Typography>

      <Typography
        sx={{
          color: '#8ec5ff',
          fontSize: '14px',
          margin: '4px 0 14px',
        }}
      >
        {experience.period} · {experience.location}
      </Typography>

      <Box
        component="ul"
        sx={{
          margin: 0,
          paddingLeft: '18px',
          color: '#cfcfcf',
        }}
      >
        {experience.description.map((item, i) => (
          <Box
            component="li"
            key={i}
            sx={{
              marginBottom: '8px',
              fontSize: '15px',
              lineHeight: 1.6,
            }}
          >
            {item}
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', mt: '14px' }}>
        {experience.technologies.map((tech) => (
          <Box
            key={tech}
            component="span"
            sx={{
              border: '1px solid #2a2a2a',
              borderRadius: 999,
              padding: '4px 12px',
              fontSize: '12px',
              color: '#cfcfcf',
              display: 'inline-block',
            }}
          >
            {tech}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const ExperienceTimeline = ({ experiences }) => {
  return (
    <Box sx={{ mt: 2 }}>
      {experiences.map((exp, index) => (
        <ExperienceItem key={exp.id} experience={exp} index={index} />
      ))}
    </Box>
  );
};

export default ExperienceTimeline;
