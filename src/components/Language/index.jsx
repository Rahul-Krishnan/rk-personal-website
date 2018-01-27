import React from 'react';
import styles from './styles.module.css';

const Language = ({ name, image, website }) => (
  <div>
    <img className={styles.logo} alt={name} src={image} />
    <a href={website} target="_blank" className={styles.overlay}>
      <span className={styles.name}>{name}</span>
    </a>
  </div>
);

export default Language;
