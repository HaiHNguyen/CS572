/*
Dependencies
 */
var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var nextsRouter = require('./routes/nexts');
var lectureRouter = require('./routes/lectureindex');
var secretRouter = require('./routes/secretindex');


var serverIndex = require('serve-index');
var timeout = require('connect-timeout')
var responseTime =  require('response-time');

/*
Initialization
*/
var app = express();
var port = 8888;

/*
Configuration
*/

app.set('port', port);
app.set('etag', false );
app.set('trust-proxy', true);
app.set('case-sensitive-routing', true);
app.set('strict-routing', true);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/*
Middleware
*/
//models middleware set up
app.set('models', path.join(__dirname, 'models'));

//Setup logging
// var loggerStream = fs.createWriteStream(__dirname + '/logs/' + "server.log", {flags: 'a'});
// app.use(logger('combined', {stream: loggerStream}));
//

app.use(logger('dev'));app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(responseTime());

/*
Routing
*/
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lectures', lectureRouter);
app.use('/nexts', nextsRouter);
app.use('/secret', secretRouter);

app.use('/browse', serverIndex(path.join(__dirname, '/node_modules'), {'icon': true}));

/*
Error handling
*/

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

/*
Boot it up.
*/

app.listen( port, ()=>{
  console.log('Lectures server is listening on port ', port);
});

module.exports = app;
