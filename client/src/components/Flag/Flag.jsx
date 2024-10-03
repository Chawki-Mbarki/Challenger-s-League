import React from 'react';
import styles from './Flag.module.css'; 

const Flag = ({ text, type }) => {
  return (
    <div className={`${styles.flag} ${type === 'primary' ? styles.primary : styles.black}`}>
      {text}
    </div>
  );
};

export default Flag;
