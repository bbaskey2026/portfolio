import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiDocker,
  SiGit,
  SiAmazonaws,
  SiFigma,
  SiJest,
} from 'react-icons/si';
import { FaTools } from 'react-icons/fa';

const ICON_MAP = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'HTML/CSS': SiHtml5,
  HTML: SiHtml5,
  CSS: SiCss3,
  'Material-UI': FaTools,
  'Tailwind CSS': SiTailwindcss,
  Redux: SiRedux,
  'Node.js': SiNodedotjs,
  Python: SiPython,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  GraphQL: SiGraphql,
  Docker: SiDocker,
  Git: SiGit,
  AWS: SiAmazonaws,
  Figma: SiFigma,
  Jest: SiJest,
};

function SkillChart({ name, level = 60, size = 84 }) {
  const Icon = ICON_MAP[name] || FaTools;

  return (
    <Box
      sx={{
        width: size + 20,
        textAlign: 'center',
        p: 1.5,
        m: 0.8,
        backgroundColor: '#0d0d0d',
        border: '1px solid #1f1f1f',
        borderRadius: '10px',
        transition: 'all 0.2s ease',
        '&:hover': {
          borderColor: '#383838',
          transform: 'translateY(-2px)',
        },
      }}
    >
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant="determinate"
          value={100}
          size={size}
          thickness={3.5}
          sx={{ color: '#1a1a1a' }}
        />
        <CircularProgress
          variant="determinate"
          value={level}
          size={size}
          thickness={3.5}
          sx={{
            position: 'absolute',
            left: 0,
            color: '#ffffff',
            strokeLinecap: 'round',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon style={{ width: size * 0.42, height: size * 0.42, color: '#ffffff' }} />
        </Box>
      </Box>

      <Typography
        variant="body2"
        sx={{ mt: 1.2, color: '#ffffff', fontWeight: 600, fontSize: '0.85rem' }}
      >
        {name}
      </Typography>
      <Typography variant="caption" sx={{ color: '#888888', fontSize: '0.75rem' }}>
        {level}%
      </Typography>
    </Box>
  );
}

export default SkillChart;
