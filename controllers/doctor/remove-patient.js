const { error, initializeFirestore } = require('../../functions');

module.exports = async (req, res) => {
  const { id, patientId } = req.params;
  const { username } = req.user;
  if (!id || !patientId || !username) {
    throw error(404, 'Missing required params');
  }

  const db = initializeFirestore();
  const doctorsRef = db.collection('doctors').doc(id);
  let doc = await doctorsRef.get();
  if (!doc.exists) {
    throw error(404, 'Doctor not found');
  }
  const doctor = doc.data();
  const { patients } = doctor;
  const patient = patients.find((patient) => patient.id === patientId);
  const patientsRef = db.collection('patients').doc(patientId);
  doc = await patientsRef.get();
  if (!patient || !doc.exists) {
    throw error(404, 'Patient not found');
  }
  if (patient.assigned !== username || doc.data().assigned !== username) {
    throw error(400, 'Not allowed to remove patient');
  }

  await patientsRef.delete();
  const index = patients.findIndex((patient) => patient.id === patientId);
  patients.splice(index, 1);
  await doctorsRef.update(doctor);

  return res.status(200).json({ data: doctor, message: 'Patient updated' });
};
