import api from "../../../config/axios";

const handleStartBattle = async (challenger, opponent, gameMode, setCurrentState, setError) => {
  if (!opponent) {
    setError("How Did You Even Do This !");
    return;
  }
  if (!gameMode) {
    setError("Please select a game mode");
    return;
  }
  const expirationTime = new Date(Date.now() + 10 * 60 * 1000);
  const newChallenge = {
    challenger: challenger,
    opponent: opponent,
    state: "waiting",
    gameMode,
    expiresAt: expirationTime,
  };
  try {
    await api.post("/challenge", newChallenge);
    setCurrentState("waiting");
    setError();
  } catch (err) {
    console.error("Error creating challenge:", err.response?.data || err.message);
    setError(err.response?.data?.message || "Error creating challenge");
  }
};

export default handleStartBattle;
