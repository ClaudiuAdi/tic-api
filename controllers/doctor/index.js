const create = require('./create');
const readMany = require('./read-many');
const readOne = require('./read-one');
const remove = require('./remove');
const update = require('./update');

const createPatient = require('./create-patient');
const readPatient = require('./read-patient');
const readPatients = require('./read-patients');
const removePatient = require('./remove-patient');
const updatePatient = require('./update-patient');

module.exports = {
  create,
  readMany,
  readOne,
  remove,
  update,
  createPatient,
  readPatient,
  readPatients,
  removePatient,
  updatePatient,
};
