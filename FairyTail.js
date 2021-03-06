var fortune = require('./lib/fortune.js');

var express = require('express');

var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3020);

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
    next();
});

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about', {
    fortune: fortune.getFortune(),
    pageTestScript: '/qa/tests-about.js'
  });
});

app.get('/album', function (req, res) {
  res.render('album');
});

app.get('/event', function (req, res) {
  res.render('event');
});

//Пользовательская страница 404
app.use(function (req, res) {
  res.status(404);
  res.render('404');
});

//Пользовательская страница 500

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
  console.log('express started on http://localhost:' +
    app.get('port') + ' press CTRL+C for finished');
});
