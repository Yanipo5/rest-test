const { knex } = require("../utils/knex.js");
const bookshelf = require("bookshelf")(knex);

const User = bookshelf.Model.extend({
  tableName: "users",
  transactions: function() {
    return this.hasMany(Transaction);
  }
});

const Transaction = bookshelf.Model.extend({
  tableName: "transactions",
  user: function() {
    return this.belongsTo(User);
  }
});

const Book = bookshelf.Model.extend({
  tableName: "books",
  summary: function() {
    this.hasOne(Summary);
  },

  delete: function() {
    bookshelf.transaction(async transacting => {
      await this.summary().destroy({ transacting });
      await this.destroy({ transacting });
    });
  }
});

const Summary = bookshelf.Model.extend({
  tableName: "summaries",
  book: function() {
    this.belongsTo(Book);
  }
});

module.exports = { User, Transaction, Book, Summary };
