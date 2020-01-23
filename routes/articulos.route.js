const express = require('express');
const router = express.Router()
const ArticulosController = require('../controllers/articulos.controller');
const controller = new ArticulosController();
// Get all articulos
router.get('/posts', async (req, res) => {
  const articulos = await controller.getArticulos();

  res.send(articulos)
})

router.get('/posts/:id', async (req, res) => {
  const _id = req.params.id;
  const articulo = await controller.getArticuloById(_id);

  res.send(articulo);
})

router.post('/posts', async (req, res) => {
    const post = await controller.saveArticulo(req.body);
    res.send(post);
  })

module.exports = router;