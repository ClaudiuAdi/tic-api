const { error, initializeFirestore } = require('../../functions');

module.exports = async (req, res) => {
  const { id, patientId } = req.params;
  if (!id) {
    throw error(404, 'Missing required params');
  }

  const db = initializeFirestore();
  const doctorsRef = db.collection('doctors').doc(id);
  const doc = await doctorsRef.get();
  if (!doc.exists) {
    throw error(404, 'Doctor not found');
  }
  const { patients } = doc.data();
  const patient = patients.find((patient) => patient.id === patientId);
  if (!patient) {
    throw error(404, 'Patient not found');
  }

  return res.status(200).json(patient);
};
