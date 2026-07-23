import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import AppRoutes from './routes';
import ScrollToTop from './components/common/ScrollToTop';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2f7d3b',
      light: '#61a55f',
      dark: '#1d5728',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5f8f65',
      light: '#8fbf8c',
      dark: '#3a6a44',
    },
    background: {
      default: '#ecf6ec',
      paper: '#edf7ed',
    },
    text: {
      primary: '#102f17',
      secondary: '#406345',
    },
    divider: '#c4d8bf',
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.1rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#444444',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#666666',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '0.95rem',
        },
        contained: {
          backgroundColor: '#000000',
          color: '#FFFFFF',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#333333',
            boxShadow: 'none',
          },
        },
        outlined: {
          borderColor: '#E5E5E5',
          color: '#000000',
          '&:hover': {
            borderColor: '#000000',
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid #c4d8bf',
          backgroundColor: '#e7f3e7',
          backgroundImage: 'linear-gradient(145deg, rgba(255,255,255,0.65), rgba(225,245,227,0.8))',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#2f7d3b',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid #E5E5E5',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;