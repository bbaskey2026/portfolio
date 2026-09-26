import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
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
import SectionTitle from '../../components/common/SectionTitle';
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
      icon: <EmailIcon sx={{ fontSize: 20, color: '#ffffff' }} />,
      label: 'Email',
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 20, color: '#ffffff' }} />,
      label: 'Phone',
      value: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone}`,
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 20, color: '#ffffff' }} />,
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
        py: { xs: 6, md: 10 },
        minHeight: '80vh',
        backgroundColor: '#000000',
        color: '#ededed',
      }}
    >
      <Container maxWidth="md">
        <SectionTitle
          title="Get in Touch"
          subtitle="Have a question, opportunity, or want to collaborate? Let's connect directly."
        />




        {/* Main Headline */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            color: '#ffffff',
            fontSize: { xs: '2.2rem', md: '3.2rem' },
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            mb: 2.5,
          }}
        >
          Let's build something together.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#a1a1a1',
            lineHeight: 1.8,
            fontSize: '1.15rem',
            mb: 4.5,
            maxWidth: 680,
          }}
        >
          I am actively seeking software engineering internships and entry-level roles.
          Feel free to reach out directly via email, phone, or connect on my social networks.
        </Typography>

        {/* Action Pill Buttons */}
        <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mb: 6 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<EmailIcon />}
            href={`mailto:${SITE_CONFIG.email}`}
            sx={{
              py: 1.5,
              px: 4,
              backgroundColor: '#ffffff',
              color: '#000000',
              fontWeight: 600,
              borderRadius: '9999px',
              border: '1px solid #ffffff',
              '&:hover': {
                backgroundColor: '#eaeaea',
                borderColor: '#eaeaea',
              },
            }}
          >
            Say Hello
          </Button>

          <Button
            variant="outlined"
            size="large"
            startIcon={copied ? <CheckIcon sx={{ color: '#4ade80' }} /> : <ContentCopyIcon />}
            onClick={handleCopyEmail}
            sx={{
              py: 1.5,
              px: 4,
              borderColor: copied ? '#166534' : '#333333',
              backgroundColor: copied ? '#072711' : '#0a0a0a',
              color: copied ? '#4ade80' : '#ededed',
              borderRadius: '9999px',
              '&:hover': {
                borderColor: '#666666',
                backgroundColor: '#171717',
                color: '#ffffff',
              },
            }}
          >
            {copied ? 'Email Copied!' : 'Copy Email'}
          </Button>
        </Stack>

        <Divider sx={{ borderColor: '#1a1a1a', my: 5 }} />

        {/* Plain Flat Contact Details */}
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
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  backgroundColor: '#111111',
                  border: '1px solid #262626',
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
                    color: '#666666',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    fontSize: '0.72rem',
                    letterSpacing: '0.06em',
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
                      color: '#ffffff',
                      fontSize: '1.05rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.8,
                      transition: 'all 0.15s ease',
                      '&:hover': {
                        color: '#60a5fa',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {item.value}
                    <LaunchIcon sx={{ fontSize: 14, opacity: 0.6 }} />
                  </Typography>
                ) : (
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: '#ededed',
                      fontSize: '1.05rem',
                    }}
                  >
                    {item.value}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Stack>

        <Divider sx={{ borderColor: '#1a1a1a', my: 5 }} />

        {/* Social Links as Clean Pill Buttons */}
        <Box>
          <Typography
            variant="caption"
            sx={{
              color: '#666666',
              textTransform: 'uppercase',
              fontWeight: 600,
              fontSize: '0.72rem',
              letterSpacing: '0.06em',
              display: 'block',
              mb: 2,
            }}
          >
            Social Networks
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={2}>
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="outlined"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={social.icon}
                endIcon={<LaunchIcon sx={{ fontSize: 14 }} />}
                sx={{
                  py: 1.1,
                  px: 2.8,
                  borderRadius: '9999px',
                  borderColor: '#262626',
                  backgroundColor: '#0a0a0a',
                  color: '#ededed',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  '&:hover': {
                    borderColor: '#666666',
                    backgroundColor: '#171717',
                    color: '#ffffff',
                  },
                }}
              >
                {social.name}
              </Button>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;