
require('./models/models.js')



var express = require('express');
var app = express();
var http = require('http');
var passport = require('passport');
var io = require('socket.io')(http);
var $ = require('jquery');
var server = http.createServer(app);

//static files
app.use('/static', express.static(__dirname + '/static'));

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


//app.use( express.json());
//app.use( express.urlencoded());
//app.use( express.methodOverride());

//
//app.use(passport.initialize());
//app.use(passport.session());

//routes and controllers

app.use('/', require('./controllers/index'));



server.listen(app.get("port"), function(){
  console.log('listening on *:5000');
});


