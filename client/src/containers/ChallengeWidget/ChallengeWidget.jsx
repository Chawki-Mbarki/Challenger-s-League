import React, { useState, useEffect } from "react";
import Styles from "./ChallengeWidget.module.css";
import { Btn, Flag, Waiting } from "../../components";
import {
  handleFetchingChampionsFromRiot,
  handleGameModeChange,
  handleStartBattle,
  handleResult,
  handleDraftPick,
} from "./Functions";
import {
  ChallengeStart,
  WaitingForResponse,
  DraftPickChampionSelection,
  Result,
} from "./WidgetContent";
import { updateChallenge } from "../../api/challengeApi";

const ChallengeWidget = ({
  onClose,
  importedChallenge,
  setChallengeDetails,
  currentState,
  setCurrentState,
  myRole,
}) => {
  const [gameMode, setGameMode] = useState(null);
  const [otherChampion, setOtherChampion] = useState(null);
  const [champions, setChampions] = useState([]);
  const [version, setVersion] = useState([]);
  const [error, setError] = useState(null);
  const [selectedChampion, setSelectedChampion] = useState(null);

  const handleSelectChampion = async (champ) => {
    const updatedChallengeData =
      myRole === "challenger"
        ? { challengerChamp: champ }
        : { opponentChamp: champ };

    setChallengeDetails({ ...importedChallenge, ...updatedChallengeData });

    myRole === "challenger"
      ? setSelectedChampion(champ)
      : setOtherChampion(champ);

    await updateChallenge(importedChallenge._id, updatedChallengeData);
  };

  useEffect(() => {
    if (importedChallenge) {
      const { challengerChamp, opponentChamp } = importedChallenge;
      if (myRole === "challenger") {
        setSelectedChampion(challengerChamp);
        setOtherChampion(opponentChamp);
      } else {
        setSelectedChampion(opponentChamp);
        setOtherChampion(challengerChamp);
      }
    }
  }, [importedChallenge, myRole]);

  const fetchChampions = async () => {
    await handleFetchingChampionsFromRiot(setChampions, setVersion, setError);
  };

  useEffect(() => {
    fetchChampions();
  }, []);

  const handleBlindPick = async () => {
    const randomIndex1 = Math.floor(Math.random() * champions.length);
    let randomIndex2 = Math.floor(Math.random() * champions.length);

    while (randomIndex1 === randomIndex2) {
      randomIndex2 = Math.floor(Math.random() * champions.length);
    }

    const champ1 = champions[randomIndex1];
    const champ2 = champions[randomIndex2];

    const updatedChallengeData = {
      challengerChamp: { ...champ1, confirmed: true },
      opponentChamp: { ...champ2, confirmed: true },
      state: "result",
    };

    setChallengeDetails({ ...importedChallenge, ...updatedChallengeData });

    if (myRole === "challenger") {
      setSelectedChampion(champ1);
      setOtherChampion(champ2);
    } else {
      setSelectedChampion(champ2);
      setOtherChampion(champ1);
    }

    await updateChallenge(importedChallenge._id, updatedChallengeData);

    setCurrentState("result");
  };

  useEffect(() => {
    if (currentState === "Blind Pick" && champions.length > 0) {
      handleBlindPick();
    }
  }, [currentState, champions]);

  useEffect(() => {
    const updateChallengeState = async () => {
      if (
        importedChallenge?.challengerChamp?.confirmed &&
        importedChallenge?.opponentChamp?.confirmed
      ) {
        const updatedChallengeData = { state: "result" };
        await updateChallenge(importedChallenge._id, updatedChallengeData);
        setCurrentState("result");
      }
    };

    updateChallengeState();
  }, [importedChallenge, setCurrentState]);

  if (!importedChallenge) {
    return (
      <div className="flex center">
        <p style={{ color: "white", fontSize: "27px" }}>
          Loading Challenge Details
        </p>
        <Waiting />
      </div>
    );
  }

  return (
    <div className={`${Styles.overlay} flex column`}>
      <div className={Styles.widgetContainer}>
        <div className={Styles.info}>
          <h2>
            <span>
              {myRole === "challenger"
                ? importedChallenge.challenger.username
                : importedChallenge.opponent.username}
            </span>
            <Flag text={"VS"} type={"black"} />
            <span>
              {myRole === "challenger"
                ? importedChallenge.opponent.username
                : importedChallenge.challenger.username}
            </span>
          </h2>
          <p>
            {currentState === "start"
              ? gameMode === null
                ? "Select A Game Mode"
                : `(${gameMode})`
              : importedChallenge.gameMode}
          </p>
        </div>
        {currentState === "start" && (
          <ChallengeStart
            challenger={importedChallenge.challenger}
            opponent={importedChallenge.opponent}
            onGameModeChange={(e) => handleGameModeChange(e, setGameMode)}
            onStartBattle={() =>
              handleStartBattle(
                importedChallenge.challenger,
                importedChallenge.opponent,
                gameMode,
                setCurrentState,
                setError
              )
            }
          />
        )}
        {currentState === "waiting" && (
          <WaitingForResponse
            opponent={importedChallenge.opponent}
            Styles={Styles}
          />
        )}
        {currentState === "Draft Pick" && (
          <DraftPickChampionSelection
            challenge={importedChallenge}
            champions={champions}
            handlePick={handleDraftPick}
            selectedChampion={selectedChampion}
            otherChampion={otherChampion}
            handleSelectChampion={handleSelectChampion}
            version={version}
            myRole={myRole}
            currentState={currentState}
            setCurrentState={setCurrentState}
            Styles={Styles}
          />
        )}
        {currentState === "result" && (
          <Result
            challenge={importedChallenge}
            selectedChampion={selectedChampion}
            otherChampion={otherChampion}
            version={version}
            myRole={myRole}
            handleResult={handleResult}
          />
        )}
        <Btn type={"button"} STYL="white" text={"Close"} onClick={onClose} />
      </div>
      <div className={Styles.error}>
        {error && <Flag type="error" text={error} />}
      </div>
    </div>
  );
};

export default ChallengeWidget;
