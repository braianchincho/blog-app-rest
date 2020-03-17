import express from 'express';
import mongoose from'mongoose';
import iniciarRutas from './routes/index.routes';
import bodyParser from 'body-parser';
import { handleError } from './helpers/error';
import { logger } from './helpers/logger';


const httpLogger = require('./helpers/httpLogger');
// const userDB = process.env.userMongoDB;
// const passwordDB = process.env.passwordMongoDB;
const userDB = 'admin';
const passwordDB = 'peterpan.23';
const PORT = process.env.PORT || 5000
const url =`mongodb+srv://${userDB}:${passwordDB}@cluster0-ms4r4.azure.mongodb.net/test?retryWrites=true&w=majority`;
const app = express();


app.use(express.json()); // Make sure it comes back as json

mongoose.connect(url, { useNewUrlParser: true }, err => {
  if (!err) {
    logger.info('Conectado a la bd en la nube');
    iniciarAPI(); 
  } else {
    logger.error('No se pudo conectar a la bd' + err)
  }
})

function iniciarAPI() {
  app.use(bodyParser.json());
  app.use(httpLogger);
  iniciarRutas(app);
  // Centralizador de errores
  app.use((err, req, res, next) => {
    handleError(err, res);
  });
  app.listen(PORT, () => {
    logger.info(`Server has started! on ${PORT} port`);
  })
}

