var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./conexion/mogoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var applicationRouter = require('./routes/application');
var petRouter = require('./routes/pet'); 
var voucherRouter = require('./routes/voucher'); 
var payRouter = require('./routes/pay'); 
var billRouter = require('./routes/bill'); 
var commentsRouter = require('./routes/comments'); 
var qualificationRouter = require('./routes/qualification'); 
var carerRouter = require('./routes/carer'); 
var authRouter = require('./routes/authentication'); 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/// router
app.use('/', indexRouter);
app.use('/user', usersRouter); // este es la api de users
app.use('/carer', carerRouter);
app.use('/carer', applicationRouter);
app.use('/carer', petRouter);
app.use('/carer', voucherRouter);
app.use('/carer', payRouter);
app.use('/carer', billRouter);
app.use('/carer', commentsRouter);
app.use('/carer', qualificationRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log(`Servidor corriendo en puerto ${process.env.PORT || 5000}, MODO = ${process.env.NODE_ENV || 'development'}`);

module.exports = app;
