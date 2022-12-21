var VideoJuego = require('../models/videoJuego');
var fs = require('fs');
var path = require('path');

function registrar(req, res) {
  var data = req.body;

  if (req.files) {
    var imagen_path = req.files.imagen.path;
    var name = imagen_path.split('\\');
    var imagen_name = name[2];

    var videoJuego = new VideoJuego();
    videoJuego.nombre = data.nombre;
    videoJuego.descripcion = data.descripcion;
    videoJuego.imagen = imagen_name;
    videoJuego.precio = data.precio;
    videoJuego.requisitos = data.requisitos;
    videoJuego.idcategoria = data.idcategoria;

    videoJuego.save((err, videoJuego_save) => {
      if (err) {
        res.status(500).send({ message: 'Error en el servidor' });
      } else {
        if (videoJuego_save) {
          res.status(200).send({ videoJuego: videoJuego_save });
        } else {
          res.status(403).send({ message: 'No se registro el producto' });
        }
      }
    });
  } else {
    var videoJuego = new VideoJuego();
    videoJuego.nombre = data.nombre;
    videoJuego.descripcion = data.descripcion;
    videoJuego.imagen = null;
    videoJuego.precio = data.precio;
    videoJuego.requisitos = data.requisitos;
    videoJuego.idcategoria = data.idcategoria;

    videoJuego.save((err, videoJuego_save) => {
      if (err) {
        res.status(500).send({ message: 'Error en el servidor' });
      } else {
        if (videoJuego_save) {
          res.status(200).send({ produto: videoJuego_save });
        } else {
          res.status(403).send({ message: 'No se registro el producto' });
        }
      }
    });
  }
}

function listar(req, res) {
  var nombre = req.params['nombre'];

  VideoJuego.find({ nombre: new RegExp(nombre, 'i') })
    .populate('idcategoria')
    .exec((err, videoJuegos_listado) => {
      if (err) {
        res.status(500).send({ message: 'Error en el servidor' });
      } else {
        if (videoJuegos_listado) {
          res.status(200).send({ videojuegos: videoJuegos_listado });
        } else {
          res
            .status(403)
            .send({ message: 'No hay ningun registro con ese titulo' });
        }
      }
    });
}

function editar(req, res) {
  var data = req.body;
  var id = req.params['id'];
  var img = req.params['img'];

  if (req.files.imagen) {
    if (img || img != null || img != undefined) {
      fs.unlink('./uploads/videojuegos/' + img, (err) => {
        if (err) throw err;
      });
    }

    var imagen_path = req.files.imagen.path;
    var name = imagen_path.split('\\');
    var imagen_name = name[2];

    VideoJuego.findByIdAndUpdate(
      { _id: id },
      {
        nombre: data.nombre,
        descripcion: data.descripcion,
        imagen: imagen_name,
        precio: data.precio,
        requisitos: data.requisitos,
        idcategoria: data.idcategoria,
      },
      (err, videojuego_edit) => {
        if (err) {
          res.status(500).send({ message: 'Error en el servidor' });
        } else {
          if (videojuego_edit) {
            res.status(200).send({ videojuego: videojuego_edit });
          } else {
            res.status(403).send({ message: 'No se edito el producto' });
          }
        }
      }
    );
  } else {
    VideoJuego.findByIdAndUpdate(
      { _id: id },
      {
        nombre: data.nombre,
        descripcion: data.descripcion,
        imagen: imagen_name,
        precio: data.precio,
        requisitos: data.requisitos,
        idcategoria: data.idcategoria,
      },
      (err, videojuego_edit) => {
        if (err) {
          res.status(500).send({ message: 'Error en el servidor' });
        } else {
          if (videojuego_edit) {
            res.status(200).send({ videojuego: videojuego_edit });
          } else {
            res.status(403).send({ message: 'No se edito el producto' });
          }
        }
      }
    );
  }
}

function obtener_videoJuego(req, res) {
  var id = req.params['id'];

  VideoJuego.findOne({ _id: id }, (err, videojuego_data) => {
    if (err) {
      res.status(500).send({ message: 'Error en el servidor' });
    } else {
      if (videojuego_data) {
        res.status(200).send({ videojuego: videojuego_data });
      } else {
        res.status(403).send({ message: 'No existe el registro' });
      }
    }
  });
}

function eliminar(req, res) {
  var id = req.params['id'];

  VideoJuego.findOneAndRemove({ _id: id }, (err, videojuego_delete) => {
    if (err) {
      res.status(500).send({ message: 'Error en el servidor' });
    } else {
      if (videojuego_delete) {
        fs.unlink(
          './uploads/videojuegos/' + videojuego_delete.imagen,
          (err) => {
            if (err) throw err;
          }
        );
        res.status(200).send({ produto: videojuego_delete });
      } else {
        res.status(403).send({ message: 'No se elimino ningun registro' });
      }
    }
  });
}

function update_stock(req, res) {
  let id = req.params['id'];
  let data = req.body;

  VideoJuego.findById(id, (err, videojuego_data) => {
    if (videojuego_data) {
      VideoJuego.findByIdAndUpdate(
        id,
        { stock: parseInt(videojuego_data.stock) + parseInt(data.stock) },
        (err, videojuego_edit) => {
          if (videojuego_edit) {
            res.status(200).send({ videojuego: videojuego_edit });
          }
        }
      );
    } else {
      res.status(500).send(err);
    }
  });
}

function get_img(req, res) {
  var img = req.params['img'];

  if (img != 'null') {
    let path_img = './uploads/videojuegos/' + img;
    res.status(200).sendFile(path.resolve(path_img));
  } else {
    let path_img = './uploads/videojuegos/default.jpg';
    res.status(200).sendFile(path.resolve(path_img));
  }
}

module.exports = {
  registrar,
  listar,
  editar,
  obtener_videoJuego,
  eliminar,
  update_stock,
  get_img,
};
