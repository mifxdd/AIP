const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: String,
  nick: {
    type: String,
    unique: true,
    required: true
  },
  avatar: String,
  desc: String,
  created: {
    type: Date,
    default: Date.now
  }
});

cardSchema.methods.getCardLabel = function() {
  return `${this.title} (${this.nick})`;
};

module.exports = cardSchema;
