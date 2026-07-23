import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
  IconButton,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <Card
      ref={ref}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.6s ease ${index * 0.1}s`,
        cursor: 'pointer',
        '&:hover': {
          borderColor: '#000000',
          transform: isVisible ? 'translateY(-4px)' : 'translateY(40px)',
        },
        '&:hover .arrow-icon': {
          transform: 'translate(4px, -4px)',
        },
      }}
    >
      {/* Project Image Placeholder */}
      <Box
        sx={{
          height: 200,
          backgroundColor: '#F5F5F5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid #E5E5E5',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '80%',
            height: '70%',
            backgroundColor: '#EBEBEB',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: '#AAAAAA' }}>
            {project.title}
          </Typography>
        </Box>

        {/* Hover overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            display: 'flex',
            gap: 1,
          }}
        >
          <IconButton
            href={project.githubUrl}
            target="_blank"
            size="small"
            sx={{
              backgroundColor: '#f7fff7',
              border: '1px solid #c4d8bf',
              '&:hover': {
                backgroundColor: '#2f7d3b',
                color: '#FFFFFF',
                borderColor: '#2f7d3b',
              },
            }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            href={project.liveUrl}
            target="_blank"
            size="small"
            sx={{
              backgroundColor: '#f7fff7',
              border: '1px solid #c4d8bf',
              '&:hover': {
                backgroundColor: '#2f7d3b',
                color: '#FFFFFF',
                borderColor: '#2f7d3b',
              },
            }}
          >
            <LaunchIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 1.5,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: '#000000',
            }}
          >
            {project.title}
          </Typography>
          <ArrowOutwardIcon
            className="arrow-icon"
            sx={{
              fontSize: 20,
              color: '#999999',
              transition: 'transform 0.2s ease',
            }}
          />
        </Box>

        <Typography
          variant="body2"
          sx={{
            mb: 3,
            flexGrow: 1,
            color: '#666666',
            lineHeight: 1.7,
          }}
        >
          {project.description}
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={1}>
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                fontSize: '0.75rem',
                height: 28,
                borderColor: '#c4d8bf',
                color: '#375b32',
                backgroundColor: '#f4faf4',
                '&:hover': {
                  borderColor: '#2f7d3b',
                  color: '#2f7d3b',
                },
              }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;