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
            ? 'rgba(255, 255, 255, 0.9)'
            : '#FFFFFF',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: '1px solid #E5E5E5',
          transition: 'all 0.3s ease',
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    sx={{
                      color:
                        location.pathname === item.path
                          ? '#000000'
                          : '#666666',
                      fontWeight:
                        location.pathname === item.path ? 600 : 400,
                      fontSize: '0.9rem',
                      px: 2,
                      borderRadius: '8px',
                      backgroundColor:
                        location.pathname === item.path
                          ? '#F5F5F5'
                          : 'transparent',
                      '&:hover': {
                        backgroundColor: '#F5F5F5',
                        color: '#000000',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  onClick={() => handleNavClick('/contact')}
                  sx={{ ml: 1 }}
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
                  border: '1px solid #E5E5E5',
                  borderRadius: '8px',
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
            maxWidth: 360,
            p: 2,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2,
          }}
        >
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{
              border: '1px solid #E5E5E5',
              borderRadius: '8px',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(item.path)}
                sx={{
                  borderRadius: '8px',
                  mb: 0.5,
                  backgroundColor:
                    location.pathname === item.path
                      ? '#F5F5F5'
                      : 'transparent',
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight:
                      location.pathname === item.path ? 600 : 400,
                    color: '#000000',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          fullWidth
          onClick={() => handleNavClick('/contact')}
          sx={{ mt: 2 }}
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