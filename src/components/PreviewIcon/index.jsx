import React from 'react';
import styles from './styles.module.css';

const PreviewIcon = ({ name, image }) => (
  <div className={styles.tile}>
    <img alt={name} className={styles.image} src={image} />
    <div className={styles.overlay}>
      <span className={styles.name}>{name}</span>
    </div>
  </div>
);

export default PreviewIcon;
