const chance = require('../../lib/chance');
const { hashSync } = require('bcryptjs');
const { randomUsername } = require('../../functions');

module.exports = async () => {
  const roles = ['admin', 'client'];

  return [
    {
      email: 'claudiu@email.com',
      name: 'Claudiu-Adrian Comorasu',
      password: hashSync('parola'),
      role: 'admin',
      username: 'claudiucomorasu',
    },
    {
      email: chance.email(),
      name: chance.name(),
      password: hashSync('parola'),
      role: chance.pickone(roles),
      username: randomUsername(),
    },
    {
      email: chance.email(),
      name: chance.name(),
      password: hashSync('parola'),
      role: chance.pickone(roles),
      username: randomUsername(),
    },
  ];
};
