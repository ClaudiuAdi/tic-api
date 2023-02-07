const { Patient } = require('../controllers');
const { Router } = require('express');

const router = Router();

router.delete('/admin/patients/:id', Patient.remove);
router.get('/patients', Patient.readMany);
router.get('/patients/:id', Patient.readOne);
router.post('/admin/patients', Patient.create);
router.put('/admin/patients/:id', Patient.update);

module.exports = router;
