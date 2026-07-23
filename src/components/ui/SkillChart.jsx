import React from 'react'
import { Box, Typography, CircularProgress } from '@mui/material'
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
} from 'react-icons/si'
import { FaTools } from 'react-icons/fa'

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
}
// Some brand icons may not be available in the simple-icons package used by react-icons
// Map unknown or missing icons to a generic tools icon (FaTools)

function SkillChart({ name, level = 60, size = 84 }) {
  const Icon = ICON_MAP[name] || FaTools

  return (
    <Box sx={{ width: size, textAlign: 'center', mx: 1, my: 1 }}>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant="determinate"
          value={100}
          size={size}
          thickness={4}
          sx={{ color: 'rgba(255,255,255,0.06)' }}
        />
        <CircularProgress
          variant="determinate"
          value={level}
          size={size}
          thickness={4}
          sx={{ position: 'absolute', left: 0, color: 'primary.main' }}
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
          <Icon style={{ width: size * 0.45, height: size * 0.45, color: 'white' }} />
        </Box>
      </Box>

      <Typography variant="body2" sx={{ mt: 1, color: 'text.primary', fontWeight: 600 }}>
        {name}
      </Typography>
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        {level}%
      </Typography>
    </Box>
  )
}

export default SkillChart
