const { Router } = require('express');
const { authenticate, errorHandler, notFound } = require('./middleware');
const { patient, identity, doctor } = require('./routes');

const router = Router();

// protect all non-public routes
router.all('/admin', authenticate);
router.all('/admin/*', authenticate);

// use the router instances defined
router.use(patient);
router.use(identity);
router.use(doctor);

// matches any other HTTP method and route not matched before
router.all('*', notFound);

// finally, an error handler
router.use(errorHandler);

module.exports = router;
