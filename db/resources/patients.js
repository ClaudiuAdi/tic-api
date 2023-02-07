const { randomDate, randomUsername } = require('../../functions');
const chance = require('../../lib/chance');

module.exports = async () => {
  return [
    {
      email: chance.email(),
      message: chance.paragraph(),
      age: chance.integer({ min: 7, max: 80 }),
      problem: chance.string(),
      assigned: randomUsername(),
      date: randomDate(),
    },
    {
      email: chance.email(),
      message: chance.paragraph(),
      age: chance.integer({ min: 7, max: 80 }),
      problem: chance.string(),
      assigned: randomUsername(),
      date: randomDate(),
    },
    {
      email: chance.email(),
      message: chance.paragraph(),
      age: chance.integer({ min: 7, max: 80 }),
      problem: chance.string(),
      assigned: randomUsername(),
      date: randomDate(),
    },
  ];
};
