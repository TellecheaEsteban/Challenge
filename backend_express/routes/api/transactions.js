const express = require("express");
const router = express.Router();
const transactionsAPIcontroller = require("../../controllers/transactionsAPIcontroller");

router.get("/", transactionsAPIcontroller.getAllTransactions);
// router.get("/lastTen", transactionsAPIcontroller.getLastTenOperations);
// router.get("/balance", transactionsAPIcontroller.getActualBalance);
// router.get("/type/:id", transactionsAPIcontroller.getOperationsByType);

module.exports = router;
