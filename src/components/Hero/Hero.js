import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

// A modern, cinematic hero section with accessible controls and subtle motion.
function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <header className={styles.hero} role="banner" aria-label="Intro">
      <div className={styles.bgLayer} aria-hidden="true">
        <div className={styles.glow} />
        <div className={styles.shape} />
      </div>

      <motion.div className={styles.inner} variants={container} initial="hidden" animate="show">
        <motion.p className={styles.kicker} variants={item} aria-hidden>
          Creative Technology & Motion
        </motion.p>

        <motion.h1 className={styles.title} variants={item}>
          HI, I'M JOSH ESPANOLA
        </motion.h1>

        <motion.p className={styles.lead} variants={item}>
          I design calm, cinematic interfaces and motion-led visuals focused on clarity and craft.
        </motion.p>

        <motion.div className={styles.ctaRow} variants={item}>
          <button className={styles.primary} onClick={() => handleScroll('projects')}>View Work</button>
          <button className={styles.ghost} onClick={() => handleScroll('contact')}>Get In Touch</button>
        </motion.div>

        <motion.div className={styles.indicator} variants={item} aria-hidden>
          <span className={styles.bounce} />
        </motion.div>
      </motion.div>
    </header>
  );
}

export default Hero;
