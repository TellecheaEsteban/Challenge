const express = require("express");
const router = express.Router();
const transactionsAPIcontroller = require("../../controllers/transactionsAPIcontroller");


router.get("/", transactionsAPIcontroller.getAllTransactions);
router.get("/lastTen", transactionsAPIcontroller.getLastTen);
router.get("/balance", transactionsAPIcontroller.getBalance);

router.get("/types", transactionsAPIcontroller.getTransactionsTypes);
router.get("/type/:id", transactionsAPIcontroller.getTransactionsByType);
router.get("/category/:id", transactionsAPIcontroller.getTransactionsByCategory);
router.get("/:id", transactionsAPIcontroller.getTransaction);

router.post("/new", transactionsAPIcontroller.newTransaction);
router.post("/edit", transactionsAPIcontroller.editTransaction);
router.post("/delete", transactionsAPIcontroller.deleteTransaction);


module.exports = router;
