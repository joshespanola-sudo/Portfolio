import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm/ContactForm';
import styles from './Contact.module.css';

function Contact(){
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '🐙', label: 'Visit GitHub profile' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼', label: 'Visit LinkedIn profile' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '𝕏', label: 'Connect on Twitter' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷', label: 'Follow on Instagram' }
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.15 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const scrollVariants = {
    initial: { opacity: 0.5, y: 0 },
    animate: { opacity: [0.5, 1, 0.5], y: [0, 10, 0], transition: { duration: 2, repeat: Infinity } }
  };

  const handleScrollDown = () => {
    window.scrollBy({ top: 400, behavior: 'smooth' });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div className={styles.contactHeader} variants={containerVariants} initial="initial" animate="animate">
        <motion.h1 className={styles.contactTitle} variants={itemVariants}>
          Get in <span className={styles.highlight}>Touch</span>
        </motion.h1>
        <motion.p className={styles.subtitle} variants={itemVariants}>
          Let's Create Something Amazing
        </motion.p>
        <motion.p className={styles.description} variants={itemVariants}>
          Have a project idea or want to collaborate? I'd love to hear from you. Send a message and let's talk about bringing your vision to life.
        </motion.p>
      </motion.div>

      <motion.div className={styles.contactContent} variants={containerVariants} initial="initial" animate="animate">
        {/* Form Section */}
        <motion.div className={styles.formWrapper} variants={itemVariants}>
          <ContactForm />
        </motion.div>

        {/* Info Section */}
        <motion.div className={styles.infoSection} variants={containerVariants} initial="initial" animate="animate">
          <motion.h3 variants={itemVariants}>Connect With Me</motion.h3>
          <motion.p className={styles.infoText} variants={itemVariants}>
            Follow me on social media or reach out directly. I'm always excited to meet new people and explore collaboration opportunities!
          </motion.p>

          <motion.div className={styles.socialLinksGrid} variants={itemVariants}>
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
                aria-label={link.label}
                title={link.label}
              >
                <span className={styles.socialIcon}>{link.icon}</span>
                <span className={styles.socialName}>{link.name}</span>
              </a>
            ))}
          </motion.div>

          <motion.div className={styles.contactInfo} variants={itemVariants}>
            <h4>Other Ways to Reach</h4>
            <p><strong>Email:</strong> <a href="mailto:josh@example.com">josh@example.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-8900</a></p>
            <p><strong>Location:</strong> <span>Butuan City, Philippines</span></p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
