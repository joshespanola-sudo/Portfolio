import React from 'react';
import styles from './Footer.module.css';

function Footer(){
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer} role="contentinfo">
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Navigation</h3>
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>About</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>Work</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Connect</h3>
          <ul>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile">LinkedIn</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile">GitHub</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Twitter profile">Twitter</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:josh@example.com" title="Send email" aria-label="Send email">📧 Email</a></li>
            <li><a href="tel:+1234567890" title="Call" aria-label="Call phone number">📞 Phone</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} title="Send message">💬 Message</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Josh Erick Lee Espanola. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
