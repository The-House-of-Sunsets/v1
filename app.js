var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
var apiRouter = require('./routes/api-routes');
var compression = require('compression')
var helmet = require('helmet')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('/client/build'));
}
app.use(compression());
app.use(helmet());

app.use('/api', apiRouter);

module.exports = app;
