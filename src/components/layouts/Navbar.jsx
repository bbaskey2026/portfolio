import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../common/Logo';
import { NAV_ITEMS } from '../../config/constants';
import useScrollPosition from '../../hooks/useScrollPosition';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleNavClick = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled
            ? 'rgba(0, 0, 0, 0.85)'
            : 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #222222',
          transition: 'all 0.2s ease',
          boxShadow: 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              py: 1,
              px: { xs: 0 },
            }}
          >
            <Logo />

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {NAV_ITEMS.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Button
                      key={item.path}
                      onClick={() => handleNavClick(item.path)}
                      sx={{
                        color: isActive ? '#ffffff' : '#888888',
                        fontWeight: isActive ? 600 : 400,
                        fontSize: '0.875rem',
                        px: 1.8,
                        py: 0.8,
                        borderRadius: '6px',
                        backgroundColor: isActive
                          ? 'rgba(255, 255, 255, 0.08)'
                          : 'transparent',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          color: '#ffffff',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
                <Button
                  variant="contained"
                  onClick={() => handleNavClick('/contact')}
                  sx={{
                    ml: 1.5,
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    px: 2.2,
                    py: 0.8,
                    borderRadius: '6px',
                    '&:hover': {
                      backgroundColor: '#e5e5e5',
                    },
                  }}
                >
                  Get in Touch
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  border: '1px solid #222222',
                  borderRadius: '6px',
                  color: '#ffffff',
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 320,
            p: 2.5,
            backgroundColor: '#0a0a0a',
            borderLeft: '1px solid #222222',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Logo />
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{
              border: '1px solid #222222',
              borderRadius: '6px',
              color: '#ffffff',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 0 }}>
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => handleNavClick(item.path)}
                  sx={{
                    borderRadius: '6px',
                    backgroundColor: isActive
                      ? 'rgba(255, 255, 255, 0.08)'
                      : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#ffffff' : '#a1a1a1',
                      fontSize: '0.95rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Button
          variant="contained"
          fullWidth
          onClick={() => handleNavClick('/contact')}
          sx={{
            mt: 3,
            backgroundColor: '#ffffff',
            color: '#000000',
            fontWeight: 600,
            py: 1.2,
          }}
        >
          Get in Touch
        </Button>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar sx={{ py: 1 }} />
    </>
  );
};

export default Navbar;