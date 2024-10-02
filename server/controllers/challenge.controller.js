const Challenge = require('../models/challenge.model');

module.exports.createChallenge = async (req, res) => {
  const { opponent, gameMode } = req.body;
  Challenge.create({ challenger: req.user.id, opponent, gameMode })
    .then((newChallenge) => res.status(200).json({ challenge: newChallenge }))
    .catch((error) => res.status(400).json("Error: ", error));
};

module.exports.updateChallenge = async (req, res) => {
  Challenge.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true })
    .then((updatedChallenge) => res.status(200).json(updatedChallenge))
    .catch((error) => res.status(400).json("Error: ", error));
};
