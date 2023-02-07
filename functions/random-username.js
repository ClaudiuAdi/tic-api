const chance = require('../lib/chance');

const randomUsername = () => {
  return chance.string({
    length: 8,
    pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  });
};

module.exports = randomUsername;
