/* eslint-disable no-console */
const { initializeFirestore } = require('../../functions');
const doctors = require('../resources/doctors');

exports.seed = async () => {
  try {
    console.log('Planting seeds for doctors');

    const seeds = await doctors();
    const db = initializeFirestore();
    for (const seed of seeds) {
      await db.collection('doctors').add(seed);
    }

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot add doctors');
    console.error(err);
  }
};
