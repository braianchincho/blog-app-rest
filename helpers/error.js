class ErrorHandler extends Error {
    constructor(statusCode, message) {
      super();
      this.statusCode = statusCode;
      this.message = message;
    }
}
/**
 * 
 * @param {ErrorHandlee} err 
 * @param {Response<any>} res 
 */
const handleError = (err, res) => {
    const { statusCode, message } = err;
    res.status(statusCode).json({
      status: "error",
      statusCode,
      message
    });
  };
  

module.exports = {
    ErrorHandler,
    handleError
}
  