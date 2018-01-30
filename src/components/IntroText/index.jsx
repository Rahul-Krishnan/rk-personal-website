import React from 'react';
import styles from './styles.module.css';

const IntroText = ({ text }) => (
  <div className={styles.container}>
    <p className={styles.anchor}>{text.anchor}</p>
    <b className={styles.rotateSection}>
      <div className={styles.cycleWords}>
        {text.cycleWords.map(word => (
          <div key={word} className={styles.word}>
            {word}
          </div>
        ))}
      </div>
    </b>
  </div>
)

export default IntroText;
