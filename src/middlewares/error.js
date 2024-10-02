function globalErrorHandler(err, req, res, next) {
  res.status(500).json({ message: "Internal Server Error" });
}

function routeNotFoudHandler(req, res) {
  res.status(404).json({ message: "Endpoint does not exist on this server" });
}

module.exports = { globalErrorHandler, routeNotFoudHandler };
