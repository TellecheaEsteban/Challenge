var express = require('express');
var router = express.Router();
var operacionesController =require ("../controllers/operacionesController")

/* GET users listing. */
router.get('/',operacionesController.show);

module.exports = router;
