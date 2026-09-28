import React from 'react';
import { IconButton, Stack } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../config/constants';

const SocialLinks = ({ size = 'medium', color = '#000000' }) => {
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
            border: '1px solid #e5e5e5',
            backgroundColor: '#ffffff',
            borderRadius: 1,
            p: 1.2,
            '&:hover': {
              borderColor: '#000000',
              backgroundColor: '#f5f5f5',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.15s ease',
          }}
        >
          {link.icon}
        </IconButton>
      ))}
    </Stack>
  );
};

export default SocialLinks;