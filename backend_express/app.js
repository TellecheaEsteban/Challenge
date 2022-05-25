var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");


var indexRouter = require('./routes/index');


var app = express();

app.use(cors("*"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, "public")));

app.use('/', indexRouter);

 app.use(function(req, res, next) {
   next(createError(404));
 });

 app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(process.env.PORT || 3001, ()=> {
  console.log("Servidor funcionando");
})

module.exports = app;
