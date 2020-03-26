const knex = require('knex');
const configuation = require('../../knexfile');

const connection = knex(configuation.development);

module.exports = connection;