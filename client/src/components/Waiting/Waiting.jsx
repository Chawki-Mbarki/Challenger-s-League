import React from 'react';
import styles from './Waiting.module.css';

const WaitingAnimation = () => {
  return (
    <div className={styles.waitingContainer}>
      <div className={`${styles.circle} ${styles.small}`}></div>
      <div className={`${styles.circle} ${styles.medium}`}></div>
      <div className={`${styles.circle} ${styles.big}`}></div>
    </div>
  );
};

export default WaitingAnimation;
