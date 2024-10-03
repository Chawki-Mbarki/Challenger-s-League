import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 
import Styles from './ProgressCircle.module.css';

const ProgressCircle = ({ progress, text }) => {
  const getColor = (percent) => {
    if (percent <= 50) {
      const red = 255; 
      const green = Math.round((percent / 50) * 255); 
      return `rgb(${red}, ${green}, 0)`; 
    } else {
      const green = 255; 
      const red = Math.round(255 - ((percent - 50) / 50) * 255); 
      return `rgb(${red}, ${green}, 0)`; 
    }
  };

  return (
    <div className={Styles.progressContainer}>
      <div className={Styles.circle}>
        <CircularProgressbar
          value={progress}
          text={text}
          styles={buildStyles({
            textColor: '#333', 
            textSize: '16px',
            pathColor: getColor(progress), 
            trailColor: 'rgba(255, 255, 255, 0.3)', 
            strokeWidth: 12, 
          })}
        />
        <div className={Styles.percentageText}>{`${progress}%`}</div>
      </div>
    </div>
  );
};

export default ProgressCircle;