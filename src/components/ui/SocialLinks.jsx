import React from 'react';
import { IconButton, Stack } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../config/constants';

const SocialLinks = ({ size = 'medium', color = '#ffffff' }) => {
  const links = [
    { icon: <FaGithub size={18} />, url: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: <FaLinkedin size={18} />, url: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: <FaTwitter size={18} />, url: SOCIAL_LINKS.twitter, label: 'Twitter' },
  ];

  return (
    <Stack direction="row" spacing={1.5}>
      {links.map((link) => (
        <IconButton
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          size={size}
          sx={{
            color: color,
            border: '1px solid #2a2a2a',
            backgroundColor: '#1c1c1c',
            borderRadius: 999,
            p: 1.2,
            '&:hover': {
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(59, 130, 246, 0.08)',
              color: '#8ec5ff',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          {link.icon}
        </IconButton>
      ))}
    </Stack>
  );
};

export default SocialLinks;
