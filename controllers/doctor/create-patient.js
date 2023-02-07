const { error, initializeFirestore, toDateString } = require('../../functions');

module.exports = async (req, res) => {
  const { email, message, age, problem } = req.body;
  const { id } = req.params;
  const { username } = req.user;
  if (!email || !message || !age || !problem || !id || !username) {
    throw error(404, 'Missing required params');
  }

  const db = initializeFirestore();
  const doctorsRef = db.collection('doctors').doc(id);
  const doc = await doctorsRef.get();
  if (!doc.exists) {
    throw error(404, 'Doctor not found');
  }
  const data = doc.data();

  const patient = {
    assigned: username,
    email,
    message,
    age,
    problem,
    date: toDateString(new Date()),
  };

  const patientsRef = db.collection('patients');
  const response = await patientsRef.add(patient);
  if (!response.id) {
    throw error(500, 'Failed to create patient');
  }

  patient.id = response.id;
  data.patients.push(patient);
  await doctorsRef.update(data);

  return res.status(200).json(data);
};
