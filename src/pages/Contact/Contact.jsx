import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import LaunchIcon from '@mui/icons-material/Launch';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SITE_CONFIG, SOCIAL_LINKS } from '../../config/constants';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactItems = [
    {
      icon: <EmailIcon sx={{ fontSize: 20, color: '#000000' }} />,
      label: 'Email',
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 20, color: '#000000' }} />,
      label: 'Phone',
      value: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone}`,
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 20, color: '#000000' }} />,
      label: 'Location',
      value: SITE_CONFIG.location,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={17} />,
      name: 'GitHub',
      url: SOCIAL_LINKS.github || 'https://github.com/bbaskey2026',
    },
    {
      icon: <FaLinkedin size={17} />,
      name: 'LinkedIn',
      url: SOCIAL_LINKS.linkedin,
    },
    {
      icon: <FaTwitter size={17} />,
      name: 'Twitter / X',
      url: SOCIAL_LINKS.twitter,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: '85vh',
        backgroundColor: '#ffffff',
        color: '#000000',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '180px 1fr',
            },
            gap: {
              xs: 3,
              md: 8,
            },
            width: '100%',
            maxWidth: '100%',
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2,
              color: '#000000',
            }}
          >
            CONTACT
          </Typography>

          <Box sx={{ minWidth: 0, width: '100%' }}>
            {/* Main Headline */}
            <Typography
              component="h1"
              sx={{
                fontWeight: 800,
                color: '#000000',
                fontSize: { xs: '2.4rem', sm: '3.6rem', md: '4.8rem' },
                lineHeight: 1.05,
                letterSpacing: { xs: '-1px', md: '-3px' },
                mb: 3.5,
                wordBreak: 'break-word',
              }}
            >
              Let's build
              <br />
              something.
            </Typography>

            <Typography
              sx={{
                color: '#444444',
                lineHeight: 1.8,
                fontSize: { xs: 16, sm: 18, md: 20 },
                mb: 4.5,
                maxWidth: 700,
                wordBreak: 'break-word',
              }}
            >
              I am actively seeking software engineering internships and entry-level roles.
              Feel free to reach out directly via email, phone, or connect with me on social media.
            </Typography>

            {/* Action Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 6 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<EmailIcon />}
                href={`mailto:${SITE_CONFIG.email}`}
                sx={{
                  py: 1.6,
                  px: 3.5,
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  fontWeight: 600,
                  borderRadius: 1,
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: '#222222',
                  },
                }}
              >
                Say Hello
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={copied ? <CheckIcon sx={{ color: '#16a34a' }} /> : <ContentCopyIcon />}
                onClick={handleCopyEmail}
                sx={{
                  py: 1.6,
                  px: 3.5,
                  borderColor: copied ? '#16a34a' : '#000000',
                  backgroundColor: copied ? '#f0fdf4' : 'transparent',
                  color: copied ? '#16a34a' : '#000000',
                  borderRadius: 1,
                  fontSize: '1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#000000',
                    backgroundColor: '#f5f5f5',
                  },
                }}
              >
                {copied ? 'Email Copied!' : 'Copy Email'}
              </Button>
            </Stack>

            <Divider sx={{ my: 5 }} />

            {/* Contact Details List */}
            <Stack spacing={3} sx={{ mb: 6 }}>
              {contactItems.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2.5,
                    flexWrap: 'wrap',
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 1,
                      backgroundColor: '#f5f5f5',
                      border: '1px solid #e5e5e5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#777777',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        letterSpacing: 1,
                        display: 'block',
                      }}
                    >
                      {item.label}
                    </Typography>

                    {item.href ? (
                      <Typography
                        component="a"
                        href={item.href}
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          color: '#000000',
                          fontSize: '1.1rem',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.8,
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        {item.value}
                        <LaunchIcon sx={{ fontSize: 15, opacity: 0.6 }} />
                      </Typography>
                    ) : (
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          color: '#000000',
                          fontSize: '1.1rem',
                        }}
                      >
                        {item.value}
                      </Typography>
                    )}
                  </Box>
                </Box>
              ))}
            </Stack>

            <Divider sx={{ my: 5 }} />

            {/* Social Links */}
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: 2,
                color: '#000000',
                mb: 3,
                textTransform: 'uppercase',
              }}
            >
              Social Networks
            </Typography>

            <Stack direction="row" spacing={2} flexWrap="wrap">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outlined"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={social.icon}
                  sx={{
                    borderColor: '#e5e5e5',
                    color: '#000000',
                    borderRadius: 1,
                    px: 2.5,
                    py: 1,
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: '#000000',
                      bgcolor: '#f5f5f5',
                    },
                  }}
                >
                  {social.name}
                </Button>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;