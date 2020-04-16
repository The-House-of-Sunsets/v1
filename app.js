var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
var apiRouter = require('./routes/api-routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
// }
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build/index.html'));
});
app.use('/api', apiRouter);

module.exports = app;
