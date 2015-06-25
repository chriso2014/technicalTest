/*
 * Module dependencies
 */
var express = require('express'),
    sass = require('node-sass'),
    sassMiddleware = require('node-sass-middleware'),
    setpath = require('path');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));

app.use(sassMiddleware({
  /* Options */
  src: setpath.join(__dirname, 'private/stylesheets'),
  dest: setpath.join(__dirname, 'public/stylesheets'),
  debug: true,
  outputStyle: 'compressed',
  prefix:  '/stylesheets'
}));

app.use(express.static(setpath.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home page', page : 'homepage' }
  );
});
app.get('/test1', function (req, res) {
  res.render('test1',
  { title : 'HTML5 and CSS test', page : 'test1' }
  );
});
app.get('/test2', function (req, res) {
  res.render('test2',
  { title : 'JavaScript test', page : 'test2' }
  );
});

app.listen(3000);
