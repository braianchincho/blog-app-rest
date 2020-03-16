import express from 'express';
import ArticulosController from '../controllers/articulos.controller';
const { ErrorHandler } = require('../helpers/error');
const router = express.Router()

const controller = new ArticulosController();
// Get all articulos
router.get('', async (req, res, next) => {
  try {
    const articulos = await controller.getArticulos();
    res.send(articulos)
  } catch(err) {
    next(new ErrorHandler(409, err.message ,'Articulo no encontrado'));
  }

});
router.get('/:id', async (req, res, next) => {
  const _id = req.params.id;
  try {
    const articulo = await controller.getArticuloById(_id);
    if(!articulo) {
      next(new ErrorHandler(404, err.message ,'El articulo no existe'));
    }
    res.send(articulo);
  } catch(err) {
    console.log(err)
     next(new ErrorHandler(409, err.message ,'Error al consultar los articulos'));
  }

})

router.post('', async (req, res, next) => {
    try {
      const post = await controller.saveArticulo(req.body);
      res.send(post);
    } catch(err) {
      next(new ErrorHandler(409, err.message ,'Error al guardar el articulo'));
    }

});

router.put('/:id', async (req, res, next) => {
  try {
    const post = await controller.updateArticulo(req.params.id, req.body);
    res.send(post);
  } catch(err) {
    next(new ErrorHandler(409, err.message ,'Error al modificar el articulo'));
  }

});

router.delete('/:id', async (req, res, next) => {
  try {
    const post = await controller.deleteArticulo(req.params.id);
    res.send(post);
  } catch(err) {
    next(new ErrorHandler(409, err.message ,'Error al eliminar el articulo'));
  }

});

// module.exports = router;
export default  router;