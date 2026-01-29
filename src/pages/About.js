import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const skills = [
  'Animation', 'Motion Graphics', '3D Modeling', 'Visual Effects', 'Video Editing',
  'UI/UX Animation', 'Storyboarding', 'Character Design', 'After Effects', 'Blender'
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.12 } }
};

const item = { initial: { opacity:0, y:18 }, animate: { opacity:1, y:0, transition:{ duration:0.6, ease:'easeOut' } } };

export default function About(){
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <motion.h2 className={styles.sectionTitle} initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>About Me</motion.h2>

        <motion.div className={styles.contentGrid} variants={containerVariants} initial="initial" animate="animate">
          <motion.div className={styles.imagePlaceholder} variants={item} aria-hidden>
            🎨
          </motion.div>

          <motion.div className={styles.textContent}>
            <motion.p className={styles.paragraph} variants={item}>
              I'm <span className={styles.highlight}>Josh Erick Lee Espanola</span>, a third-year Entertainment and Multimedia Computing (EMC) student passionate about digital animation and visual storytelling.
            </motion.p>

            <motion.p className={styles.paragraph} variants={item}>
              I focus on clean motion, thoughtful composition, and accessible interaction. I enjoy crafting visuals that communicate clearly and feel cinematic while remaining calm and purposeful.
            </motion.p>

            <motion.p className={styles.paragraph} variants={item}>
              Outside of class I explore procedural techniques and motion-driven UI to push visual narratives forward in real-time and recorded media.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.section className={styles.skillsSection} variants={containerVariants} initial="initial" animate="animate">
          <h3 className={styles.skillsTitle}>Skills &amp; Tools</h3>
          <div className={styles.skillsGrid}>
            {skills.map((s, i) => (
              <motion.div className={styles.skillTag} key={s} initial={{opacity:0, scale:0.96}} animate={{opacity:1, scale:1}} transition={{ delay: i * 0.04, duration:0.26 }}>{s}</motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
