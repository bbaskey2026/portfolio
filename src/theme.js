import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#8f8f8f',
    },
    background: {
      default: '#050505',
      paper: '#121212',
    },
    text: {
      primary: '#f7f7f2',
      secondary: '#b2b2ac',
    },
    divider: 'rgba(255,255,255,0.12)',
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.75,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          px: 2.2,
          py: 1,
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))',
          backdropFilter: 'blur(14px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 18px 45px rgba(0, 0, 0, 0.35)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 600,
        },
      },
    },
  },
})

export default theme
