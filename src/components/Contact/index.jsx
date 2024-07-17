import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const publicKey = '1OjFlAb8N3CpNCmAj'; // Updated public key

    // Add console logs to check the form data
    console.log('Form Data:', form.current);

    emailjs.sendForm('service_dw9ukb2', 'template_n8y4f1z', form.current, publicKey)
      .then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text);
          alert('Message sent successfully');
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message');
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" required />
      <label>Email</label>
      <input type="email" name="email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
