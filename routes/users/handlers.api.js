const { User } = require("../../models/index.js");

module.exports = {
  async getAllUsers(req, res) {
    res.send(await User.fetchAll());
  },

  async getUser(req, res) {
    const { id } = req.params;
    res.send(await new User({ id }).fetch());
  },

  async login(req, res) {
    const { email, psw } = req.query;
    if (!email || !psw) return res.status(400).send("email or psw missing");
    const user = await User.query({ where: { email, password: psw } }).fetch();
    if (!user) return res.status(400).send("email & psw not matched");
    const id = user.get("id");
    return res.json({ id });
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
