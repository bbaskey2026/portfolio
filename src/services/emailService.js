import { submitContactForm } from '../api/contact';

export const sendEmail = async (data) => {
  try {
    const response = await submitContactForm(data);
    return response;
  } catch (error) {
    throw new Error('Failed to send message. Please try again later.');
  }
};