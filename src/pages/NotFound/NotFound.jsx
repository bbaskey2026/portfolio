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
        color: '#ffffff',
        py: 8,
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: { xs: '6rem', md: '8rem' },
            fontWeight: 800,
            color: '#1c1c1c',
            lineHeight: 1,
            mb: 2,
            letterSpacing: '-5px',
          }}
        >
          404
        </Typography>

        <Typography
          variant="h3"
          sx={{ mb: 2, color: '#ffffff', fontWeight: 500, letterSpacing: '-0.03em' }}
        >
          Page not found
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, color: '#9a9a9a', fontSize: '1.05rem' }}
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
            fontWeight: 500,
            py: 1.3,
            px: 3.5,
            borderRadius: 999,
            border: '1px solid #ffffff',
            '&:hover': {
              backgroundColor: '#ededed',
              transform: 'translateY(-2px)',
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
