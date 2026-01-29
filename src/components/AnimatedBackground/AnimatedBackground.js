import React from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
  const particles = Array.from({ length: 30 }, (_, i) => i);

  const randomX = () => Math.random() * 100;
  const randomY = () => Math.random() * 100;
  const randomDuration = () => Math.random() * 8 + 8;
  const randomDelay = () => Math.random() * 2;

  return (
    <div className={styles.container}>
      <div className={styles.gradientBg} />
      {particles.map((i) => (
        <motion.div
          key={i}
          className={styles.particle}
          initial={{
            x: `${randomX()}%`,
            y: `${randomY()}%`,
            opacity: 0,
          }}
          animate={{
            y: ['0%', '-100%'],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: randomDuration(),
            delay: randomDelay(),
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
