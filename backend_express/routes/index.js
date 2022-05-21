var express = require("express");
var router = express.Router();
const usersAPIrout = require("./api/users");
const transactionsAPIrout = require("./api/transactions");

//user routes (API)
router.use("/users", usersAPIrout);
//user routes (API)
router.use("/transactions", transactionsAPIrout);

module.exports = router;
