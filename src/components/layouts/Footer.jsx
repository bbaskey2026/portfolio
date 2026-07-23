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
        borderTop: '1px solid #E5E5E5',
        pt: 8,
        pb: 4,
        mt: 12,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Logo />
            <Typography
              variant="body2"
              sx={{ mt: 2, mb: 3, maxWidth: 300, color: '#666666' }}
            >
              {SITE_CONFIG.description}
            </Typography>
            <SocialLinks />
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontSize: '0.9rem', color: '#000000' }}
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
                  color: '#666666',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': {
                    color: '#000000',
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
              sx={{ mb: 2, fontSize: '0.9rem', color: '#000000' }}
            >
              Contact
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1.5, color: '#666666' }}
            >
              {SITE_CONFIG.email}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1.5, color: '#666666' }}
            >
              {SITE_CONFIG.phone}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666666' }}>
              {SITE_CONFIG.location}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontSize: '0.9rem', color: '#000000' }}
            >
              Availability
            </Typography>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: '20px',
                border: '1px solid #E5E5E5',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#22C55E',
                }}
              />
              <Typography variant="body2" sx={{ color: '#666666' }}>
                Open to opportunities
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#E5E5E5' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: '#999999' }}>
            © {new Date().getFullYear()} Alex Morgan. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: '#999999' }}>
            Built with React & Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;