import React, { useEffect, useState } from "react";
import Styles from "./ChampionIcon.module.css";

const ChampionIcon = ({ imageURL, isSelected, onSelect }) => {
  const [icon, setIcon] = useState("https://via.placeholder.com/100");

  useEffect(() => {
    if (imageURL) {
      setIcon(imageURL);
    }
  }, [imageURL]);

  return (
    <div
      className={`${Styles.iconContainer} ${isSelected ? Styles.selected : ""}`} 
      onClick={onSelect} 
    >
      <img src={icon} alt="Champion Icon" />
    </div>
  );
};

export default ChampionIcon;
