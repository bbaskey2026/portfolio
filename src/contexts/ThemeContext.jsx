import React, { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// ─── Context ────────────────────────────────────────────────────────────────
const ThemeContext = createContext({
  mode: 'light',
  toggleTheme: () => {},
  isDark: false,
});

// ─── Hook ───────────────────────────────────────────────────────────────────
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};

// ─── Theme Builder ───────────────────────────────────────────────────────────
const buildTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // ── Light Palette ──
            primary: {
              main: '#000000',
              light: '#333333',
              dark: '#000000',
              contrastText: '#FFFFFF',
            },
            secondary: {
              main: '#666666',
              light: '#999999',
              dark: '#333333',
              contrastText: '#FFFFFF',
            },
            background: {
              default: '#FFFFFF',
              paper: '#FFFFFF',
              subtle: '#FAFAFA',
            },
            text: {
              primary: '#000000',
              secondary: '#444444',
              disabled: '#AAAAAA',
              hint: '#999999',
            },
            divider: '#E5E5E5',
            action: {
              hover: '#F5F5F5',
              selected: '#F0F0F0',
              disabled: '#CCCCCC',
            },
            custom: {
              border: '#E5E5E5',
              borderHover: '#000000',
              cardBg: '#FFFFFF',
              tagBg: '#F5F5F5',
              tagText: '#666666',
              navBg: 'rgba(255,255,255,0.9)',
              badge: '#22C55E',
            },
          }
        : {
            // ── Dark Palette ──
            primary: {
              main: '#FFFFFF',
              light: '#F5F5F5',
              dark: '#CCCCCC',
              contrastText: '#000000',
            },
            secondary: {
              main: '#999999',
              light: '#CCCCCC',
              dark: '#666666',
              contrastText: '#000000',
            },
            background: {
              default: '#0A0A0A',
              paper: '#111111',
              subtle: '#161616',
            },
            text: {
              primary: '#FFFFFF',
              secondary: '#AAAAAA',
              disabled: '#555555',
              hint: '#777777',
            },
            divider: '#222222',
            action: {
              hover: '#1A1A1A',
              selected: '#222222',
              disabled: '#444444',
            },
            custom: {
              border: '#222222',
              borderHover: '#FFFFFF',
              cardBg: '#111111',
              tagBg: '#1A1A1A',
              tagText: '#AAAAAA',
              navBg: 'rgba(10,10,10,0.9)',
              badge: '#22C55E',
            },
          }),
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
      h4: { fontSize: '1.25rem', fontWeight: 600 },
      h5: { fontSize: '1.1rem',  fontWeight: 600 },
      h6: { fontSize: '1rem',    fontWeight: 600 },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },

    shape: { borderRadius: 12 },

    components: {
      // ── Button ──────────────────────────────────────────────────────────
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 8,
            padding: '10px 24px',
            fontSize: '0.95rem',
            boxShadow: 'none',
            '&:hover': { boxShadow: 'none' },
          }),
          contained: ({ theme }) => ({
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
          }),
          outlined: ({ theme }) => ({
            borderColor: theme.palette.custom.border,
            color: theme.palette.text.primary,
            '&:hover': {
              borderColor: theme.palette.custom.borderHover,
              backgroundColor: 'transparent',
            },
          }),
        },
      },

      // ── Card ────────────────────────────────────────────────────────────
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            boxShadow: 'none',
            border: `1px solid ${theme.palette.custom.border}`,
            backgroundColor: theme.palette.custom.cardBg,
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: theme.palette.custom.borderHover,
            },
          }),
        },
      },

      // ── Paper ───────────────────────────────────────────────────────────
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundImage: 'none',
            backgroundColor: theme.palette.background.paper,
          }),
        },
      },

      // ── AppBar ──────────────────────────────────────────────────────────
      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }) => ({
            boxShadow: 'none',
            borderBottom: `1px solid ${theme.palette.custom.border}`,
            backgroundColor: theme.palette.custom.navBg,
            backdropFilter: 'blur(20px)',
          }),
        },
      },

      // ── Chip ────────────────────────────────────────────────────────────
      MuiChip: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 6,
            backgroundColor: theme.palette.custom.tagBg,
            color: theme.palette.custom.tagText,
          }),
          outlined: ({ theme }) => ({
            borderColor: theme.palette.custom.border,
          }),
        },
      },

      // ── Divider ─────────────────────────────────────────────────────────
      MuiDivider: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderColor: theme.palette.custom.border,
          }),
        },
      },

      // ── TextField ───────────────────────────────────────────────────────
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 8,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.custom.border,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.custom.borderHover,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
              borderWidth: 1,
            },
          }),
        },
      },

      MuiInputLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.disabled,
            '&.Mui-focused': {
              color: theme.palette.text.primary,
            },
          }),
        },
      },

      // ── IconButton ──────────────────────────────────────────────────────
      MuiIconButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            border: `1px solid ${theme.palette.custom.border}`,
            borderRadius: 8,
            color: theme.palette.text.primary,
            '&:hover': {
              borderColor: theme.palette.custom.borderHover,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            },
            transition: 'all 0.2s ease',
          }),
        },
      },

      // ── LinearProgress ──────────────────────────────────────────────────
      MuiLinearProgress: {
        styleOverrides: {
          root: ({ theme }) => ({
            height: 4,
            borderRadius: 2,
            backgroundColor:
              mode === 'light' ? '#F0F0F0' : '#222222',
          }),
          bar: ({ theme }) => ({
            borderRadius: 2,
            backgroundColor: theme.palette.primary.main,
          }),
        },
      },

      // ── Drawer ──────────────────────────────────────────────────────────
      MuiDrawer: {
        styleOverrides: {
          paper: ({ theme }) => ({
            backgroundColor: theme.palette.background.default,
            borderLeft: `1px solid ${theme.palette.custom.border}`,
          }),
        },
      },

      // ── ListItemButton ──────────────────────────────────────────────────
      MuiListItemButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 8,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
            '&.Mui-selected': {
              backgroundColor: theme.palette.action.selected,
            },
          }),
        },
      },

      // ── Tooltip ─────────────────────────────────────────────────────────
      MuiTooltip: {
        styleOverrides: {
          tooltip: ({ theme }) => ({
            backgroundColor: theme.palette.text.primary,
            color: theme.palette.background.default,
            fontSize: '0.8rem',
            borderRadius: 6,
          }),
        },
      },

      // ── Alert ───────────────────────────────────────────────────────────
      MuiAlert: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 8,
            border: `1px solid ${theme.palette.custom.border}`,
          }),
        },
      },
    },
  });

// ─── Provider ────────────────────────────────────────────────────────────────
export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem('theme-mode') || 'light';
    } catch {
      return 'light';
    }
  });

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem('theme-mode', next);
      } catch {}
      return next;
    });
  };

  const theme = useMemo(() => buildTheme(mode), [mode]);

  const value = useMemo(
    () => ({
      mode,
      toggleTheme,
      isDark: mode === 'dark',
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;