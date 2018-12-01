const { User } = require("../../models/index.js");

module.exports = {
  async getAllUsers(req, res) {
    res.send(await User.fetchAll());
  },

  async getUser(req, res) {
    const { id } = req.params;
    res.send(await new User({ id }).fetch());
  },

  async getUserTransations(req, res) {
    const { id } = req.params;
    res.send(await new User({ id }).transactions());
  },

  saveUser(req, res) {
    const { body } = req;
    const msg = `saving ${body} user`;
    console.log(msg);
    res.send(msg);
  },

  editUser(req, res) {
    const { id } = req.params;
    const msg = `editing ${id} user`;
    console.log(msg);
    res.send(msg);
  },

  deleteUser(req, res) {
    const { id } = req.params;
    const msg = `deleting ${id} user`;
    console.log(msg);
    res.send(msg);
  }
};
