import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMui,
  SiVite,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPostman,
  SiVisualstudiocode,
  SiLinux,
  SiFigma,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiDocker,
  SiPython,
} from 'react-icons/si';
import { FaJava, FaCode, FaServer, FaTools } from 'react-icons/fa';

export const SKILL_METADATA = {
  React: { icon: SiReact, color: '#61DAFB', label: 'Frontend' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E', label: 'Frontend' },
  'HTML/CSS': { icon: SiHtml5, color: '#E34F26', label: 'Frontend' },
  'Material-UI': { icon: SiMui, color: '#007FFF', label: 'Frontend' },
  Vite: { icon: SiVite, color: '#646CFF', label: 'Frontend' },
  TypeScript: { icon: SiTypescript, color: '#3178C6', label: 'Frontend' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8', label: 'Frontend' },
  'Next.js': { icon: SiNextdotjs, color: '#FFFFFF', label: 'Frontend' },

  Java: { icon: FaJava, color: '#EA2D2E', label: 'Backend' },
  'Spring Boot': { icon: SiSpringboot, color: '#6DB33F', label: 'Backend' },
  'Node.js': { icon: SiNodedotjs, color: '#5FA04E', label: 'Backend' },
  Express: { icon: SiExpress, color: '#EDEDED', label: 'Backend' },
  MongoDB: { icon: SiMongodb, color: '#47A248', label: 'Backend' },
  MySQL: { icon: SiMysql, color: '#4479A1', label: 'Backend' },
  'REST APIs': { icon: FaServer, color: '#60A5FA', label: 'Backend' },
  Python: { icon: SiPython, color: '#3776AB', label: 'Backend' },

  Git: { icon: SiGit, color: '#F05032', label: 'Tools' },
  Postman: { icon: SiPostman, color: '#FF6C37', label: 'Tools' },
  'VS Code': { icon: SiVisualstudiocode, color: '#007ACC', label: 'Tools' },
  Linux: { icon: SiLinux, color: '#FCC624', label: 'Tools' },
  Figma: { icon: SiFigma, color: '#F24E1E', label: 'Tools' },
  Docker: { icon: SiDocker, color: '#2496ED', label: 'Tools' },
};

function SkillChart({ name, level = 70 }) {
  const meta = SKILL_METADATA[name] || { icon: FaCode, color: '#ffffff' };
  const Icon = meta.icon;

  const getProficiencyText = (val) => {
    if (val >= 75) return 'Advanced';
    if (val >= 68) return 'Proficient';
    return 'Intermediate';
  };

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: '#0c0c0c',
        border: '1px solid #1f1f1f',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.2,
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          borderColor: '#383838',
          backgroundColor: '#141414',
          transform: 'translateY(-2px)',
          boxShadow: `0 8px 24px -6px rgba(0, 0, 0, 0.8), 0 0 15px -3px ${meta.color}18`,
          '& .skill-icon-wrap': {
            transform: 'scale(1.08)',
            borderColor: meta.color,
            boxShadow: `0 0 12px ${meta.color}33`,
          },
          '& .skill-progress-bar': {
            backgroundColor: meta.color,
          },
        },
      }}
    >
      {/* Top row: Icon + Name + Percentage */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            className="skill-icon-wrap"
            sx={{
              width: 36,
              height: 36,
              borderRadius: '10px',
              backgroundColor: '#171717',
              border: '1px solid #282828',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: meta.color,
              transition: 'all 0.25s ease',
              flexShrink: 0,
            }}
          >
            <Icon size={18} />
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: '#ffffff',
                fontSize: '0.9rem',
                lineHeight: 1.2,
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#777777',
                fontSize: '0.72rem',
                fontWeight: 500,
              }}
            >
              {getProficiencyText(level)}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="caption"
          sx={{
            color: '#a1a1a1',
            fontFamily: 'monospace',
            fontWeight: 600,
            fontSize: '0.8rem',
            backgroundColor: '#141414',
            border: '1px solid #222222',
            borderRadius: '9999px',
            px: 1,
            py: 0.2,
          }}
        >
          {level}%
        </Typography>
      </Box>

      {/* Sleek Minimal Progress Line */}
      <LinearProgress
        variant="determinate"
        value={level}
        sx={{
          height: 4,
          borderRadius: 2,
          backgroundColor: '#1a1a1a',
          '& .MuiLinearProgress-bar': {
            className: 'skill-progress-bar',
            backgroundColor: meta.color,
            borderRadius: 2,
            transition: 'transform 0.4s ease, background-color 0.2s ease',
          },
        }}
      />
    </Box>
  );
}

export default SkillChart;
