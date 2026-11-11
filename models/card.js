const mongoose = require('mongoose');
const cardSchema = require('./cardSchema');

const Card = mongoose.models.Card || mongoose.model('Card', cardSchema, 'cards');

module.exports = Card;
