exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", table => {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("password");
    })
    .createTable("transactions", table => {
      table.increments("id").primary();
      table
        .integer("user_id")
        .unique()
        .references("users.id");
      table
        .integer("book_id")
        .unique()
        .references("books.id");
      table.timestamp("timestamp").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users").dropTable("transactions");
};
