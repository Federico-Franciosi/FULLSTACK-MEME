const mongoose = require('mongoose');

const MemeSchema = mongoose.Schema({
  meme: {
    type: String,
  },
  author: {
    type: String,
  },
});

module.exports = mongoose.model('memeGenerator', MemeSchema);
