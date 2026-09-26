import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        color: '#ededed',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: '8rem',
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1,
            mb: 2,
            letterSpacing: '-0.05em',
          }}
        >
          404
        </Typography>

        <Typography
          variant="h3"
          sx={{ mb: 2, color: '#ffffff', fontWeight: 700, letterSpacing: '-0.02em' }}
        >
          Page not found
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, color: '#888888' }}
        >
          Sorry, the page you are looking for does not exist or has been moved.
        </Typography>

        <Button
          variant="contained"
          startIcon={<ArrowBackIcon sx={{ fontSize: 18 }} />}
          onClick={() => navigate('/')}
          size="large"
          sx={{
            backgroundColor: '#ffffff',
            color: '#000000',
            fontWeight: 600,
            py: 1.2,
            px: 3.5,
            borderRadius: '9999px',
            border: '1px solid #ffffff',
            '&:hover': {
              backgroundColor: '#eaeaea',
              borderColor: '#eaeaea',
            },
          }}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFound;