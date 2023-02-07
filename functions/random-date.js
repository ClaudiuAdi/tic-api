const chance = require('../lib/chance');
const toDateString = require('./to-date-string');

const randomDate = () => {
  return toDateString(
    chance.date({
      string: false,
      american: false,
      min: new Date('2022-01-01'),
      max: new Date(),
    })
  );
};

module.exports = randomDate;
