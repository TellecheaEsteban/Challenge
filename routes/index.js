var express = require('express');
var router = express.Router();
var indexcontroller = require ("../controllers/indexcontroller")

/* GET home page. */
router.get('/', indexcontroller.index);

module.exports = router;
