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
        backgroundColor: '#ffffff',
        color: '#000000',
        py: 8,
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: '8rem',
            fontWeight: 800,
            color: '#f0f0f0',
            lineHeight: 1,
            mb: 2,
            letterSpacing: '-5px',
          }}
        >
          404
        </Typography>

        <Typography
          variant="h3"
          sx={{ mb: 2, color: '#000000', fontWeight: 800, letterSpacing: '-1px' }}
        >
          Page not found
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, color: '#666666', fontSize: '1.05rem' }}
        >
          Sorry, the page you are looking for does not exist or has been moved.
        </Typography>

        <Button
          variant="contained"
          startIcon={<ArrowBackIcon sx={{ fontSize: 18 }} />}
          onClick={() => navigate('/')}
          size="large"
          sx={{
            backgroundColor: '#000000',
            color: '#ffffff',
            fontWeight: 600,
            py: 1.4,
            px: 3.5,
            borderRadius: 1,
            '&:hover': {
              backgroundColor: '#222222',
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