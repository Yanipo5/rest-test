require("dotenv").config();
const { client, connection } = require("./utils/knex.js");

module.exports = {
  development: { client, connection }
};
