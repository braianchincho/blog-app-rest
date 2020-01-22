
const articulos = require('./articulos.route');

function iniciarRutas(app) {
  
    if( ! (typeof app  === 'function') ) return;
  
    app.get('/', function (req, res) {
      res.send('Hello World!');
    });
    app.use('/api',articulos);
   
}

module.exports = iniciarRutas;

