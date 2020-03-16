
const articulos = require('./articulos.route');

export default function iniciarRutas(app) {
  
    if( ! (typeof app  === 'function') ) return;
  
    app.get('/', function (req, res) {
      res.send('Hello World!');
    });

    // posts
    app.use('/api/posts',articulos);
   
}



