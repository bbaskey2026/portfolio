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
import SectionTitle from '../../components/common/SectionTitle';
import ProjectCard from '../../components/ui/ProjectCard';

const GITHUB_USERNAME = 'bbaskey2026';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`;

const transformRepoToProject = (repo, index) => ({
  id: repo.id,
  title: repo.name
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase()),
  description:
    repo.description || 'No description provided for this project.',
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
      border: '1px solid #222222',
      borderRadius: '12px',
      backgroundColor: '#0a0a0a',
      p: 3,
      height: 280,
    }}
  >
    <Skeleton variant="rectangular" height={20} width="60%" sx={{ mb: 2, borderRadius: 1, backgroundColor: '#171717' }} />
    <Skeleton variant="rectangular" height={14} sx={{ mb: 1, borderRadius: 1, backgroundColor: '#171717' }} />
    <Skeleton variant="rectangular" height={14} width="80%" sx={{ mb: 3, borderRadius: 1, backgroundColor: '#171717' }} />
    <Stack direction="row" gap={1} sx={{ mb: 3 }}>
      <Skeleton variant="rectangular" height={24} width={60} sx={{ borderRadius: 1, backgroundColor: '#171717' }} />
      <Skeleton variant="rectangular" height={24} width={60} sx={{ borderRadius: 1, backgroundColor: '#171717' }} />
      <Skeleton variant="rectangular" height={24} width={60} sx={{ borderRadius: 1, backgroundColor: '#171717' }} />
    </Stack>
    <Stack direction="row" gap={2}>
      <Skeleton variant="rectangular" height={32} width={90} sx={{ borderRadius: 1, backgroundColor: '#171717' }} />
      <Skeleton variant="rectangular" height={32} width={90} sx={{ borderRadius: 1, backgroundColor: '#171717' }} />
    </Stack>
  </Box>
);

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState([]);
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
          if (response.status === 403) {
            throw new Error('GitHub API rate limit exceeded. Please try again later.');
          }
          if (response.status === 404) {
            throw new Error(`GitHub user "${GITHUB_USERNAME}" not found.`);
          }
          throw new Error(`Failed to fetch projects (Status: ${response.status})`);
        }

        const repos = await response.json();

        const transformedProjects = repos
          .filter((repo) => !repo.fork)
          .map((repo, index) => transformRepoToProject(repo, index));

        setProjects(transformedProjects);
      } catch (err) {
        setError(err.message || 'An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  const allTechnologies = [
    'All',
    ...new Set(
      projects
        .flatMap((p) => p.technologies)
        .filter(Boolean)
    ),
  ];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) =>
          p.technologies.some(
            (t) => t.toLowerCase() === filter.toLowerCase()
          )
        );

  return (
    <Box sx={{ py: 8, backgroundColor: '#000000', color: '#ededed', minHeight: '80vh' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Projects"
          subtitle="All my repositories and projects directly synced from GitHub."
        />

        {/* Error Alert */}
        {error && (
          <Alert
            severity="error"
            sx={{
              mb: 4,
              borderRadius: '8px',
              backgroundColor: '#2d0607',
              color: '#f87171',
              border: '1px solid #991b1b',
            }}
          >
            {error}
          </Alert>
        )}

        {/* Filter Chips */}
        {!loading && allTechnologies.length > 1 && (
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={1}
            sx={{ mb: 6 }}
          >
            {allTechnologies.map((tech) => {
              const isSelected = filter === tech;
              return (
                <Chip
                  key={tech}
                  label={tech}
                  onClick={() => setFilter(tech)}
                  sx={{
                    borderRadius: '6px',
                    px: 1,
                    py: 0.5,
                    fontSize: '0.8rem',
                    fontWeight: isSelected ? 600 : 400,
                    border: '1px solid',
                    borderColor: isSelected ? '#ffffff' : '#262626',
                    backgroundColor: isSelected ? '#ffffff' : '#0e0e0e',
                    color: isSelected ? '#000000' : '#a1a1a1',
                    transition: 'all 0.15s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: isSelected ? '#eaeaea' : '#1a1a1a',
                      color: isSelected ? '#000000' : '#ffffff',
                    },
                  }}
                />
              );
            })}
          </Stack>
        )}

        {/* Results Counter */}
        {!loading && (
          <Typography
            variant="body2"
            sx={{ color: '#666666', mb: 4, fontSize: '0.875rem' }}
          >
            Showing {filteredProjects.length}{' '}
            {filteredProjects.length === 1 ? 'project' : 'projects'}
          </Typography>
        )}

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <Grid size={{ xs: 12, md: 4 }} key={i}>
                  <ProjectCardSkeleton />
                </Grid>
              ))
            : filteredProjects.map((project, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={project.id}>
                  <ProjectCard project={project} index={index} />
                </Grid>
              ))}
        </Grid>

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && !error && (
          <Box
            sx={{
              textAlign: 'center',
              py: 12,
              border: '1px solid #1f1f1f',
              borderRadius: '12px',
              backgroundColor: '#0a0a0a',
            }}
          >
            <Typography variant="h5" sx={{ mb: 1, color: '#ffffff' }}>
              No projects found
            </Typography>
            <Typography variant="body2" sx={{ color: '#888888' }}>
              No projects matched the selected filter "{filter}".
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Projects;