const express = require('express');
const articulosModel = require('../models/articulos.model');
const router = express.Router()

// Get all articulos
router.get('/posts', async (req, res) => {
  const articulos = await articulosModel.find();

  res.send(articulos)
})

router.get('/posts/:id', async (req, res) => {
  const _id = req.params.id;
  const articulo = await articulosModel.findById(_id);

  res.send(articulo)
})

router.post('/posts', async (req, res) => {
    const { titulo, autor, contenidoArticulo } = req.body;
    const post = new articulosModel({
        titulo,
        autor,
        contenidoArticulo
    })
  
    await post.save()
    res.send(post)
  })

module.exports = router;