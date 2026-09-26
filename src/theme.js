import { createTheme } from '@mui/material/styles';

const headingFont = '"Megora", "Syne", "Geist", "Plus Jakarta Sans", -apple-system, sans-serif';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#cccccc',
      contrastText: '#000000',
    },
    secondary: {
      main: '#888888',
      light: '#a1a1a1',
      dark: '#555555',
      contrastText: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#0a0a0a',
      subtle: '#111111',
    },
    text: {
      primary: '#ededed',
      secondary: '#a1a1a1',
      disabled: '#555555',
    },
    divider: '#222222',
    action: {
      hover: 'rgba(255, 255, 255, 0.06)',
      selected: 'rgba(255, 255, 255, 0.1)',
      disabled: '#444444',
    },
    custom: {
      border: '#222222',
      borderHover: '#444444',
      borderActive: '#ffffff',
      cardBg: '#0a0a0a',
      tagBg: '#141414',
      tagText: '#a1a1a1',
      navBg: 'rgba(0, 0, 0, 0.8)',
      badge: '#0070f3',
    },
  },
  typography: {
    fontFamily: '"Geist", "Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: headingFont,
      fontSize: '3.5rem',
      fontWeight: 800,
      letterSpacing: '-0.04em',
      lineHeight: 1.08,
      color: '#ffffff',
    },
    h2: {
      fontFamily: headingFont,
      fontSize: '2.25rem',
      fontWeight: 800,
      letterSpacing: '-0.035em',
      lineHeight: 1.15,
      color: '#ffffff',
    },
    h3: {
      fontFamily: headingFont,
      fontSize: '1.75rem',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.2,
      color: '#ffffff',
    },
    h4: {
      fontFamily: headingFont,
      fontSize: '1.25rem',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: '#ffffff',
    },
    h5: {
      fontFamily: headingFont,
      fontSize: '1.1rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#ffffff',
    },
    h6: {
      fontFamily: headingFont,
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      color: '#ffffff',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '-0.01em',
      color: '#a1a1a1',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      letterSpacing: '-0.005em',
      color: '#888888',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '-0.015em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000000',
          color: '#ededed',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          padding: '11px 26px',
          fontSize: '0.9rem',
          fontWeight: 500,
          textTransform: 'none',
          boxShadow: 'none',
          border: '1px solid transparent',
          gap: '8px',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            boxShadow: 'none',
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        contained: {
          backgroundColor: '#ffffff',
          color: '#000000',
          fontWeight: 600,
          border: '1px solid #ffffff',
          '&:hover': {
            backgroundColor: '#eaeaea',
            borderColor: '#eaeaea',
          },
        },
        outlined: {
          borderColor: '#333333',
          color: '#ededed',
          backgroundColor: '#0a0a0a',
          '&:hover': {
            borderColor: '#666666',
            backgroundColor: '#171717',
            color: '#ffffff',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#0a0a0a',
          border: '1px solid #222222',
          borderRadius: 12,
          boxShadow: 'none',
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: '#444444',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#0a0a0a',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #222222',
          boxShadow: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          backgroundColor: '#141414',
          color: '#a1a1a1',
          border: '1px solid #262626',
          fontSize: '0.8rem',
          fontWeight: 500,
          padding: '6px 14px',
          height: 'auto',
          transition: 'all 0.15s ease',
          '&:hover': {
            borderColor: '#444444',
          },
        },
        outlined: {
          borderColor: '#262626',
          color: '#a1a1a1',
          '&:hover': {
            borderColor: '#555555',
            color: '#ededed',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#222222',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#0a0a0a',
          color: '#ededed',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#262626',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#444444',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffffff',
            borderWidth: 1,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#666666',
          '&.Mui-focused': {
            color: '#ededed',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          border: '1px solid #222222',
          borderRadius: '50%',
          color: '#a1a1a1',
          transition: 'all 0.15s ease',
          '&:hover': {
            borderColor: '#444444',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: '#ffffff',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
  },
});

export default theme;
