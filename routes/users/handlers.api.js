const { User } = require("../../models/index.js");

module.exports = {
  async getAllUsers(req, res) {
    res.send(await User.fetchAll());
  },

  getUser(req, res) {
    console.log("here");
    const { id } = req.params;
    const msg = `getting ${id} user`;
    console.log(msg);
    res.send(msg);
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
