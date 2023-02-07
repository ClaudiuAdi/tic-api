const identities = require('./seeds/001_identities');
const patients = require('./seeds/002_patients');
const doctors = require('./seeds/003_doctors');

const seed = async () => {
  await identities.seed();
  await patients.seed();
  await doctors.seed();
};

(async () => {
  try {
    await seed();
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

module.exports = seed;
