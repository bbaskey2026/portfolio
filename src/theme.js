import { createTheme } from '@mui/material/styles';

const headingFont = '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      light: '#222222',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#555555',
      light: '#777777',
      dark: '#333333',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      subtle: '#fafafa',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
      disabled: '#999999',
    },
    divider: '#e5e5e5',
    action: {
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: '#cccccc',
    },
    custom: {
      border: '#e5e5e5',
      borderHover: '#000000',
      borderActive: '#000000',
      cardBg: '#ffffff',
      cardAltBg: '#fafafa',
      tagBg: '#f1f1f1',
      tagText: '#000000',
      navBg: 'rgba(255, 255, 255, 0.95)',
      badge: '#000000',
    },
  },
  typography: {
    fontFamily: '"Inter", "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: headingFont,
      fontSize: '4.5rem',
      fontWeight: 800,
      letterSpacing: '-3px',
      lineHeight: 0.95,
      color: '#000000',
    },
    h2: {
      fontFamily: headingFont,
      fontSize: '2.5rem',
      fontWeight: 800,
      letterSpacing: '-1.5px',
      lineHeight: 1.15,
      color: '#000000',
    },
    h3: {
      fontFamily: headingFont,
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '-1px',
      lineHeight: 1.25,
      color: '#000000',
    },
    h4: {
      fontFamily: headingFont,
      fontSize: '1.4rem',
      fontWeight: 700,
      letterSpacing: '-0.5px',
      color: '#000000',
    },
    h5: {
      fontFamily: headingFont,
      fontSize: '1.15rem',
      fontWeight: 700,
      letterSpacing: '-0.3px',
      color: '#000000',
    },
    h6: {
      fontFamily: headingFont,
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: '-0.2px',
      color: '#000000',
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.75,
      color: '#444444',
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.65,
      color: '#555555',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#ffffff',
          color: '#000000',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '10px 22px',
          fontSize: '0.95rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          border: '1px solid transparent',
          gap: '8px',
          transition: 'all 0.15s ease',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          backgroundColor: '#000000',
          color: '#ffffff',
          border: '1px solid #000000',
          '&:hover': {
            backgroundColor: '#222222',
            borderColor: '#222222',
            boxShadow: 'none',
          },
        },
        outlined: {
          borderColor: '#000000',
          color: '#000000',
          backgroundColor: 'transparent',
          '&:hover': {
            borderColor: '#000000',
            backgroundColor: '#f5f5f5',
          },
        },
        text: {
          color: '#000000',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          border: '1px solid #e5e5e5',
          borderRadius: 8,
          boxShadow: 'none',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
          '&:hover': {
            borderColor: '#cccccc',
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.06)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#000000',
          borderBottom: '1px solid #e5e5e5',
          boxShadow: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: '#f1f1f1',
          color: '#000000',
          border: '1px solid #e5e5e5',
          fontSize: '0.85rem',
          fontWeight: 500,
          padding: '4px 10px',
          height: 'auto',
          transition: 'all 0.15s ease',
        },
        outlined: {
          borderColor: '#cccccc',
          backgroundColor: '#ffffff',
          color: '#000000',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#e5e5e5',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          backgroundColor: '#ffffff',
          color: '#000000',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#cccccc',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000000',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000000',
            borderWidth: 1.5,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#666666',
          '&.Mui-focused': {
            color: '#000000',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          border: '1px solid #e5e5e5',
          borderRadius: 6,
          color: '#000000',
          transition: 'all 0.15s ease',
          '&:hover': {
            borderColor: '#000000',
            backgroundColor: '#f5f5f5',
          },
        },
      },
    },
  },
});

export default theme;
