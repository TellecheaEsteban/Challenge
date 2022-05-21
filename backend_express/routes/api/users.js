const express = require("express");
const router = express.Router();
const usersAPIcontroller = require("../../controllers/usersAPIcontroller");

router.post("/login", usersAPIcontroller.login);
router.post("/register", usersAPIcontroller.register);

module.exports = router;
