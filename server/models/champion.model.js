const mongoose = require('mongoose');

const championSchema = new mongoose.Schema({
  id: { type: String, required: true },
  key: { type: String, required: true },
  name: { type: String, required: true },
  image: {
    full: { type: String }
  },
  confirmed: { type: Boolean, default: false }
}, { _id: false });

module.exports = championSchema;
