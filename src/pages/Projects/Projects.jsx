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
      border: '1px solid #E5E5E5',
      borderRadius: '12px',
      p: 3,
      height: 280,
    }}
  >
    <Skeleton variant="rectangular" height={20} width="60%" sx={{ mb: 2, borderRadius: 1 }} />
    <Skeleton variant="rectangular" height={14} sx={{ mb: 1, borderRadius: 1 }} />
    <Skeleton variant="rectangular" height={14} width="80%" sx={{ mb: 3, borderRadius: 1 }} />
    <Stack direction="row" gap={1} sx={{ mb: 3 }}>
      <Skeleton variant="rectangular" height={28} width={70} sx={{ borderRadius: 2 }} />
      <Skeleton variant="rectangular" height={28} width={70} sx={{ borderRadius: 2 }} />
      <Skeleton variant="rectangular" height={28} width={70} sx={{ borderRadius: 2 }} />
    </Stack>
    <Stack direction="row" gap={2}>
      <Skeleton variant="rectangular" height={36} width={100} sx={{ borderRadius: 1 }} />
      <Skeleton variant="rectangular" height={36} width={100} sx={{ borderRadius: 1 }} />
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
    ...new Set(projects.flatMap((p) => p.technologies)),
  ].filter(Boolean);

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.technologies.includes(filter));

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="All Projects"
          subtitle={`A comprehensive collection of my work fetched live from GitHub (@${GITHUB_USERNAME}).`}
        />

        {/* Error State */}
        {error && (
          <Alert
            severity="error"
            sx={{
              mb: 4,
              borderRadius: '8px',
              border: '1px solid #FFCDD2',
            }}
          >
            {error}
          </Alert>
        )}

        {/* Filter Chips */}
        {!loading && !error && (
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={1}
            sx={{ mb: 6 }}
          >
            {allTechnologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                onClick={() => setFilter(tech)}
                sx={{
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor:
                    filter === tech ? '#000000' : '#E5E5E5',
                  backgroundColor:
                    filter === tech ? '#000000' : '#FFFFFF',
                  color: filter === tech ? '#FFFFFF' : '#666666',
                  fontWeight: filter === tech ? 600 : 400,
                  '&:hover': {
                    backgroundColor:
                      filter === tech ? '#333333' : '#F5F5F5',
                  },
                  transition: 'all 0.2s ease',
                }}
              />
            ))}
          </Stack>
        )}

        {/* Projects Count */}
        {!loading && !error && (
          <Typography
            variant="body2"
            sx={{ color: '#666666', mb: 3 }}
          >
            Showing {filteredProjects.length} of {projects.length} projects
          </Typography>
        )}

        {/* Projects Grid — Loading Skeletons */}
        {loading && (
          <Grid container spacing={3}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <ProjectCardSkeleton />
              </Grid>
            ))}
          </Grid>
        )}

        {/* Projects Grid — Actual Data */}
        {!loading && !error && (
          <Grid container spacing={3}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
                  <ProjectCard project={project} index={index} />
                </Grid>
              ))
            ) : (
              <Grid size={{ xs: 12 }}>
                <Box
                  sx={{
                    textAlign: 'center',
                    py: 8,
                    color: '#666666',
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    No projects found
                  </Typography>
                  <Typography variant="body2">
                    No projects match the selected filter "{filter}".
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Projects;