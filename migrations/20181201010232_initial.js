exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("books", table => {
      table.increments("id").primary();
      table.string("name");
    })
    .createTable("summaries", table => {
      table.increments("id").primary();
      table.string("details");
      table
        .integer("book_id")
        .unique()
        .references("books.id");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("books").dropTable("summaries");
};
