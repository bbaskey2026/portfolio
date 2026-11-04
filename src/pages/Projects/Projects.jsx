import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Stack,
  Alert,
  Skeleton,
} from '@mui/material';
import ProjectCard from '../../components/ui/ProjectCard';
import { projects as fallbackProjects } from '../../store/portfolioData';

const GITHUB_USERNAME = 'bbaskey2026';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`;

const transformRepoToProject = (repo, index) => ({
  id: repo.id,
  title: repo.name
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase()),
  description:
    repo.description || 'A software application project built with modern web technologies and clean architecture.',
  technologies: [
    repo.language,
    ...(repo.topics || []),
  ].filter(Boolean),
  githubUrl: repo.html_url,
  liveUrl: repo.homepage || null,
  stars: repo.stargazers_count,
  forks: repo.forks_count,
  updatedAt: repo.updated_at,
  index,
});

const PlainSkeleton = () => (
  <Box
    sx={{
      borderTop: '1px solid #2a2a2a',
      py: '22px',
      backgroundColor: 'transparent',
    }}
  >
    <Skeleton variant="rectangular" height={24} width="50%" sx={{ mb: 2, bgcolor: '#161616', borderRadius: 999 }} />
    <Skeleton variant="rectangular" height={16} width="85%" sx={{ mb: 1, bgcolor: '#161616', borderRadius: 999 }} />
    <Skeleton variant="rectangular" height={16} width="65%" sx={{ mb: 2, bgcolor: '#161616', borderRadius: 999 }} />
    <Stack direction="row" gap={1}>
      <Skeleton variant="rectangular" height={26} width={65} sx={{ borderRadius: 999, bgcolor: '#161616' }} />
      <Skeleton variant="rectangular" height={26} width={65} sx={{ borderRadius: 999, bgcolor: '#161616' }} />
    </Stack>
  </Box>
);

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(GITHUB_API_URL, {
          headers: {
            Accept: 'application/vnd.github.mercy-preview+json',
          },
        });

        if (!response.ok) {
          setProjectsList(fallbackProjects);
          return;
        }

        const repos = await response.json();
        const transformedProjects = repos
          .filter((repo) => !repo.fork)
          .map((repo, index) => transformRepoToProject(repo, index));

        if (transformedProjects.length > 0) {
          setProjectsList(transformedProjects);
        } else {
          setProjectsList(fallbackProjects);
        }
      } catch (err) {
        setProjectsList(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  const allTechnologies = [
    'All',
    ...new Set(
      projectsList
        .flatMap((p) => p.technologies || [])
        .filter(Boolean)
    ),
  ];

  const filteredProjects =
    filter === 'All'
      ? projectsList
      : projectsList.filter((p) =>
          (p.technologies || []).some(
            (t) => t.toLowerCase() === filter.toLowerCase()
          )
        );

  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        color: '#ffffff',
        minHeight: '85vh',
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
      }}
    >
      <Box
        sx={{
          maxWidth: '1040px',
          margin: '0 auto',
          padding: { xs: '40px 16px', sm: '48px 20px', md: '72px 24px' },
        }}
      >
        <Typography
          sx={{
            color: '#8ec5ff',
            fontSize: '14px',
            marginBottom: '12px',
            fontWeight: 500,
          }}
        >
          Projects
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontSize: 'clamp(28px, 5vw, 44px)',
            letterSpacing: '-.03em',
            fontWeight: 500,
            margin: '0 0 16px',
            color: '#ffffff',
          }}
        >
          Featured work
        </Typography>

        <Typography
          sx={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#cfcfcf',
            maxWidth: '680px',
            margin: '0 0 32px',
          }}
        >
          A collection of full-stack web applications, microservices, open-source repositories and experimental systems.
        </Typography>

        {/* Filter Chips */}
        {!loading && allTechnologies.length > 1 && (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              mb: '36px',
            }}
          >
            {allTechnologies.map((tech) => {
              const isSelected = filter === tech;
              return (
                <Box
                  key={tech}
                  component="button"
                  onClick={() => setFilter(tech)}
                  sx={{
                    background: isSelected ? '#ffffff' : 'transparent',
                    color: isSelected ? '#000000' : '#dddddd',
                    border: '1px solid',
                    borderColor: isSelected ? '#ffffff' : '#2a2a2a',
                    borderRadius: 999,
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: '#3b82f6',
                      color: isSelected ? '#000000' : '#ffffff',
                    },
                  }}
                >
                  {tech}
                </Box>
              );
            })}
          </Box>
        )}

        {error && (
          <Alert
            severity="info"
            sx={{
              mb: 4,
              backgroundColor: '#161616',
              color: '#ffffff',
              border: '1px solid #2a2a2a',
              borderRadius: 0,
            }}
          >
            {error}
          </Alert>
        )}

        {/* Projects Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: '24px', md: '36px' },
          }}
        >
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <PlainSkeleton key={i} />
              ))
            : filteredProjects.map((project, index) => (
                <ProjectCard key={project.id || index} project={project} index={index} />
              ))}
        </Box>

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <Box
            sx={{
              py: 6,
              borderTop: '1px solid #2a2a2a',
              textAlign: 'center',
            }}
          >
            <Typography sx={{ color: '#ffffff', fontSize: '18px', mb: 1 }}>
              No projects found
            </Typography>
            <Typography sx={{ color: '#9a9a9a', fontSize: '14px' }}>
              No projects matched the selected filter "{filter}".
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Projects;
