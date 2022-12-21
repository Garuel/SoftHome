const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'rokasa';

exports.createToken = function (user) {
  var payload = {
    sub: user._id,
    usuario: user.usuario,
    email: user.email,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix(),
  };
  return jwt.encode(payload, secret);
};
