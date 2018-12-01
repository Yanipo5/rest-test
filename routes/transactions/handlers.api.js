const { Transaction } = require("../../models/index.js");

module.exports = {
  async getAllUsers(req, res) {
    res.send(await User.fetchAll());
  },

  async getTransaction(req, res) {
    const { id } = req.params;
    res.send(await Transaction.fetch({ id }));
  },

  async storeTransaction(req, res) {
    const { body } = req;
    res.send(await new Transaction({ ...body }).save());
  }
};
