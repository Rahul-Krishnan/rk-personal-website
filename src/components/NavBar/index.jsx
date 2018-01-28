import React from 'react';
import styles from './styles.module.css';

const NavBar = ({ sections, toggleTo, toggleToTop }) => (
  <div className={styles.navbar} id="navbar">
    <span
      className={styles.navbarItem}
      onClick={() => {
        toggleToTop();
      }}
    >
      {sections.header.title}
    </span>
    <span
      className={styles.navbarItem}
      onClick={() => {
        toggleTo('projects');
      }}
    >
      {sections.projects.title}
    </span>
    <span
      className={styles.navbarItem}
      onClick={() => {
        toggleTo('experience');
      }}
    >
      {sections.experience.title}
    </span>
    <span
      className={styles.navbarItem}
      onClick={() => {
        toggleTo('education');
      }}
    >
      {sections.education.title}
    </span>
    <span
      className={styles.navbarItem}
      onClick={() => {
        toggleTo('languages');
      }}
    >
      {sections.languages.title}
    </span>
    <span
      className={styles.navbarItem}
      onClick={() => {
        toggleTo('contact');
      }}
    >
      {sections.contact.title}
    </span>
  </div>
)

export default NavBar;
