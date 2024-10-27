const Match = require("../models/match.model");
const Challenge = require("../models/challenge.model");

module.exports.createMatch = async (req, res) => {
  const { owner, role, challengeId, result } = req.body;

  try {
    if (!owner || !role || !challengeId || !result) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const challenge = await Challenge.findById(challengeId).select(
      "challenger challengerChamp opponent opponentChamp createdAt"
    );
    if (!challenge) {
      return res.status(404).json({ error: "Challenge not found" });
    }
    const { challenger, challengerChamp, opponent, opponentChamp, createdAt } =
      challenge;
    const match = await Match.create({
      owner,
      role,
      challenger,
      challengerChamp,
      opponent,
      opponentChamp,
      result,
      matchDate: createdAt,
    });
    res.status(201).json({ match });
  } catch (error) {
    console.error("Error creating match:", error);
    res.status(500).json({ error: "Failed to create match" });
  }
};

module.exports.getMatchHistory = async (req, res) => {
  try {
    const matches = await Match.find({ owner: req.user.id })
      .populate("challenger", "-password -email -friends -blockedUsers")
      .populate("opponent", "-password -email -friends -blockedUsers")
      .exec();
    const totalMatches = matches.length;
    const wins = matches.filter((match) => match.result === "won").length;
    const winRate =
      totalMatches > 0 ? ((wins / totalMatches) * 100).toFixed(2) : 0;
    res.status(200).json({ matches, winRate });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch match history" });
  }
};
