
import articulosRouter from './articulos.route';

export default function iniciarRutas(app) {
  
    if( ! (typeof app  === 'function') ) return;
  
    app.get('/',  (req, res) =>{
      res.send('Hello World!');
    });

    // posts
    app.use('/api/posts',articulosRouter);
   
}



