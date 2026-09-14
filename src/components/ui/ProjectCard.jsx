import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import StarIcon from '@mui/icons-material/Star';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import CodeIcon from '@mui/icons-material/Code';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const navigate = useNavigate();

  const repoSlug = project.title
    .toLowerCase()
    .replace(/\s+/g, '-');

  const handleCardClick = () => {
    navigate(`/projects/${repoSlug}`);
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Card
      ref={ref}
      onClick={handleCardClick}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.4s ease ${index * 0.08}s`,
        cursor: 'pointer',
        backgroundColor: '#0a0a0a',
        border: '1px solid #222222',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        '&:hover': {
          borderColor: '#444444',
          transform: 'translateY(-3px)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
        },
        '&:hover .arrow-icon': {
          transform: 'translate(3px, -3px)',
          color: '#ffffff',
        },
      }}
    >
      {/* Project Image Placeholder */}
      <Box
        sx={{
          height: 180,
          backgroundColor: '#111111',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid #1f1f1f',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '85%',
            height: '75%',
            backgroundColor: '#171717',
            border: '1px solid #262626',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1.5,
          }}
        >
          <CodeIcon sx={{ color: '#555555', fontSize: 24 }} />
          <Typography variant="body2" sx={{ color: '#888888', fontWeight: 600, fontSize: '0.85rem' }}>
            {project.title}
          </Typography>
        </Box>

        {/* Top-right Action Badges */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            display: 'flex',
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
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid #2a2a2a',
                borderRadius: '6px',
                px: 0.8,
                py: 0.3,
              }}
            >
              <StarIcon sx={{ fontSize: 13, color: '#F5A623' }} />
              <Typography
                variant="caption"
                sx={{ fontSize: '0.7rem', color: '#ededed', fontWeight: 600 }}
              >
                {project.stars}
              </Typography>
            </Box>
          )}

          {project.forks > 0 && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.4,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid #2a2a2a',
                borderRadius: '6px',
                px: 0.8,
                py: 0.3,
              }}
            >
              <ForkRightIcon sx={{ fontSize: 13, color: '#a1a1a1' }} />
              <Typography
                variant="caption"
                sx={{ fontSize: '0.7rem', color: '#ededed', fontWeight: 600 }}
              >
                {project.forks}
              </Typography>
            </Box>
          )}

          {project.githubUrl && (
            <Tooltip title="View on GitHub" arrow>
              <IconButton
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  backgroundColor: '#141414',
                  border: '1px solid #2a2a2a',
                  color: '#ededed',
                  p: 0.6,
                  '&:hover': {
                    backgroundColor: '#262626',
                    borderColor: '#444444',
                    color: '#ffffff',
                  },
                }}
              >
                <GitHubIcon sx={{ fontSize: 16 }} />
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
                  backgroundColor: '#141414',
                  border: '1px solid #2a2a2a',
                  color: '#ededed',
                  p: 0.6,
                  '&:hover': {
                    backgroundColor: '#262626',
                    borderColor: '#444444',
                    color: '#ffffff',
                  },
                }}
              >
                <LaunchIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>

      {/* Card Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 3,
        }}
      >
        {/* Title Row */}
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
              color: '#ffffff',
              fontSize: '1.15rem',
              letterSpacing: '-0.02em',
              flex: 1,
              pr: 1,
            }}
          >
            {project.title}
          </Typography>
          <ArrowOutwardIcon
            className="arrow-icon"
            sx={{
              fontSize: 18,
              color: '#666666',
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
          />
        </Box>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            mb: 3,
            flexGrow: 1,
            color: '#888888',
            lineHeight: 1.6,
            fontSize: '0.875rem',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </Typography>

        {/* Tech Chips */}
        <Stack direction="row" flexWrap="wrap" gap={0.8}>
          {project.technologies.slice(0, 5).map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                fontSize: '0.72rem',
                height: 24,
                borderColor: '#262626',
                color: '#a1a1a1',
                backgroundColor: '#141414',
                border: '1px solid #262626',
              }}
            />
          ))}
          {project.technologies.length > 5 && (
            <Chip
              label={`+${project.technologies.length - 5}`}
              size="small"
              sx={{
                fontSize: '0.72rem',
                height: 24,
                borderColor: '#262626',
                color: '#666666',
                backgroundColor: '#111111',
                border: '1px solid #222222',
              }}
            />
          )}
        </Stack>

        {/* View Details hint */}
        <Typography
          variant="caption"
          sx={{
            mt: 2,
            color: '#ffffff',
            fontWeight: 500,
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            opacity: 0,
            transition: 'opacity 0.2s ease',
            '.MuiCard-root:hover &': {
              opacity: 1,
            },
          }}
        >
          View repository details →
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;