import React from "react";
import { Waiting, Champions, Btn, ChampionIcon } from "../../../components";
import defaultIcon from "../../../images/ChampionDefault.png";
import WaitingForOtherPlayerToPick from "./WaitingForOtherPlayerToPick";

const DraftPickChampionSelection = ({
  challenge,
  champions,
  handlePick,
  version,
  selectedChampion,
  otherChampion,
  handleSelectChampion,
  myRole,
  currentState,
  setCurrentState,
  Styles,
}) => {
  
  return (
    <div>
      <div style={{ display: "flex", gap: "70px" }}>
        {myRole == "challenger" ? (
          <>
            <div className="flex column center" style={{ width: "50%" }}>
              <ChampionIcon
                imageURL={
                  selectedChampion
                    ? `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${selectedChampion.image.full}`
                    : defaultIcon
                }
                isSelected={challenge.challengerChamp ? challenge.challengerChamp.confirmed : false}
              />
              <p
                className="flex center"
                style={{ textAlign: "center", height: "70px" }}
              >
                {selectedChampion ? selectedChampion.id : "Select A Champion"}
              </p>
            </div>
            <div className="flex column center" style={{ width: "50%" }}>
              <ChampionIcon
                imageURL={
                  otherChampion
                    ? `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${otherChampion.image.full}`
                    : defaultIcon
                }
                isSelected={challenge.opponentChamp ? challenge.opponentChamp.confirmed : false}
              />
              <p
                className="flex center"
                style={{ textAlign: "center", height: "70px" }}
              >
                {otherChampion ? otherChampion.id : <Waiting />}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex column center" style={{ width: "50%" }}>
              <ChampionIcon
                imageURL={
                  selectedChampion
                    ? `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${selectedChampion.image.full}`
                    : defaultIcon
                }
                isSelected={challenge.opponentChamp ? challenge.opponentChamp.confirmed : false}
              />
              <p
                className="flex center"
                style={{ textAlign: "center", height: "70px" }}
              >
                {selectedChampion ? selectedChampion.id : "Select A Champion"}
              </p>
            </div>
            <div className="flex column center" style={{ width: "50%" }}>
              <ChampionIcon
                imageURL={
                  otherChampion
                    ? `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${otherChampion.image.full}`
                    : defaultIcon
                }
                isSelected={challenge.challengerChamp ? challenge.challengerChamp.confirmed : false}
              />
              <p
                className="flex center"
                style={{ textAlign: "center", height: "70px" }}
              >
                {otherChampion ? otherChampion.id : <Waiting />}
              </p>
            </div>
          </>
        )}
      </div>
      {currentState === "Draft Pick" &&
      myRole === "challenger" &&
      challenge.challengerChamp?.confirmed ? (
        <WaitingForOtherPlayerToPick
          otherPlayer={challenge.opponent}
          Styles={Styles}
        />
      ) : currentState === "Draft Pick" &&
        myRole === "opponent" &&
        challenge.opponentChamp?.confirmed ? (
        <WaitingForOtherPlayerToPick
          otherPlayer={challenge.challenger}
          Styles={Styles}
        />
      ) : (
        <div>
          <Champions
            champions={champions}
            version={version}
            selectedChampion={selectedChampion}
            handleSelectChampion={handleSelectChampion}
          />
          <div>
            {myRole === "challenger" ? (
              challenge.challengerChamp?.confirmed ? (
                <Btn text={"Pick"} STYL="pick" disabled={true} />
              ) : (
                <Btn
                  text={"Pick"}
                  STYL="pick"
                  btnClick={() => handlePick(challenge, myRole)}
                />
              )
            ) : myRole === "opponent" ? (
              challenge.opponentChamp?.confirmed ? (
                <Btn text={"Pick"} STYL="pick" disabled={true} />
              ) : (
                <Btn
                  text={"Pick"}
                  STYL="pick"
                  btnClick={() => handlePick(challenge, myRole)}
                />
              )
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default DraftPickChampionSelection;
