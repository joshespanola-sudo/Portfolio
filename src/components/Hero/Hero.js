import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

// A modern, cinematic hero section with accessible controls and subtle motion.
function Hero() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const scrollVariants = {
    initial: { opacity: 0.5, y: 0 },
    animate: {
      opacity: [0.5, 1, 0.5],
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <section className={styles.hero} role="banner" aria-label="Intro">
      <motion.div 
        className={styles.content} 
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 className={styles.title} variants={itemVariants}>
          Hi, I'm Josh
        </motion.h1>

        <motion.p className={styles.subtitle} variants={itemVariants}>
          Animator & Multimedia Artist
        </motion.p>

        <motion.p className={styles.description} variants={itemVariants}>
          I create engaging visual content and bring ideas to life through creative 
          animation and multimedia design. Welcome to my portfolio.
        </motion.p>

        <motion.div className={styles.buttonGroup} variants={itemVariants}>
          <a 
            href="#projects"
            className={`${styles.button} ${styles.primary}`}
            onClick={(e) => handleScroll(e, 'projects')}
          >
            View Projects
          </a>
          <a 
            href="#contact"
            className={`${styles.button} ${styles.secondary}`}
            onClick={(e) => handleScroll(e, 'contact')}
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.scrollIndicator}
        variants={scrollVariants}
        initial="initial"
        animate="animate"
        aria-label="Scroll down to learn more"
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 5v14M19 18l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

export default Hero;
