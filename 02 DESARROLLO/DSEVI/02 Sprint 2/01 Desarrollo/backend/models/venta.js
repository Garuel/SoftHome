var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VentaSchema = Schema({
  iduser: { type: Schema.ObjectId, ref: 'user' },
  fecha: { type: Date, default: Date.now },
  monto: Number,
});

module.exports = mongoose.model('venta', VentaSchema);
