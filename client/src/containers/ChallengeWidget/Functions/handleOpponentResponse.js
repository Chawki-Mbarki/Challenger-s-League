import { getChallenge } from "../../../api/challengeApi";

// ! (this method needs to be fixed or redone entirely)
const handleOpponentResponse = async (user, champions, setSelectedChampion, gameMode, setCurrentState) => {
  try {
    const response = await getChallenge(`/api/challenge/${user._id}/status`);
    if (response.data.status === "accepted") {
      if (gameMode === "Blind Pick") {
        setSelectedChampion(champions[Math.floor(Math.random() * champions.length)].id);
      }
      setCurrentState(gameMode === "Blind Pick" ? "Blind Pick" : "Draft Pick");
    }
  } catch (error) {
    console.error("Error fetching opponent response:", error);
  }
};

export default handleOpponentResponse;
