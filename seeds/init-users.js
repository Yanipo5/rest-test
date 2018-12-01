const { User } = require("../models/index.js");
exports.seed = async (knex, Promise) => {
  await knex("users").del();
  const users = [
    { name: "dave", email: "dave@hotmail.com", password: "121SSASD22" },
    { name: "Kobi", email: "kobi@hotmail.com", password: "wgqyidsal" },
    { name: "Raul", email: "raul@hotmail.com", password: "fh7whsq2e" },
    { name: "Philip", email: "philip@hotmail.com", password: "csduhioj" }
  ];
  users.forEach(u => new User(u).save());
};
