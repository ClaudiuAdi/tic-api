const { initializeFirestore } = require('../../functions');

module.exports = async (req, res) => {
  const db = initializeFirestore();
  const patientsRef = db.collection('patients');
  const snapshot = await patientsRef.get();
  const data = snapshot.docs.map((doc) => doc.data());

  return res.status(200).json(data);
};
