var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Initialization
var app = express();
var port = 8888;

app.set('port', port);
app.set('etag', false );
app.set('trust-proxy', true);
app.set('case-sensitive-routing', true);
app.set('strict-routing', true);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//models middleware set up
app.set('models', path.join(__dirname, 'models'));

//Setup logging
var loggerStream = fs.createWriteStream(__dirname + '/logs/' + "server.log", {flags: 'a'});
app.use(logger('combined', {stream: loggerStream}));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



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

  console.log(err);
  res.json({'ERROR ': 'SERVER ERROR'});

});


//Boot it up.
app.listen( port, ()=>{
  console.log('Grades server is listening on port ', port);
});

module.exports = app;
