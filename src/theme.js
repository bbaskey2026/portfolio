import { createTheme } from '@mui/material/styles';

const fontPrimary = 'Inter, "Helvetica Neue", Arial, sans-serif';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#dddddd',
      contrastText: '#000000',
    },
    secondary: {
      main: '#3b82f6',
      light: '#8ec5ff',
      dark: '#1d4ed8',
      contrastText: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#000000',
      subtle: '#161616',
    },
    text: {
      primary: '#ffffff',
      secondary: '#9a9a9a',
      disabled: '#6a6a6a',
    },
    divider: '#2a2a2a',
    action: {
      hover: 'rgba(255, 255, 255, 0.05)',
      selected: 'rgba(59, 130, 246, 0.12)',
      disabled: '#444444',
    },
    custom: {
      bg: '#000000',
      bg2: '#161616',
      card: 'transparent',
      line: '#2a2a2a',
      text: '#ffffff',
      mute: '#9a9a9a',
      sub: '#cfcfcf',
      g1: '#8ec5ff',
      g2: '#3b82f6',
      g3: '#1d4ed8',
      border: '#2a2a2a',
      borderHover: '#3b82f6',
      borderActive: '#8ec5ff',
      cardBg: 'transparent',
      cardAltBg: 'transparent',
      tagBg: 'transparent',
      tagText: '#dddddd',
      navBg: 'rgba(0, 0, 0, 0.85)',
      badge: '#8ec5ff',
    },
  },
  typography: {
    fontFamily: fontPrimary,
    h1: {
      fontFamily: fontPrimary,
      fontSize: 'clamp(38px, 8vw, 68px)',
      fontWeight: 500,
      letterSpacing: '-0.04em',
      lineHeight: 1.03,
      color: '#ffffff',
    },
    h2: {
      fontFamily: fontPrimary,
      fontSize: 'clamp(28px, 5vw, 44px)',
      fontWeight: 500,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
      color: '#ffffff',
    },
    h3: {
      fontFamily: fontPrimary,
      fontSize: '21px',
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.25,
      color: '#ffffff',
    },
    h4: {
      fontFamily: fontPrimary,
      fontSize: '1.35rem',
      fontWeight: 500,
      letterSpacing: '-0.02em',
      color: '#ffffff',
    },
    h5: {
      fontFamily: fontPrimary,
      fontSize: '1.15rem',
      fontWeight: 500,
      letterSpacing: '-0.015em',
      color: '#ffffff',
    },
    h6: {
      fontFamily: fontPrimary,
      fontSize: '1rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: '#ffffff',
    },
    body1: {
      fontSize: '16px',
      lineHeight: 1.6,
      color: '#cfcfcf',
    },
    body2: {
      fontSize: '15px',
      lineHeight: 1.5,
      color: '#9a9a9a',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '-0.01em',
      fontFamily: fontPrimary,
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000000',
          color: '#ffffff',
          fontFamily: fontPrimary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '10px 22px',
          fontSize: '15px',
          fontWeight: 500,
          textTransform: 'none',
          boxShadow: 'none',
          border: '1px solid transparent',
          gap: '8px',
          transition: 'transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: 'none',
          },
        },
        contained: {
          backgroundColor: '#ffffff',
          color: '#000000',
          border: '1px solid #ffffff',
          '&:hover': {
            backgroundColor: '#ffffff',
            transform: 'translateY(-2px)',
            boxShadow: 'none',
          },
        },
        outlined: {
          borderColor: '#2a2a2a',
          color: '#ffffff',
          backgroundColor: 'transparent',
          '&:hover': {
            borderColor: '#3b82f6',
            backgroundColor: 'transparent',
            transform: 'translateY(-2px)',
          },
        },
        text: {
          color: '#cfcfcf',
          '&:hover': {
            color: '#ffffff',
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          border: 'none',
          borderTop: '1px solid #2a2a2a',
          borderRadius: 0,
          boxShadow: 'none',
          padding: '22px 0',
          transition: 'border-top-color 0.3s ease',
          '&:hover': {
            borderTopColor: '#3b82f6',
            transform: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'transparent',
          color: '#ffffff',
          boxShadow: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(12px)',
          color: '#ffffff',
          borderBottom: '1px solid #2a2a2a',
          boxShadow: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          backgroundColor: 'transparent',
          color: '#dddddd',
          border: '1px solid #2a2a2a',
          fontSize: '13px',
          fontWeight: 400,
          padding: '6px 14px',
          height: 'auto',
          transition: 'border-color 0.2s ease, color 0.2s ease',
          '&:hover': {
            borderColor: '#3b82f6',
            color: '#ffffff',
            backgroundColor: 'transparent',
          },
        },
        outlined: {
          borderColor: '#2a2a2a',
          backgroundColor: 'transparent',
          color: '#dddddd',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#2a2a2a',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          backgroundColor: 'transparent',
          color: '#ffffff',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2a2a2a',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#3b82f6',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#8ec5ff',
            borderWidth: 1.5,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#9a9a9a',
          '&.Mui-focused': {
            color: '#8ec5ff',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          border: '1px solid #2a2a2a',
          borderRadius: 999,
          color: '#ffffff',
          backgroundColor: 'transparent',
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: '#3b82f6',
            color: '#8ec5ff',
            backgroundColor: 'transparent',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
  },
});

export default theme;
