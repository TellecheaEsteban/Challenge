const express = require("express");
const router = express.Router();
const categoriesAPIcontroller= require("../../controllers/categoriesAPIcontroller");


router.get("/", categoriesAPIcontroller.getAllCategories);

router.post("/new", categoriesAPIcontroller.newCategory);

module.exports = router;