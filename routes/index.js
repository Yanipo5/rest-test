const router = require("express").Router();
router.use("/users", require("./users/index.js"));
router.use("/transactions", require("./transactions/index.js"));

module.exports = router;
