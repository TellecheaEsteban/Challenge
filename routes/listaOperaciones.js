var express = require('express');
var router = express.Router();
var listaOperacionesController =require ("../controllers/listaOperacionesController")

/* GET users listing. */
router.get('/',listaOperacionesController.show);

module.exports = router;
