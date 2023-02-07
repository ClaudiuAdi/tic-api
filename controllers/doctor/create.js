const { error, initializeFirestore } = require('../../functions');

module.exports = async (req, res) => {
  const { description, email, firstName, lastName, costPerHour } = req.body;
  const { username } = req.user;
  if (!description || !email || !firstName || !lastName || !costPerHour || !username ) {
    throw error(404, 'Missing required params');
  }

  const payload = {
    assigned:username,
    firstName,
    lastName,
    email,
    description,
    costPerHour,
    patients: [],
  };

  const db = initializeFirestore();
  const doctorsRef = db.collection('doctors');
  const response = await doctorsRef.add(payload);
  
  if (!response.id) {
    throw error(500, 'Failed to create doctor');
  }

  const data = (await response.get()).data();
  data.id = response.id;

  return res.status(200).json({ data, message: 'Doctor created' });
};
