const mongoose = require('mongoose');
const championSchema = require('./champion.model');

const matchSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, enum: ['challenger', 'opponent'], required: true },
  challenger: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  challengerChamp: { type: championSchema, default: null },
  opponent: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  opponentChamp: { type: championSchema, default: null },
  result: { type: String, enum: ['won', 'lost'], required: true },
  matchDate: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Match', matchSchema);
