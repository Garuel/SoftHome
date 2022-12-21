var express = require('express');
var videoJuegoController = require('../controller/videoJuegoController');
var multipart = require('connect-multiparty');
var path = multipart({ uploadDir: './uploads/videojuego' });

var api = express.Router();

api.post('/videojuego/registrar', path, videoJuegoController.registrar);
api.get('/videojuego/:titulo?', videoJuegoController.listar);
api.put('/videojuego/editar/:id/:img?', path, videoJuegoController.editar);
api.get('/videojuego/:id', videoJuegoController.obtener_videoJuego);
api.delete('/videojuego/:id', videoJuegoController.eliminar);
api.put('/videojuego/stock/:id', videoJuegoController.update_stock);
api.get('/videojuego/img/:img', videoJuegoController.get_img);

module.exports = api;
