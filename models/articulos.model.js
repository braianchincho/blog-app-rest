const mongoose = require("mongoose")

const schema = mongoose.Schema({
  titulo: String,
  contenidoArticulo: String,
  autor: String,
  fechaCreacion: {type: Date, default: Date.now()},
  fechaPublicacion: {type: Date, default: null},
})

module.exports = mongoose.model("Articulos", schema)