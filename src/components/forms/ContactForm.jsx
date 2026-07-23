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
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const textFieldSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      '& fieldset': {
        borderColor: '#E5E5E5',
      },
      '&:hover fieldset': {
        borderColor: '#CCCCCC',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#000000',
        borderWidth: 1,
      },
    },
    '& .MuiInputLabel-root': {
      color: '#999999',
      '&.Mui-focused': {
        color: '#000000',
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
            border: '1px solid',
            borderColor:
              status.type === 'success' ? '#E5E5E5' : '#FFE5E5',
          }}
          onClose={() => setStatus({ type: '', message: '' })}
        >
          {status.message}
        </Alert>
      )}

      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
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
        rows={6}
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
            <CircularProgress size={20} color="inherit" />
          ) : (
            <SendIcon />
          )
        }
        sx={{
          py: 1.5,
          px: 4,
        }}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </Box>
  );
};

export default ContactForm;