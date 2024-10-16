import { updateChallenge } from "../../../api/challengeApi";

const handleDraftPick = async (challenge, myRole) => {
    const updatedChallengeData = myRole === "challenger" 
      ? { challengerChamp: { ...challenge.challengerChamp, confirmed: true } } 
      : { opponentChamp: { ...challenge.opponentChamp, confirmed: true } };
    console.log(challenge);
    console.log(updatedChallengeData);
    await updateChallenge(challenge._id, updatedChallengeData);
};

export default handleDraftPick;
