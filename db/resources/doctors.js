const {
  initializeFirestore,
  randomDate,
  randomUsername,
} = require('../../functions');
const chance = require('../../lib/chance');

module.exports = async () => {
  const db = initializeFirestore();
  const patients = await db.collection('patients').get();
  const patientsData = patients.docs.map((patient) => {
    const data = patient.data();
    data.id = patient.id;
    return data;
  });

  return [
    { assigned:randomUsername(),
      description: chance.paragraph(),
      email: chance.email(),
      firstName: chance.first(),
      lastName: chance.last(),
      costPerHour: chance.integer({ min: 10, max: 200 }),
      patients: [patientsData[0]],
      date: randomDate(),
    },
    {
      assigned:randomUsername(),
      description: chance.paragraph(),
      email: chance.email(),
      firstName: chance.first(),
      lastName: chance.last(),
      costPerHour: chance.integer({ min: 10, max: 200 }),
      patients: [patientsData[1]],
      date: randomDate(),
    },
    {
      assigned:randomUsername(),
      description: chance.paragraph(),
      email: chance.email(),
      firstName: chance.first(),
      lastName: chance.last(),
      costPerHour: chance.integer({ min: 10, max: 200 }),
      patients: [patientsData[2]],
      date: randomDate(),
    },
  ];
};
