import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
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
      label: 'Email',
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
    },
    {
      label: 'Phone',
      value: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone}`,
    },
    {
      label: 'Location',
      value: SITE_CONFIG.location,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={15} />,
      name: 'GitHub',
      url: SOCIAL_LINKS.github || 'https://github.com/bbaskey2026',
    },
    {
      icon: <FaLinkedin size={15} />,
      name: 'LinkedIn',
      url: SOCIAL_LINKS.linkedin,
    },
    {
      icon: <FaTwitter size={15} />,
      name: 'Twitter / X',
      url: SOCIAL_LINKS.twitter,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        color: '#ffffff',
        minHeight: '85vh',
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
      }}
    >
      <Box
        sx={{
          maxWidth: '1040px',
          margin: '0 auto',
          padding: { xs: '40px 16px', sm: '48px 20px', md: '72px 24px' },
        }}
      >
        <Typography
          sx={{
            color: '#8ec5ff',
            fontSize: '14px',
            marginBottom: '12px',
            fontWeight: 500,
          }}
        >
          Contact
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontSize: 'clamp(38px, 8vw, 68px)',
            lineHeight: 1.03,
            letterSpacing: '-.04em',
            fontWeight: 500,
            margin: '0 0 24px',
            maxWidth: '800px',
            color: '#ffffff',
          }}
        >
          Let’s work together.
        </Typography>

        <Typography
          sx={{
            color: '#cfcfcf',
            maxWidth: '560px',
            fontSize: '16px',
            lineHeight: 1.6,
            margin: '0 0 36px',
          }}
        >
          Open to internships and full-time software roles. Feel free to reach out directly via email, phone, or connect with me on social platforms.
        </Typography>

        {/* Action Buttons */}
        <Stack direction="row" spacing={1.5} flexWrap="wrap" sx={{ mb: '56px' }}>
          <Box
            component="a"
            href={`mailto:${SITE_CONFIG.email}`}
            sx={{
              display: 'inline-block',
              background: '#ffffff',
              color: '#000000',
              padding: '10px 22px',
              borderRadius: 999,
              fontSize: '15px',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'transform .2s',
              '&:hover': {
                transform: 'translateY(-2px)',
              },
            }}
          >
            Say Hello
          </Box>

          <Button
            variant="outlined"
            startIcon={copied ? <CheckIcon sx={{ color: '#8ec5ff' }} /> : <ContentCopyIcon sx={{ fontSize: 16 }} />}
            onClick={handleCopyEmail}
            sx={{
              borderColor: '#2a2a2a',
              color: copied ? '#8ec5ff' : '#cfcfcf',
              padding: '10px 20px',
              borderRadius: 999,
              fontSize: '14px',
              fontWeight: 500,
              '&:hover': {
                borderColor: '#3b82f6',
                color: '#ffffff',
                transform: 'translateY(-2px)',
              },
            }}
          >
            {copied ? 'Email Copied!' : 'Copy Email'}
          </Button>
        </Stack>

        {/* Contact Details List (plain rows like .edu) */}
        <Box sx={{ borderTop: '1px solid #2a2a2a', mb: '56px' }}>
          {contactItems.map((item) => (
            <Box
              key={item.label}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '16px',
                padding: '18px 0',
                borderBottom: '1px solid #2a2a2a',
                flexWrap: 'wrap',
                alignItems: 'baseline',
              }}
            >
              <Typography component="span" sx={{ color: '#8ec5ff', fontSize: '15px', fontWeight: 500 }}>
                {item.label}
              </Typography>

              {item.href ? (
                <Typography
                  component="a"
                  href={item.href}
                  sx={{
                    color: '#ffffff',
                    fontSize: '16px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.8,
                    wordBreak: 'break-word',
                    '&:hover': {
                      color: '#8ec5ff',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {item.value}
                  <LaunchIcon sx={{ fontSize: 14, opacity: 0.6 }} />
                </Typography>
              ) : (
                <Typography component="span" sx={{ color: '#ffffff', fontSize: '16px', wordBreak: 'break-word' }}>
                  {item.value}
                </Typography>
              )}
            </Box>
          ))}
        </Box>

        {/* Social Links */}
        <Typography
          sx={{
            color: '#8ec5ff',
            fontSize: '14px',
            marginBottom: '16px',
            fontWeight: 500,
          }}
        >
          Social Networks
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {socialLinks.map((social) => (
            <Box
              key={social.name}
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                border: '1px solid #2a2a2a',
                borderRadius: 999,
                padding: '6px 16px',
                fontSize: '13px',
                color: '#dddddd',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#3b82f6',
                  color: '#ffffff',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {social.icon}
              {social.name}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
