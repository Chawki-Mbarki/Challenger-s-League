import React, { useState } from "react";
import { ChampionIcon, Waiting } from "../";

import Styles from './Champions.module.css'

const Champions = ({ champions, version, selectedChampion, handleSelectChampion }) => {
  return (
    <div className={Styles.championsContainer}>
      {champions === null ? (
        <div className="flex" style={{ justifyContent: "center" }}>
          <Waiting />
        </div>
      ) : champions.length === 0 ? (
        <div className={Styles.no}>No Champions found</div>
      ) : (
        <ul className={`${Styles.champions} flex`}>
          {champions.map((champ) => (
            <li key={champ.key}>
              <ChampionIcon
                imageURL={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.image.full}`}
                isSelected={selectedChampion === champ}
                onSelect={() => handleSelectChampion(champ)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Champions;
