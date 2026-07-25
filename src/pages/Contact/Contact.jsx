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
    icon: <EmailIcon />,
    label: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon: <LocationOnIcon />,
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
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        backgroundImage: `
          radial-gradient(circle at 8% 15%, rgba(66, 133, 244, 0.13) 0%, transparent 28%),
          radial-gradient(circle at 92% 12%, rgba(234, 67, 53, 0.11) 0%, transparent 24%),
          radial-gradient(circle at 88% 88%, rgba(251, 188, 5, 0.13) 0%, transparent 26%),
          radial-gradient(circle at 12% 88%, rgba(52, 168, 83, 0.11) 0%, transparent 24%),
          radial-gradient(circle at 50% 50%, rgba(66, 133, 244, 0.05) 0%, transparent 60%),
          linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)
        `,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Get in Touch"
          subtitle="Have a question or want to work together? Drop me a message."
        />

        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h4"
              sx={{ mb: 3, color: '#000000' }}
            >
              Let's talk about your project
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, color: '#666666', lineHeight: 1.8 }}
            >
              I'm interested in freelance opportunities, especially
              ambitious or large projects. However, if you have other
              requests or questions, don't hesitate to reach out.
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
                    mb: 2.5,
                    p: 2,
                    border: '1px solid #E5E5E5',
                    borderRadius: 2,
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': {
                      borderColor: info.href ? '#000000' : '#E5E5E5',
                    },
                    transition: 'border-color 0.2s ease',
                    cursor: info.href ? 'pointer' : 'default',
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#F5F5F5',
                      borderRadius: '10px',
                      color: '#000000',
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: '#999999', fontSize: '0.8rem' }}
                    >
                      {info.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 500, color: '#000000' }}
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
                sx={{ mb: 1.5, color: '#999999' }}
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
                border: '1px solid #E5E5E5',
                borderRadius: 3,
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