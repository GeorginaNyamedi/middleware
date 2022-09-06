const pathMiddleware = (req, res, next) => {
  console.log("Path middleware started");
  next();
  console.log("Path middleware ended");
};

module.exports = {
  pathMiddleware,
};
