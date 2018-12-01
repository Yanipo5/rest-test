const router = require("express").Router();
const handlers = require("./handlers.api.js");

router.get("/transactions/:id", handlers.getTransaction);
router.post("/transactions", handlers.storeTransaction);

module.exports = router;
