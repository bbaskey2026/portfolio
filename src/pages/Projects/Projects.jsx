import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Chip,
  Stack,
  Alert,
  Skeleton,
  Typography,
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

const ProjectCardSkeleton = () => (
  <Box
    sx={{
      border: '1px solid #e5e5e5',
      borderRadius: 2,
      backgroundColor: '#ffffff',
      p: 3.5,
      height: 280,
    }}
  >
    <Skeleton variant="rectangular" height={22} width="65%" sx={{ mb: 2, borderRadius: 1, bgcolor: '#f5f5f5' }} />
    <Skeleton variant="rectangular" height={14} sx={{ mb: 1, borderRadius: 1, bgcolor: '#f5f5f5' }} />
    <Skeleton variant="rectangular" height={14} width="85%" sx={{ mb: 3, borderRadius: 1, bgcolor: '#f5f5f5' }} />
    <Stack direction="row" gap={1} sx={{ mb: 3 }}>
      <Skeleton variant="rectangular" height={26} width={65} sx={{ borderRadius: 1, bgcolor: '#f5f5f5' }} />
      <Skeleton variant="rectangular" height={26} width={65} sx={{ borderRadius: 1, bgcolor: '#f5f5f5' }} />
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
          // Fallback gracefully to portfolioData
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
        // Use local fallback
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
    <Box sx={{ py: { xs: 6, sm: 8, md: 12 }, backgroundColor: '#ffffff', color: '#000000', minHeight: '85vh', width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3, md: 4 } }}>
        {/* Editorial Two-Column Header */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '180px 1fr',
            },
            gap: {
              xs: 2.5,
              md: 8,
            },
            mb: { xs: 4, md: 6 },
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2,
              color: '#000000',
            }}
          >
            PROJECTS
          </Typography>

          <Box sx={{ minWidth: 0, width: '100%' }}>
            <Typography
              sx={{
                fontSize: {
                  xs: 24,
                  sm: 32,
                  md: 40,
                },
                lineHeight: 1.2,
                fontWeight: 700,
                letterSpacing: '-1px',
                color: '#000000',
                mb: 2,
                wordBreak: 'break-word',
              }}
            >
              Work & Code Repositories
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18 },
                lineHeight: 1.8,
                color: '#555555',
                maxWidth: 750,
                mb: 4,
                wordBreak: 'break-word',
              }}
            >
              A collection of open-source projects, web applications, backend APIs, and systems.
            </Typography>

            {/* Filter Chips */}
            {!loading && allTechnologies.length > 1 && (
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1}
                sx={{ mb: 3 }}
              >
                {allTechnologies.map((tech) => {
                  const isSelected = filter === tech;
                  return (
                    <Chip
                      key={tech}
                      label={tech}
                      onClick={() => setFilter(tech)}
                      sx={{
                        borderRadius: 1,
                        px: 1.5,
                        py: 2,
                        fontSize: '0.88rem',
                        fontWeight: isSelected ? 700 : 500,
                        border: '1px solid',
                        borderColor: isSelected ? '#000000' : '#e5e5e5',
                        backgroundColor: isSelected ? '#000000' : '#ffffff',
                        color: isSelected ? '#ffffff' : '#444444',
                        transition: 'all 0.15s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: isSelected ? '#222222' : '#f5f5f5',
                          borderColor: '#000000',
                          color: isSelected ? '#ffffff' : '#000000',
                        },
                      }}
                    />
                  );
                })}
              </Stack>
            )}

            {!loading && (
              <Typography
                variant="body2"
                sx={{ color: '#777777', fontSize: '0.875rem' }}
              >
                Showing {filteredProjects.length}{' '}
                {filteredProjects.length === 1 ? 'project' : 'projects'}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Error Alert */}
        {error && (
          <Alert
            severity="info"
            sx={{
              mb: 4,
              borderRadius: 1,
              backgroundColor: '#f5f5f5',
              color: '#000000',
              border: '1px solid #e5e5e5',
            }}
          >
            {error}
          </Alert>
        )}

        {/* Projects Grid */}
        <Grid container spacing={3.5}>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <Grid size={{ xs: 12, md: 4 }} key={i}>
                  <ProjectCardSkeleton />
                </Grid>
              ))
            : filteredProjects.map((project, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={project.id || index}>
                  <ProjectCard project={project} index={index} />
                </Grid>
              ))}
        </Grid>

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <Box
            sx={{
              textAlign: 'center',
              py: 10,
              border: '1px solid #e5e5e5',
              borderRadius: 2,
              backgroundColor: '#fafafa',
              mt: 4,
            }}
          >
            <Typography variant="h6" sx={{ mb: 1, color: '#000000', fontWeight: 700 }}>
              No projects found
            </Typography>
            <Typography variant="body2" sx={{ color: '#666666' }}>
              No projects matched the selected filter "{filter}".
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Projects;