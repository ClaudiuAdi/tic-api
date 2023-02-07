const { error, initializeFirestore, toDateString } = require('../../functions');

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
  const payload = {
    date: toDateString(new Date()),
  };
  const { description, email, firstName, lastName, costPerHour } = req.body;
  if (description) {
    payload.description = description;
  }
  if (email) {
    payload.email = email;
  }
  if (firstName) {
    payload.firstName = firstName;
  }
  if (lastName) {
    payload.lastName = lastName;
  }
  if (costPerHour) {
    payload.costPerHour = costPerHour;
  }

  await doctorsRef.update(payload);
  const data = (await doctorsRef.get()).data();

  return res.status(200).json({ data, message: 'Doctor updated' });
};
