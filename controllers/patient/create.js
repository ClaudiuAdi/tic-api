const { error, initializeFirestore, toDateString } = require('../../functions');

module.exports = async (req, res) => {
  const { email, message, age, problem } = req.body;
  const { username } = req.user;
  if (!email || !message || !age || !problem || !username) {
    throw error(404, 'Missing required params');
  }

  const payload = {
    assigned: username,
    email,
    message,
    age,
    problem,
    date: toDateString(new Date()),
  };

  const db = initializeFirestore();
  const patientsRef = db.collection('patients');
  const response = await patientsRef.add(payload);
  if (!response.id) {
    throw error(500, 'Failed to create patient');
  }
  const data = (await response.get()).data();
  data.id = response.id;

  return res.status(200).json({ data, message: 'Patient created' });
};
