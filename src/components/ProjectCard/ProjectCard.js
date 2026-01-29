import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

// ProjectCard: displays project with image, title, description, and tag links
// Safe, accessible component with proper focus management and WCAG compliance
function ProjectCard({ title, description, tags = [], image = null, index = 0, links = [] }){
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
  };

  // Use links array if provided, otherwise fall back to tags for backward compatibility
  const displayItems = links && links.length > 0 ? links : tags;

  return (
    <motion.article
      className={styles.card}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      role="article"
      aria-label={`${title} project card`}
    >
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={`${title} project`} loading="lazy" />
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {displayItems && displayItems.length > 0 && (
          <div className={styles.tags}>
            {displayItems.map((item, idx) => {
              // Support both string tags and object links
              const label = typeof item === 'string' ? item : item.label;
              const href = typeof item === 'string' ? '#' : item.url;
              const isLink = typeof item === 'object' && item.url;

              return isLink ? (
                <a
                  key={idx}
                  href={href}
                  className={styles.tag}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${label}`}
                >
                  {label}
                </a>
              ) : (
                <span key={idx} className={styles.tag}>
                  {label}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
