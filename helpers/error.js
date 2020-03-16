const logger  = require('./logger');

class ErrorHandler extends Error {
    constructor(statusCode, message , messageUser) {
      super();
      this.statusCode = statusCode;
      this.message = message;
      this.messageUser = messageUser;
    }
}
/**
 * 
 * @param {ErrorHandlee} err 
 * @param {Response<any>} res 
 */
const handleError = (err, res) => {
    const { statusCode, message, messageUser } = err;    
    res.status(statusCode).json({
      status: "error",
      statusCode,
      messageUser
    });
    logger.error(message);
  };
  

export {
  ErrorHandler,
  handleError
}
  