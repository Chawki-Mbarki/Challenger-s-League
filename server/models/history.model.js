const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  player: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  matches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }],
  winCount: { type: Number, default: 0 },
  lossCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('History', historySchema);
