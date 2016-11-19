var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');
// view engine setup
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index');
});
app.get('/index', function(req, res) {
  res.render('index');
});
app.get('/privacy', function(req, res) {
  res.render('privacy');
});
app.get('/about', function(req, res) {
  res.render('about');
});
app.get('/pearsonOne', function(req, res) {
  res.render('pearsonOne');
});
// catch 404 and forward to error handler


var port = Number(process.env.PORT || 80);
var g = app.listen(port);
module.exports = app;
