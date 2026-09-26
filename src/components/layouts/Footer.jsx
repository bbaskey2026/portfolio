import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import SocialLinks from '../ui/SocialLinks';
import { NAV_ITEMS, SITE_CONFIG } from '../../config/constants';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid #1f1f1f',
        pt: 8,
        pb: 5,
        mt: 12,
        backgroundColor: '#000000',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Logo />
            <Typography
              variant="body2"
              sx={{ mt: 2, mb: 3, maxWidth: 300, color: '#888888' }}
            >
              {SITE_CONFIG.description}
            </Typography>
            <SocialLinks />
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontSize: '0.85rem', color: '#ffffff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Navigation
            </Typography>
            {NAV_ITEMS.map((item) => (
              <MuiLink
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  display: 'block',
                  mb: 1.5,
                  color: '#888888',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.15s ease',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                {item.label}
              </MuiLink>
            ))}
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontSize: '0.85rem', color: '#ffffff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Contact
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1.5, color: '#888888' }}
            >
              {SITE_CONFIG.email}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1.5, color: '#888888' }}
            >
              {SITE_CONFIG.phone}
            </Typography>
            <Typography variant="body2" sx={{ color: '#888888' }}>
              {SITE_CONFIG.location}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontSize: '0.85rem', color: '#ffffff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Availability
            </Typography>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.2,
                px: 2,
                py: 0.8,
                borderRadius: '20px',
                border: '1px solid #222222',
                backgroundColor: '#0a0a0a',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)',
                }}
              />
              <Typography variant="body2" sx={{ color: '#ededed', fontSize: '0.85rem' }}>
                Open to opportunities
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#1f1f1f' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: '#555555', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Bhima Baskey. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: '#555555', fontSize: '0.8rem' }}>
            Built with React & Vercel Aesthetic
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;