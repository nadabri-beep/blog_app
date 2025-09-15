function errorHandler(err, req, res, next) {
  console.error(err.stack); // Log full error stack for debugging

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error"
  });
}

module.exports = errorHandler;
