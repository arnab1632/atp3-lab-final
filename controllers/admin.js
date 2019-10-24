var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	var username=request.cookies['username'];
	userModel.getByusername(username, function(result){
		response.render('admin/index',result);
	});
});

router.get('/addproducts', function(request, response){
	response.render('admin/addproducts');
});
router.get('/deleteproducts', function(request, response){
	response.render('admin/deleteproducts');
});
router.get('/deletecustomer', function(request, response){
	response.render('admin/deletecustomer');
});
router.get('/addproducts', function(request, response){
	response.render('admin/addproducts');
});
router.get('/editprofile', function(request, response){
	response.render('admin/editprofile');
});




module.exports = router;
