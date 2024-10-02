const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  player1: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  player2: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  champion1Id: { type: Number, required: true },
  champion2Id: { type: Number, required: true },
  result: { type: String, enum: ['Player1', 'Player2', 'Draw'], required: true },
  matchDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Match', matchSchema);
