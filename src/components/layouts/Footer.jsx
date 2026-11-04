import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, SOCIAL_LINKS, NAV_ITEMS } from '../../config/constants';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#000000',
        color: '#666666',
        borderTop: '1px solid #2a2a2a',
        mt: 'auto',
        py: 4,
      }}
    >
      <Box sx={{ maxWidth: '1040px', width: '100%', margin: '0 auto', px: '24px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
            fontSize: '13px',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '13px',
                color: '#666666',
              }}
            >
              © {new Date().getFullYear()} {SITE_CONFIG.name} · {SITE_CONFIG.location}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: '#9a9a9a',
                  fontSize: '13px',
                  p: '4px 10px',
                  borderRadius: 999,
                  minWidth: 'auto',
                  '&:hover': { color: '#ffffff', bgcolor: 'rgba(255, 255, 255, 0.05)' },
                }}
              >
                {item.label}
              </Button>
            ))}
            {SOCIAL_LINKS.github && (
              <Button
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#9a9a9a',
                  fontSize: '13px',
                  p: '4px 10px',
                  borderRadius: 999,
                  minWidth: 'auto',
                  '&:hover': { color: '#ffffff', bgcolor: 'rgba(255, 255, 255, 0.05)' },
                }}
              >
                GitHub
              </Button>
            )}
            {SOCIAL_LINKS.linkedin && (
              <Button
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#9a9a9a',
                  fontSize: '13px',
                  p: '4px 10px',
                  borderRadius: 999,
                  minWidth: 'auto',
                  '&:hover': { color: '#ffffff', bgcolor: 'rgba(255, 255, 255, 0.05)' },
                }}
              >
                LinkedIn
              </Button>
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
