import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SectionTitle from '../../components/common/SectionTitle';
import ContactForm from '../../components/forms/ContactForm';
import SocialLinks from '../../components/ui/SocialLinks';
import { SITE_CONFIG } from '../../config/constants';

const contactInfo = [
  {
    icon: <EmailIcon sx={{ fontSize: 20 }} />,
    label: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 20 }} />,
    label: 'Phone',
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 20 }} />,
    label: 'Location',
    value: SITE_CONFIG.location,
    href: null,
  },
];

const Contact = () => {
  return (
    <Box
      sx={{
        py: 8,
        minHeight: '80vh',
        backgroundColor: '#000000',
        color: '#ededed',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Get in Touch"
          subtitle="Have a question, opportunity, or want to collaborate? Send me a message."
        />

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h4"
              sx={{ mb: 2.5, color: '#ffffff', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Let's build something together
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, color: '#a1a1a1', lineHeight: 1.8 }}
            >
              I'm actively seeking internship and entry-level software engineering roles.
              If you have any open opportunities, project inquiries, or questions,
              I'd love to connect.
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mb: 4 }}>
              {contactInfo.map((info) => (
                <Box
                  key={info.label}
                  component={info.href ? 'a' : 'div'}
                  href={info.href}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 2,
                    p: 2,
                    border: '1px solid #1f1f1f',
                    borderRadius: '10px',
                    backgroundColor: '#0a0a0a',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.15s ease',
                    '&:hover': {
                      borderColor: info.href ? '#444444' : '#1f1f1f',
                      backgroundColor: info.href ? '#121212' : '#0a0a0a',
                    },
                    cursor: info.href ? 'pointer' : 'default',
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#171717',
                      border: '1px solid #262626',
                      borderRadius: '8px',
                      color: '#ffffff',
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: '#888888', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                    >
                      {info.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 500, color: '#ededed', fontSize: '0.9rem' }}
                    >
                      {info.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box>
              <Typography
                variant="body2"
                sx={{ mb: 1.5, color: '#888888', fontSize: '0.85rem' }}
              >
                Find me on
              </Typography>
              <SocialLinks />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                border: '1px solid #222222',
                borderRadius: '16px',
                backgroundColor: '#0a0a0a',
              }}
            >
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;