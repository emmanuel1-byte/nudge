function routeNotFoudHandler(req, res) {
  res.status(404).json({ message: "Endpoint does not exist on this server" });
}

module.exports = routeNotFoudHandler;
