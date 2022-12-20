var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetalleVentaSchema = Schema({
  idVideoJuego: { type: Schema.ObjectId, ref: 'videoJuego' },
  cantidad: Number,
  venta: { type: Schema.ObjectId, ref: 'venta' },
});

module.exports = mongoose.model('detalleventa', DetalleVentaSchema);
