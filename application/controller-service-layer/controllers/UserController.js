var encrypt = require('../../../application-utilities/EncryptionUtility');
module.exports = function () {


	var createUser = function (req, res, callback) {
		var self = this;
		var salt = uuid.v1();
		var user = new domain.User(req.body.user);
		user.salt = salt;
		user.password = encrypt(salt, user.password);
		user.validate(function (err) {
			if (err != null || err == "undefined") {
				Logger.info(err.errors.stack);
				err.status = 400;
				callback(err, user);
			} else {
				self.services.userService.createUser(user,callback);
			}
		})
	}

	var getUser = function (req, res, callback) {
		var id = req.params.id;
		this.services.userService.getUser(id,callback);
	}

	var updateUser = function (req, res, callback) {
		var id = req.params.id;
		this.services.userService.updateUser(id,req.body.user,callback);
	}

	var deleteUser = function (req, res, callback) {
		var id = req.params.id
		this.services.userService.deleteUser(id,callback);
	}

	var searchUser = function (req, res, callback) {
		var firstName = req.query.firstName;
		var lastName = req.query.lastName;
		this.services.userService.searchUser(firstName,lastName,callback);
	}

	var testApi = function(req, res, callback){
		this.services.userService.testApi(callback);
	}

	var postBlog = function(req, res, callback){
		console.log("The pointer is here ");
		this.services.userService.postBlog(req, callback);
	}

	var getBlogs = function(req, res, callback){
		this.services.userService.getBlogs(req.params,callback);
	}

	var getBlogsCount = function(req, res, callback){
		this.services.userService.getBlogsCount(callback);
	}

	var getBlogById = function(req, res, callback){
		this.services.userService.getBlogById(req.params, callback);
	}

	var getLocation = function(req, res, callback){
		this.services.userService.getLocation(req.params, callback);
	}

	return {
		createUser: createUser,
		getUser: getUser,
		updateUser: updateUser,
		searchUser: searchUser,
		deleteUser: deleteUser,
		testApi:testApi,
		postBlog:postBlog,
		getBlogs:getBlogs,
		getBlogsCount:getBlogsCount,
		getBlogById:getBlogById,
		getLocation:getLocation
	}
};
