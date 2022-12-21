const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  usuario: String,
  email: String,
  password: String,
});

module.exports = model('user', UserSchema);
