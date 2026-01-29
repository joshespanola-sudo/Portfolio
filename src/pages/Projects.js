import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';

const projects = [
  { id: 1, title: '2D Animation', description: 'Advanced 2D animation project featuring complex character design, smooth keyframe animations, and engaging storytelling.', icon: '🎬', tags: ['Animation', 'Character'] },
  { id: 2, title: 'Motion Graphics Promo', description: 'Dynamic motion graphics video featuring animated typography, transitions, and visual effects for digital media.', icon: '✨', tags: ['Motion', 'Graphics'] },
  { id: 3, title: '3D Product Visualization', description: 'Interactive 3D product showcase with realistic lighting, materials, and smooth camera movements.', icon: '🎭', tags: ['3D', 'WebGL'] },
  { id: 4, title: 'UI Animation Library', description: 'Comprehensive collection of reusable UI animations and micro-interactions built with Framer Motion for React.', icon: '⚡', tags: ['React', 'UI'] },
  { id: 5, title: 'Visual Effects Reel', description: 'Stunning compilation of VFX work including particle systems, fluid simulations, and advanced visual effects.', icon: '🌟', tags: ['VFX', 'Effects'] },
  { id: 6, title: 'Interactive Story', description: 'Web-based interactive narrative with branching storylines, animated illustrations, and immersive sound design.', icon: '📖', tags: ['Interactive', 'Story'] }
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const titleVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Projects(){
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <motion.h2 className={styles.sectionTitle} variants={titleVariants} initial="initial" animate="animate">
          My Projects
        </motion.h2>
        <motion.p className={styles.subtitle} variants={titleVariants} initial="initial" animate="animate" transition={{ delay: 0.1 }}>
          Explore a selection of my recent work in animation, motion graphics, and interactive media.
        </motion.p>

        <motion.div className={styles.projectsGrid} variants={containerVariants} initial="initial" animate="animate">
          {projects.map(p => (
            <ProjectCard key={p.id} title={p.title} description={p.description} tags={p.tags} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
