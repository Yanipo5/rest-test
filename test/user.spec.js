require("dotenv").config();
const { User } = require("../models/index.js");
test("expect user to exist", async done => {
  const user = await User.query({
    where: {
      email: "dave@hotmail.com",
      password: "121SSASD22"
    }
  }).fetch();
  const name = user.get("name");
  expect(name).toBe("dave");
  done();
});
