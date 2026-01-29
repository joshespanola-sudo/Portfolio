import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Navigation.module.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export default function Navigation(){
  const [open, setOpen] = useState(false);

  const handleScroll = (e, id) => {
    if (e) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <motion.nav className={styles.navbar} initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }} role="navigation" aria-label="Primary navigation">
      <div className={styles.container}>
        <a href="#" className={styles.brand} onClick={(e) => { e.preventDefault(); window.scrollTo({ top:0, behavior: 'smooth' }); setOpen(false); }}>
          <img src="/images/profile.jpg" alt="Profile" className={styles.avatar} />
          <span className={styles.brandText}>Portfolio</span>
        </a>

        <button className={styles.toggle} onClick={() => setOpen(s => !s)} aria-label="Toggle menu" aria-expanded={open} aria-controls="nav-links">
          <span className={styles.hamburger} />
        </button>

        <div id="nav-links" className={`${styles.links} ${open ? styles.open : ''}`} data-open={open}>
          {NAV_ITEMS.map(item => (
            <a key={item.id} href={`#${item.id}`} className={styles.link} onClick={(e) => handleScroll(e, item.id)}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
