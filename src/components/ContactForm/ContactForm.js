import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactForm.module.css';

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

    // Simulate form submission (replace with emailjs if configured)
    try {
      // If using EmailJS, uncomment and configure:
      // emailjs.send(
      //   process.env.REACT_APP_EMAILJS_SERVICE_ID,
      //   process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     subject: formData.subject,
      //     message: formData.message,
      //     time: new Date().toLocaleString(),
      //   },
      //   process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      // );

      // For now, simulate successful submission
      setTimeout(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setLoading(false);

        // Clear success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      }, 800);
    } catch (err) {
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
