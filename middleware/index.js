const authenticate = require('./authenticate');
const errorHandler = require('./error-handler');
const notFound = require('./not-found');

module.exports = {
  authenticate,
  errorHandler,
  notFound,
};
