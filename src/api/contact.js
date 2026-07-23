export const submitContactForm = async (formData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form submitted:', formData);
      resolve({ success: true, message: 'Message sent successfully!' });
    }, 1500);
  });
};