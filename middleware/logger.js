function logger(req, res, next) {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.path}`);
  next(); 
}

module.exports = logger;
