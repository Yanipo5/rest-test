const router = require("express").Router();
router.get("/hello", (req, res) => res.send("Hello World!"));
router.all("/users", require("./users/index.js"));
router.all("/transactions", require("./transactions/index.js"));

module.exports = router;
