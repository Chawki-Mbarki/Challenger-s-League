const mongoose = require('mongoose');
const championSchema = require('./champion.model');

const challengeSchema = new mongoose.Schema({
  challenger: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  challengerChamp: { type: championSchema, default: null },
  challengerResult: { type: Boolean, default: false },
  opponent: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  opponentChamp: { type: championSchema, default: null },
  opponentResult: { type: Boolean, default: false },
  status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
  state: { type: String, enum: ['waiting', 'Blind Pick', 'Draft Pick', 'result'], default: 'waiting' },
  gameMode: { type: String, enum: ['Blind Pick', 'Draft Pick'], required: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Challenge', challengeSchema);
