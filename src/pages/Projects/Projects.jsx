import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Chip,
  Stack,
} from '@mui/material';
import SectionTitle from '../../components/common/SectionTitle';
import ProjectCard from '../../components/ui/ProjectCard';
import { projects } from '../../store/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const allTechnologies = [
    'All',
    ...new Set(projects.flatMap((p) => p.technologies)),
  ];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.technologies.includes(filter));

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="All Projects"
          subtitle="A comprehensive collection of my work, from web applications to open-source contributions."
        />

        {/* Filter Chips */}
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

        {/* Projects Grid */}
        <Grid container spacing={3}>
          {filteredProjects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;