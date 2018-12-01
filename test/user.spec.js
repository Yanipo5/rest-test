require("dotenv").config();
const { User } = require("../models/index.js");
test("expect user transactions to be 1", async done => {
  const user = await new User({ id: 1 }).fetch({
    withRelated: ["transactions"]
  });
  const transactions = JSON.parse(JSON.stringify(user.related("transactions")));
  expect(transactions.length).toBe(1);
});
