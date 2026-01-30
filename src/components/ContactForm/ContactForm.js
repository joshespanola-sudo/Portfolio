import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';


function ContactForm(){
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');

    // Use EmailJS if configured
    try {
      // Basic env var check to give clearer debug feedback
      if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || !process.env.REACT_APP_EMAILJS_TEMPLATE_ID || !process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
        console.warn('EmailJS environment variables are missing. Please add REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID and REACT_APP_EMAILJS_PUBLIC_KEY to your .env file and restart the dev server.');
        setError('Email service is not configured.');
        setLoading(false);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      console.log('Sending via EmailJS with params:', templateParams);

      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      ).then((response) => {
        console.log('EmailJS success', response);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setLoading(false);
        setTimeout(() => setSubmitted(false), 5000);
      }).catch((err) => {
        console.error('EmailJS error', err);
        setError('Failed to send message. Please try again later.');
        setLoading(false);
      });
    } catch (err) {
      console.error('Unexpected error sending email', err);
      setError('Failed to send message. Please try again.');
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} ref={formRef} noValidate>
      <h3 className={styles.formTitle}>Send Me a Message</h3>

      {submitted && (
        <motion.div
          className={styles.successMessage}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          aria-live="polite"
        >
          ✓ Thank you! Your message has been sent successfully.
        </motion.div>
      )}

      {error && (
        <motion.div
          className={styles.errorMessage}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          aria-live="assertive"
        >
          ✗ {error}
        </motion.div>
      )}

      <div className={styles.formGroup}>
        <label htmlFor="name">Name <span className={styles.required}>*</span></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          aria-required="true"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email <span className={styles.required}>*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          aria-required="true"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject">Subject <span className={styles.required}>*</span></label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Message Subject"
          required
          aria-required="true"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Message <span className={styles.required}>*</span></label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
          aria-required="true"
        />
      </div>

      <button
        type="submit"
        className={styles.submitBtn}
        aria-label="Send message"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

export default ContactForm;
