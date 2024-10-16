import React, { useEffect, useState } from "react";
import Styles from "./ChampionIcon.module.css";
import defaultIcon from "../../images/ChampionDefault.png";

const ChampionIcon = ({ imageURL, isSelected, onSelect, championName }) => {
  const [icon, setIcon] = useState(defaultIcon);

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
      <img src={icon} alt={championName ? `${championName} Icon` : "Champion Icon"} />
    </div>
  );
};

export default ChampionIcon;
