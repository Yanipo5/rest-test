require("pg");
const {
  DB_HOST: host,
  DB_USER: user,
  DB_PSW: password,
  DB_SCHEMA: database
} = process.env;

const connection = { host, user, password, database };
const client = "postgresql";

module.exports = {
  connection: connection,
  client: client,
  knex: require("knex")({ client, connection })
};
