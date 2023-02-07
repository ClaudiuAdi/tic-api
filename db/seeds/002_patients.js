/* eslint-disable no-console */
const { initializeFirestore } = require('../../functions');
const patients = require('../resources/patients');

exports.seed = async () => {
  try {
    console.log('Planting seeds for patients');

    const seeds = await patients();
    const db = initializeFirestore();
    for (const seed of seeds) {
      await db.collection('patients').add(seed);
    }

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot add patients');
    console.error(err);
  }
};
