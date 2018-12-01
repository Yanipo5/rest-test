const { Book, Summary } = require("../models/index.js");
exports.seed = async (knex, Promise) => {
  await knex("summaries").del();
  await knex("books").del();
  var book_id;
  var { id: book_id } = await new Book({ name: "Moby Dick" }).save();
  await new Summary({ details: "A story about a waile", book_id }).save();
  var { id: book_id } = await new Book({ name: "Dracula" }).save();
  await new Summary({ details: "A story about a vampire", book_id }).save();
  var { id: book_id } = await new Book({ name: "Romeo and Juliet" }).save();
  await new Summary({details: "A story about old time lovers",book_id}).save(); //prettier-ignore
  var { id: book_id } = await new Book({name: "The Beauty and The Beast"}).save(); //prettier-ignore
  await new Summary({ details: "A story about fantasy lovers", book_id }).save(); //prettier-ignore
};
