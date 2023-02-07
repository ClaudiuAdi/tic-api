const { initializeFirestore } = require('../../functions');

module.exports = async (req, res) => {
  const db = initializeFirestore();
  const doctorsRef = db.collection('doctors');
  const snapshot = await doctorsRef.get();
  const data = snapshot.docs.map((doc) => {
    const doctor = doc.data();
    doctor.id = doc.id;
    return doctor;
  });

  return res.status(200).json(data);
};
