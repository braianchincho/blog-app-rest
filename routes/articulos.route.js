const express = require("express");
const articulosModel = require("../models/articulos.model");
const router = express.Router()

// Get all articulos
router.get("/posts", async (req, res) => {
  const articulos = await articulosModel.find()

  res.send(articulos)
})
router.post("/posts", async (req, res) => {
    const post = new articulosModel({
        "titulo": "Programación en javascript",
        "autor": "chincho",
        "contenidoArticulo": "dsfdsf fdsfsd sdfsdfdsfsd",
    })
  
    await post.save()
    res.send(post)
  })

module.exports = router;