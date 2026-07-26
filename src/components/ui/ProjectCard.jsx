// src/components/ui/ProjectCard.jsx
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
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const navigate = useNavigate();

  // Convert title to URL-friendly repo name slug
  const repoSlug = project.title
    .toLowerCase()
    .replace(/\s+/g, '-');

  const handleCardClick = () => {
    navigate(`/projects/${repoSlug}`);
  };

  const handleIconClick = (e) => {
    // Stop card click from firing when clicking icon buttons
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
      {/* ── Project Image Placeholder ─────────────────────────────────────── */}
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

        {/* ── Top-right Icon Buttons ──────────────────────────────────────── */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            display: 'flex',
            gap: 1,
          }}
          onClick={handleIconClick}
        >
          {/* Stars & Forks badges */}
          {project.stars > 0 && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.4,
                backgroundColor: '#f7fff7',
                border: '1px solid #c4d8bf',
                borderRadius: '6px',
                px: 1,
                py: 0.3,
              }}
            >
              <StarIcon sx={{ fontSize: 12, color: '#F5A623' }} />
              <Typography
                variant="caption"
                sx={{ fontSize: '0.68rem', color: '#375b32', fontWeight: 600 }}
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
                backgroundColor: '#f7fff7',
                border: '1px solid #c4d8bf',
                borderRadius: '6px',
                px: 1,
                py: 0.3,
              }}
            >
              <ForkRightIcon sx={{ fontSize: 12, color: '#375b32' }} />
              <Typography
                variant="caption"
                sx={{ fontSize: '0.68rem', color: '#375b32', fontWeight: 600 }}
              >
                {project.forks}
              </Typography>
            </Box>
          )}

          {/* GitHub Button */}
          {project.githubUrl && (
            <Tooltip title="View on GitHub" arrow>
              <IconButton
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
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
            </Tooltip>
          )}

          {/* Live Demo Button — only shown if liveUrl exists */}
          {project.liveUrl && (
            <Tooltip title="Live Demo" arrow>
              <IconButton
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
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
            </Tooltip>
          )}
        </Box>
      </Box>

      {/* ── Card Content ─────────────────────────────────────────────────── */}
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
              color: '#000000',
              flex: 1,
              pr: 1,
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
            color: '#666666',
            lineHeight: 1.7,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </Typography>

        {/* Tech Chips */}
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {project.technologies.slice(0, 5).map((tech) => (
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
          {project.technologies.length > 5 && (
            <Chip
              label={`+${project.technologies.length - 5}`}
              size="small"
              variant="outlined"
              sx={{
                fontSize: '0.75rem',
                height: 28,
                borderColor: '#E5E5E5',
                color: '#999999',
                backgroundColor: '#FAFAFA',
              }}
            />
          )}
        </Stack>

        {/* View Details hint */}
        <Typography
          variant="caption"
          sx={{
            mt: 2,
            color: '#2f7d3b',
            fontWeight: 600,
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
          Click to view full details →
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;