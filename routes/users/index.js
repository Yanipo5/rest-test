const router = require("express").Router();
const handlers = require("./handlers.api.js");

router.get("/:id/transactions", handlers.getUserTransations);
router.get("/login", handlers.login);
router.get("/:id", handlers.getUser);
router.get("/", handlers.getAllUsers);
router.post("/", handlers.saveUser);
router.put("/:id", handlers.editUser);
router.delete("/:id", handlers.deleteUser);

module.exports = router;
