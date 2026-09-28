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
          bgcolor: '#ffffff',
          color: '#000000',
          borderBottom: '1px solid #e5e5e5',
          zIndex: 1100,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: 72,
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
                        color: isActive ? '#000000' : '#555555',
                        fontWeight: isActive ? 700 : 500,
                        fontSize: '0.95rem',
                        px: 2,
                        py: 0.8,
                        borderRadius: 1,
                        backgroundColor: isActive ? '#f5f5f5' : 'transparent',
                        '&:hover': {
                          bgcolor: '#f5f5f5',
                          color: '#000000',
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
                    bgcolor: '#000000',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    px: 2.5,
                    py: 1,
                    borderRadius: 1,
                    '&:hover': {
                      bgcolor: '#222222',
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Stack>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  border: '1px solid #e5e5e5',
                  borderRadius: 1,
                  color: '#000000',
                  p: 1,
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
            maxWidth: 300,
            p: 3,
            bgcolor: '#ffffff',
            color: '#000000',
            borderLeft: '1px solid #e5e5e5',
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
              border: '1px solid #e5e5e5',
              borderRadius: 1,
              color: '#000000',
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
                    borderRadius: 1,
                    bgcolor: isActive ? '#f5f5f5' : 'transparent',
                    '&:hover': {
                      bgcolor: '#f5f5f5',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 500,
                      color: '#000000',
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
            bgcolor: '#000000',
            color: '#ffffff',
            fontWeight: 600,
            py: 1.5,
            borderRadius: 1,
            '&:hover': {
              bgcolor: '#222222',
            },
          }}
        >
          Contact Me
        </Button>
      </Drawer>
    </>
  );
};

export default Navbar;