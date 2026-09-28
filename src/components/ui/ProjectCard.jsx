import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Chip,
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
    <Card
      ref={ref}
      elevation={0}
      onClick={handleCardClick}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#ffffff',
        border: '1px solid #e5e5e5',
        borderRadius: 2,
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, opacity 0.4s ease ${index * 0.05}s`,
        '&:hover': {
          borderColor: '#cccccc',
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.06)',
        },
        '&:hover .arrow-icon': {
          transform: 'translate(3px, -3px)',
          color: '#000000',
        },
      }}
    >
      <CardContent
        sx={{
          p: 3.5,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Top Row: Title & Action Icons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 2,
            gap: 1.5,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#000000',
              fontSize: { xs: '1.2rem', md: '1.3rem' },
              letterSpacing: '-0.5px',
              flex: 1,
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
                  bgcolor: '#f5f5f5',
                  border: '1px solid #e5e5e5',
                  borderRadius: 1,
                  px: 0.8,
                  py: 0.3,
                }}
              >
                <StarIcon sx={{ fontSize: 13, color: '#f59e0b' }} />
                <Typography
                  variant="caption"
                  sx={{ fontSize: '0.75rem', color: '#000000', fontWeight: 600 }}
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
                    bgcolor: '#f5f5f5',
                    border: '1px solid #e5e5e5',
                    color: '#000000',
                    p: 0.6,
                    '&:hover': {
                      bgcolor: '#ebebeb',
                      borderColor: '#000000',
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
                    bgcolor: '#f5f5f5',
                    border: '1px solid #e5e5e5',
                    color: '#000000',
                    p: 0.6,
                    '&:hover': {
                      bgcolor: '#ebebeb',
                      borderColor: '#000000',
                    },
                  }}
                >
                  <LaunchIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Tooltip>
            )}

            <ArrowOutwardIcon
              className="arrow-icon"
              sx={{
                fontSize: 20,
                color: '#888888',
                transition: 'all 0.2s ease',
                ml: 0.5,
              }}
            />
          </Box>
        </Box>

        {/* Description */}
        <Typography
          sx={{
            color: '#555555',
            lineHeight: 1.7,
            fontSize: '0.95rem',
            mb: 3,
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
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
          }}
        >
          {technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                bgcolor: '#f1f1f1',
                color: '#000000',
                border: '1px solid #e5e5e5',
                borderRadius: 1,
                fontWeight: 500,
                fontSize: '0.8rem',
                px: 0.5,
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;