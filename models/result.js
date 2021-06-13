const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('result', resultSchema);
