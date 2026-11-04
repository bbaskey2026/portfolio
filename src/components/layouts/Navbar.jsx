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
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../common/Logo';
import { NAV_ITEMS } from '../../config/constants';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleNavClick = (path) => {
    setDrawerOpen(false);
    navigate(path);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          color: '#ffffff',
          borderBottom: '1px solid #2a2a2a',
          zIndex: 1100,
        }}
      >
        <Box sx={{ maxWidth: '1040px', width: '100%', margin: '0 auto', px: { xs: 2, sm: 3 } }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, sm: 76 },
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Logo />

            {/* Desktop Navigation */}
            {!isMobile && (
              <Stack direction="row" spacing={1} alignItems="center">
                {NAV_ITEMS.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Button
                      key={item.path}
                      onClick={() => handleNavClick(item.path)}
                      sx={{
                        color: isActive ? '#ffffff' : '#9a9a9a',
                        fontWeight: isActive ? 600 : 400,
                        fontSize: '0.92rem',
                        px: 2,
                        py: 0.8,
                        borderRadius: 999,
                        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.06)',
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
                    bgcolor: '#ffffff',
                    color: '#000000',
                    fontWeight: 500,
                    fontSize: '0.92rem',
                    px: 2.8,
                    py: 1,
                    borderRadius: 999,
                    border: '1px solid #ffffff',
                    transition: 'transform 0.2s ease, background-color 0.2s ease',
                    '&:hover': {
                      bgcolor: '#ededed',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Contact me
                </Button>
              </Stack>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  border: '1px solid #2a2a2a',
                  borderRadius: 999,
                  color: '#ffffff',
                  p: 1,
                  bgcolor: '#161616',
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Box>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 300,
            p: 3,
            bgcolor: '#161616',
            color: '#ffffff',
            borderLeft: '1px solid #2a2a2a',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Logo />
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{
              border: '1px solid #2a2a2a',
              borderRadius: 999,
              color: '#ffffff',
              bgcolor: '#1c1c1c',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 0 }}>
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => handleNavClick(item.path)}
                  sx={{
                    borderRadius: 999,
                    bgcolor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#ffffff' : '#9a9a9a',
                      fontSize: '1rem',
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
            bgcolor: '#ffffff',
            color: '#000000',
            fontWeight: 500,
            py: 1.4,
            borderRadius: 999,
            '&:hover': {
              bgcolor: '#ededed',
            },
          }}
        >
          Contact me
        </Button>
      </Drawer>
    </>
  );
};

export default Navbar;
