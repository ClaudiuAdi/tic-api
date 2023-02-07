const { error, initializeFirestore } = require('../../functions');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { username } = req.user;
  if (!id || !username) {
    throw error(404, 'Missing required params');
  }

  const db = initializeFirestore();
  const doctorsRef = db.collection('doctors').doc(id);
  const doc = await doctorsRef.get();
  if (!doc.exists) {
    throw error(404, 'Doctor not found');
  }
  const data = doc.data();
  // if (data.author !== username) {
  //   throw error(400, 'Not allowed to remove doctor');
  // }

  await doctorsRef.delete();

  return res.status(200).json({ data, message: 'Doctor removed' });
};
