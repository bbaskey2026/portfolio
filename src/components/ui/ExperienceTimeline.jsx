import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ExperienceItem = ({ experience, index }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        gap: { xs: 2, md: 4 },
        pb: 6,
        position: 'relative',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s ease ${index * 0.15}s`,
        '&:last-child': { pb: 0 },
      }}
    >
      {/* Timeline line */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 20,
        }}
      >
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            border: '2px solid #000000',
            backgroundColor: '#FFFFFF',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            width: 1,
            flexGrow: 1,
            backgroundColor: '#E5E5E5',
            mt: 1,
          }}
        />
      </Box>

      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            p: 3,
            border: '1px solid #E5E5E5',
            borderRadius: 2,
            '&:hover': {
              borderColor: '#000000',
            },
            transition: 'border-color 0.2s ease',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              flexDirection: { xs: 'column', sm: 'row' },
              mb: 1,
              gap: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: '#000000', fontWeight: 600 }}
            >
              {experience.role}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#999999',
                whiteSpace: 'nowrap',
              }}
            >
              {experience.period}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: '#666666',
              mb: 2,
              fontWeight: 500,
            }}
          >
            {experience.company} · {experience.location}
          </Typography>

          <Box component="ul" sx={{ pl: 2, mb: 2 }}>
            {experience.description.map((item, i) => (
              <Box
                component="li"
                key={i}
                sx={{
                  mb: 0.5,
                  color: '#444444',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                }}
              >
                {item}
              </Box>
            ))}
          </Box>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {experience.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  fontSize: '0.75rem',
                  height: 26,
                  backgroundColor: '#F5F5F5',
                  color: '#666666',
                  border: 'none',
                }}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

const ExperienceTimeline = ({ experiences }) => {
  return (
    <Box>
      {experiences.map((exp, index) => (
        <ExperienceItem key={exp.id} experience={exp} index={index} />
      ))}
    </Box>
  );
};

export default ExperienceTimeline;