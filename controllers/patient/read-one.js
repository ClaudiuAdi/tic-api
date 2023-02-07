const { error, initializeFirestore } = require('../../functions');

module.exports = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw error(404, 'Missing required params');
  }

  const db = initializeFirestore();
  const patientsRef = db.collection('patients').doc(id);
  const doc = await patientsRef.get();
  if (!doc.exists) {
    throw error(404, 'Patient not found');
  }
  const data = doc.data();

  return res.status(200).json(data);
};
