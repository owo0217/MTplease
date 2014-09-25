var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
var mysql = require('mysql');

var api = require('./routes/api.js');
var adr = require('./routes/adr.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 

}));

adr(app);
api(app);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log('First Middleware');
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        console.log('Second Middleware');

        res.status(err.status || 500);
        res.render('etc/error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    console.log('Third Middleware');
    res.status(err.status || 500);
    res.render('etc/error', {
        message: err.message,
        error: {}
    });
});

app.listen(52273, function() {
    console.log("Running server at port 52273");
});

module.exports = app;
