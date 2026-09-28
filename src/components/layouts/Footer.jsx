import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, SOCIAL_LINKS, NAV_ITEMS } from '../../config/constants';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#ffffff',
        color: '#000000',
        borderTop: '1px solid #e5e5e5',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: '-0.5px',
                mb: 0.5,
              }}
            >
              {SITE_CONFIG.name}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: '#666666',
              }}
            >
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{
                  color: '#444444',
                  fontSize: 14,
                  '&:hover': { color: '#000000', bgcolor: '#f5f5f5' },
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
                color="inherit"
                sx={{
                  color: '#444444',
                  fontSize: 14,
                  '&:hover': { color: '#000000', bgcolor: '#f5f5f5' },
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
                color="inherit"
                sx={{
                  color: '#444444',
                  fontSize: 14,
                  '&:hover': { color: '#000000', bgcolor: '#f5f5f5' },
                }}
              >
                LinkedIn
              </Button>
            )}
            <Button
              href={`mailto:${SITE_CONFIG.email}`}
              color="inherit"
              sx={{
                color: '#444444',
                fontSize: 14,
                '&:hover': { color: '#000000', bgcolor: '#f5f5f5' },
              }}
            >
              Email
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;