import { createMatch } from "../../../api/matchApi";
import { updateChallenge, deleteChallenge } from "../../../api/challengeApi";

const handleResult = async (result, challenge, myRole, navigate) => {
  const matchData = {
    owner: challenge[myRole]._id,
    role: myRole,
    challengeId: challenge._id,
    result,
  };

  console.log("Sending matchData:", matchData);

  try {
    await createMatch(matchData);
    const updatedChallenge = {
      ...challenge,
      [myRole === "challenger" ? "challengerResult" : "opponentResult"]: true,
    };

    if (updatedChallenge.challengerResult && updatedChallenge.opponentResult) {
      await deleteChallenge(updatedChallenge._id);
      console.log("Challenge deleted successfully");
    } else {
      await updateChallenge(challenge._id, updatedChallenge);
    }
    navigate("/dashboard");
    console.log("Match result saved successfully");
  } catch (error) {
    console.error("Failed to save match result:", error.response ? error.response.data : error.message);
  }
};

export default handleResult;
