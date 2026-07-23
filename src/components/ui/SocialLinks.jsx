import React from 'react';
import { IconButton, Stack } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../config/constants';

const SocialLinks = ({ size = 'medium', color = '#000000' }) => {
  const links = [
    { icon: <FaGithub />, url: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: <FaLinkedin />, url: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: <FaTwitter />, url: SOCIAL_LINKS.twitter, label: 'Twitter' },
  ];

  return (
    <Stack direction="row" spacing={1}>
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
            border: '1px solid #E5E5E5',
            borderRadius: '8px',
            '&:hover': {
              borderColor: '#000000',
              backgroundColor: '#000000',
              color: '#FFFFFF',
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