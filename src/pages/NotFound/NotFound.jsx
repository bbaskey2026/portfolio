import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: '8rem',
            fontWeight: 700,
            color: '#F0F0F0',
            lineHeight: 1,
            mb: 2,
          }}
        >
          404
        </Typography>

        <Typography
          variant="h3"
          sx={{ mb: 2, color: '#000000' }}
        >
          Page not found
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, color: '#666666' }}
        >
          Sorry, the page you're looking for doesn't exist or has been
          moved.
        </Typography>

        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          size="large"
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFound;