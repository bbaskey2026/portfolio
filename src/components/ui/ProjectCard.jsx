import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import StarIcon from '@mui/icons-material/Star';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ProjectCard = ({ project, index = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const navigate = useNavigate();

  const repoSlug = (project.title || '')
    .toLowerCase()
    .replace(/\s+/g, '-');

  const handleCardClick = () => {
    navigate(`/projects/${repoSlug}`);
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
  };

  const technologies = project.technologies || project.stack || [];

  return (
    <Box
      ref={ref}
      onClick={handleCardClick}
      sx={{
        backgroundColor: 'transparent',
        border: 0,
        borderTop: '1px solid #2a2a2a',
        borderRadius: 0,
        padding: '22px 0',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'border-top-color 0.25s ease, opacity 0.35s ease',
        '&:hover': {
          borderTopColor: '#3b82f6',
        },
        '&:hover .arrow-icon': {
          transform: 'translate(3px, -3px)',
          color: '#8ec5ff',
        },
      }}
    >
      {/* Top Row: Title & Action Icons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          mb: 1,
          gap: 1.5,
          flexWrap: 'wrap',
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontWeight: 500,
            fontSize: { xs: '19px', sm: '21px' },
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 8px',
            flex: '1 1 200px',
            wordBreak: 'break-word',
          }}
        >
          {project.title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.8,
          }}
          onClick={handleIconClick}
        >
          {project.stars > 0 && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.4,
                border: '1px solid #2a2a2a',
                borderRadius: 999,
                px: 1,
                py: 0.2,
              }}
            >
              <StarIcon sx={{ fontSize: 13, color: '#f59e0b' }} />
              <Typography
                variant="caption"
                sx={{ fontSize: '12px', color: '#dddddd', fontWeight: 500 }}
              >
                {project.stars}
              </Typography>
            </Box>
          )}

          {project.githubUrl && (
            <Tooltip title="View GitHub" arrow>
              <IconButton
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  border: '1px solid #2a2a2a',
                  color: '#9a9a9a',
                  p: 0.6,
                  '&:hover': {
                    color: '#ffffff',
                    borderColor: '#3b82f6',
                  },
                }}
              >
                <GitHubIcon sx={{ fontSize: 15 }} />
              </IconButton>
            </Tooltip>
          )}

          {project.liveUrl && (
            <Tooltip title="Live Demo" arrow>
              <IconButton
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  border: '1px solid #2a2a2a',
                  color: '#9a9a9a',
                  p: 0.6,
                  '&:hover': {
                    color: '#ffffff',
                    borderColor: '#3b82f6',
                  },
                }}
              >
                <LaunchIcon sx={{ fontSize: 15 }} />
              </IconButton>
            </Tooltip>
          )}

          <ArrowOutwardIcon
            className="arrow-icon"
            sx={{
              fontSize: 18,
              color: '#6a6a6a',
              transition: 'all 0.2s ease',
              ml: 0.5,
            }}
          />
        </Box>
      </Box>

      {/* Description */}
      <Typography
        sx={{
          color: '#9a9a9a',
          fontSize: '15px',
          lineHeight: 1.55,
          margin: '0 0 10px',
          flexGrow: 1,
        }}
      >
        {project.description}
      </Typography>

      {/* Tech Chips */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          mt: 'auto',
          pt: 1,
        }}
      >
        {technologies.map((tech) => (
          <Box
            key={tech}
            component="span"
            sx={{
              border: '1px solid #2a2a2a',
              borderRadius: 999,
              padding: '4px 12px',
              fontSize: '13px',
              color: '#dddddd',
              display: 'inline-block',
              transition: 'border-color 0.2s ease, color 0.2s ease',
              '&:hover': {
                borderColor: '#3b82f6',
                color: '#ffffff',
              },
            }}
          >
            {tech}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectCard;
