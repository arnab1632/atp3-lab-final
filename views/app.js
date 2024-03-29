//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var expSession = require('express-session');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var login = require('./controllers/login');
var register = require('./controllers/register');
var admin = require('./controllers/admin');
var customer = require('./controllers/customer');
//var user = require('./controllers/user');
var logout = require('./controllers/logout');
var app = express();


//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(expSession({secret:'my top secret value', saveUninitialized:true, resave: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/register', register);
app.use('/admin', admin);
app.use('/customer', customer);


//app.use('/user', user);
app.use('/logout', logout);



//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});