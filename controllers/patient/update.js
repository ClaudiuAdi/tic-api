const { error, initializeFirestore } = require('../../functions');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { username } = req.user;
  if (!id || !username) {
    throw error(404, 'Missing required params');
  }

  const db = initializeFirestore();
  const patientsRef = db.collection('patients').doc(id);
  const doc = await patientsRef.get();
  if (!doc.exists) {
    throw error(404, 'Patient not found');
  }
  if (doc.data().assigned !== username) {
    throw error(400, 'Not allowed to update patient');
  }

  const payload = {};
  const { email, message, age, problem } = req.body;
  if (email) {
    payload.email = email;
  }
  if (message) {
    payload.message = message;
  }
  if (age) {
    payload.age = age;
  }
  if (problem) {
    payload.problem = problem;
  }

  await patientsRef.update(payload);
  const data = (await patientsRef.get()).data();

  return res.status(200).json({ data, message: 'Patient updated' });
};
