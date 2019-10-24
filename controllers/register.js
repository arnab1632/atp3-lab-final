var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('register/index');
});

router.post('/', function(request, response){
	
	var user = {
		name: request.body.name, 
		gender: request.body.gender,
		usertype: request.body.usertype,
		username: request.body.username,
		password: request.body.password
	};

	userModel.insert(user, function(status){	
		if(status){
			response.redirect("/login");
		}else{
			response.redirect("/register");	
		}
	});

});

module.exports = router;


