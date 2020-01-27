const express = require('express');
const router = express.Router()
const ArticulosController = require('../controllers/articulos.controller');
const { ErrorHandler } = require('../helpers/error');
const controller = new ArticulosController();
// Get all articulos
router.get('/posts', async (req, res, next) => {
  try {
    const articulos = await controller.getArticulos();
    res.send(articulos)
  } catch(err) {
    next(new ErrorHandler(409, err.message ,'Articulo no encontrado'));
  }

});
router.get('/posts/:id', async (req, res, next) => {
  const _id = req.params.id;
  try {
    const articulo = await controller.getArticuloById(_id);
    res.send(articulo);
  } catch(err) {
    console.log(err)
     next(new ErrorHandler(409, err.message ,'Error al consultar los articulos'));
  }

})

router.post('/posts', async (req, res, next) => {
    try {
      const post = await controller.saveArticulo(req.body);
      res.send(post);
    } catch(err) {
      next(new ErrorHandler(409, err.message ,'Error al guardar el articulo'));
    }

});

router.put('/posts/:id', async (req, res, next) => {
  try {
    const post = await controller.updateArticulo(req.params.id, req.body);
    res.send(post);
  } catch(err) {
    next(new ErrorHandler(409, err.message ,'Error al modificar el articulo'));
  }

});
module.exports = router;