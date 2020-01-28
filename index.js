const express = require('express');
const mongoose = require('mongoose');
const iniciarRutas = require('./routes/index.routes');
const bodyParser = require('body-parser');
const { handleError, } = require('./helpers/error');
const httpLogger = require('./helpers/httpLogger');
const { userDB, passwordDB } = require('./settings.json');
const PORT = process.env.PORT || 5000
const url =`mongodb+srv://${userDB}:${passwordDB}@cluster0-ms4r4.azure.mongodb.net/test?retryWrites=true&w=majority`;
const app = express();
const logger  = require('./helpers/logger');

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

