const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  image_url: String,
  provider_id: String
});

module.exports = mongoose.model('User', UserSchema);