const router = require("express").Router();
const handlers = require("./handlers.api.js");

router.get("/users", handlers.getAllUsers);
router.get("/users/:id", handlers.getUser);
router.post("users", handlers.saveUser);
router.put("/users/:id", handlers.editUser);
router.delete("/users/:id", handlers.deleteUser);

module.exports = router;
