module.exports = (req, res) => {
  res.status(404).json({
    name: 'Error',
    message: '404 Not Found',
  });
};
