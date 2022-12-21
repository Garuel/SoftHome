var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var videojuegoSchema = Schema({
  nombre: String,
  descripcion: String,
  imagen: String,
  precio: Number,
  requisitos: String,
  idcategoria: { type: Schema.ObjectId, ref: 'categoria' },
});

module.exports = mongoose.model('videoJuego', videojuegoSchema);
