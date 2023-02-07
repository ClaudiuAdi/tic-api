const { Doctor } = require('../controllers');
const { Router } = require('express');

const router = Router();

router.delete('/admin/doctors/:id', Doctor.remove);
router.get('/doctors', Doctor.readMany);
router.get('/doctors/:id', Doctor.readOne);
router.post('/admin/doctors', Doctor.create);
router.put('/admin/doctors/:id', Doctor.update);

router.delete('/admin/doctors/:id/patients/:patientId', Doctor.removePatient);
router.get('/doctors/:id/patients', Doctor.readPatients);
router.get('/doctors/:id/patients/:patientId', Doctor.readPatient);
router.post('/admin/doctors/:id/patients', Doctor.createPatient);
router.put('/admin/doctors/:id/patients/:patientId', Doctor.updatePatient);

module.exports = router;
