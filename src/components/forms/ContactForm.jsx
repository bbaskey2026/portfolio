import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { sendEmail } from '../../services/emailService';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await sendEmail(formData);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Failed to send message.',
      });
    } finally {
      setLoading(false);
    }
  };

  const textFieldSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#0a0a0a',
      color: '#ededed',
      '& fieldset': {
        borderColor: '#222222',
      },
      '&:hover fieldset': {
        borderColor: '#444444',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    },
    '& .MuiInputLabel-root': {
      color: '#666666',
      '&.Mui-focused': {
        color: '#ededed',
      },
    },
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {status.message && (
        <Alert
          severity={status.type}
          sx={{
            mb: 3,
            borderRadius: '8px',
            backgroundColor: status.type === 'success' ? '#072711' : '#2d0607',
            color: status.type === 'success' ? '#4ade80' : '#f87171',
            border: `1px solid ${status.type === 'success' ? '#166534' : '#991b1b'}`,
          }}
          onClose={() => setStatus({ type: '', message: '' })}
        >
          {status.message}
        </Alert>
      )}

      <Box sx={{ display: 'flex', gap: 2, mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          sx={textFieldSx}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={textFieldSx}
        />
      </Box>

      <TextField
        fullWidth
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
        sx={{ ...textFieldSx, mb: 2 }}
      />

      <TextField
        fullWidth
        label="Message"
        name="message"
        multiline
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
        sx={{ ...textFieldSx, mb: 3 }}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={loading}
        endIcon={
          loading ? (
            <CircularProgress size={18} color="inherit" />
          ) : (
            <SendIcon sx={{ fontSize: 18 }} />
          )
        }
        sx={{
          py: 1.3,
          px: 3.5,
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
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </Box>
  );
};

export default ContactForm;