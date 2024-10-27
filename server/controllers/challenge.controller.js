const Challenge = require("../models/challenge.model");

module.exports.createChallenge = async (req, res) => {
  const { opponent, gameMode } = req.body;
  if (!opponent || !gameMode) {
    return res.status(400).json({
      success: false,
      message: "Opponent and game mode are required",
    });
  }
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
  try {
    const existingChallengeFromUser = await Challenge.findOne({
      challenger: req.user.id,
      opponent,
      status: "pending",
    });
    const existingChallengeFromOpponent = await Challenge.findOne({
      challenger: opponent,
      opponent: req.user.id,
      status: "pending",
    });
    if (existingChallengeFromUser) {
      return res.status(400).json({
        success: false,
        message: "You already have a pending challenge with this opponent",
      });
    }
    if (existingChallengeFromOpponent) {
      return res.status(400).json({
        success: false,
        message: "The opponent has already challenged you",
      });
    }
    const activeChallenge = await Challenge.findOne({
      $or: [{ challenger: req.user.id }, { opponent: req.user.id }],
    });
    if (activeChallenge) {
      return res.status(400).json({
        success: false,
        message:
          "You cannot create a new challenge while having an active challenge",
      });
    }
    const newChallenge = await Challenge.create({
      challenger: req.user.id,
      opponent,
      gameMode,
      expiresAt,
    });
    return res.status(201).json({
      success: true,
      challenge: newChallenge,
    });
  } catch (error) {
    console.error("Error creating challenge:", error.message);
    return res.status(500).json({
      success: false,
      message: "Error creating challenge",
      error: error.message,
    });
  }
};

module.exports.updateChallenge = async (req, res) => {
  const challengeId = req.params.id;
  try {
    const updateData = req.body;
    const updatedChallenge = await Challenge.findByIdAndUpdate(
      challengeId,
      updateData,
      { new: true }
    );
    if (!updatedChallenge) {
      return res
        .status(404)
        .json({ success: false, message: "Challenge not found" });
    }
    res.status(200).json({ success: true, challenge: updatedChallenge });
  } catch (error) {
    console.error("Error updating challenge:", error);
    res.status(500).json({
      success: false,
      message: "Error updating challenge",
      error: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
};

module.exports.getChallengesAsOpponent = async (req, res) => {
  try {
    const challenges = await Challenge.find({ opponent: req.user.id })
      .populate("challenger", "-password -email -friends -blockedUsers")
      .populate("opponent", "-password -email -friends -blockedUsers")
      .exec();

    res.status(200).json({ success: true, challenges });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error fetching challenges",
      error: error.message,
    });
  }
};

module.exports.getActiveChallenge = async (req, res) => {
  try {
    const activeChallenge = await Challenge.findOne({
      $or: [
        { challenger: req.user.id, status: { $in: ['pending', 'accepted'] } },
        { opponent: req.user.id, status: 'accepted' }
      ]
    })
      .populate("challenger", "-password -email -friends -blockedUsers")
      .populate("opponent", "-password -email -friends -blockedUsers")
      .exec();

    res.status(200).json({ success: true, activeChallenge });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching active challenge",
      error: error.message,
    });
  }
};

module.exports.getChallenge = async (req, res) => {
  const challengeId = req.params.id;

  try {
    const challenge = await Challenge.findById(challengeId)
      .populate("challenger", "-password -email -friends -blockedUsers")
      .populate("opponent", "-password -email -friends -blockedUsers")
      .exec();

    if (!challenge) {
      return res.status(404).json({
        success: false,
        message: "Challenge not found",
      });
    }

    res.status(200).json({ success: true, challenge });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching challenge",
      error: error.message,
    });
  }
};

module.exports.deleteChallenge = async (req, res) => {
  const challengeId = req.params.id;

  try {
    const challenge = await Challenge.findByIdAndDelete(challengeId);

    if (!challenge) {
      return res.status(404).json({
        success: false,
        message: "Challenge not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Challenge deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting challenge:", error.message);
    res.status(500).json({
      success: false,
      message: "Error deleting challenge",
      error: error.message,
    });
  }
};
