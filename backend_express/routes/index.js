var express = require("express");
var router = express.Router();
const usersAPIrout = require("./api/users");
const transactionsAPIrout = require("./api/transactions");
const categoriesAPIrout = require("./api/categories");

//user routes (API)
router.use("/users", usersAPIrout);
//transaction routes (API)
router.use("/transactions", transactionsAPIrout);
//categories routes
router.use("/categories", categoriesAPIrout);


module.exports = router;
