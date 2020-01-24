const articulosModel = require('../models/articulos.model');

class ArticulosController {
    
    async getArticulos() {
        return articulosModel.find();
    }
    
    async getArticuloById(_id) {
        return articulosModel.findById(_id);
    }

    async saveArticulo(articuloBody) {
        const { titulo, autor, contenidoArticulo } = articuloBody;
        const post = new articulosModel({
            titulo,
            autor,
            contenidoArticulo
        });
      
        return post.save();   
    }

    async updateArticulo(id,articuloBody) {
 
        return articulosModel.findByIdAndUpdate(id , {$set: articuloBody });
    }
}
module.exports = ArticulosController;


