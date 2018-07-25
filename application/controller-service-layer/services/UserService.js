var BaseService = require('./BaseService');

UserService = function (app) {
	this.app = app;
};

UserService.prototype = new BaseService();

UserService.prototype.createUser = function (user, callback) {
	user.save(function (err, userObj) {
		callback(err, userObj);
	});

}

UserService.prototype.getUser = function (id, callback) {
	domain.User.findOne({
		_id: id,
		deleted: false
	}, function (err, user) {
		callback(err, user);
	});
}

UserService.prototype.updateUser = function (id, userObj, callback) {
	domain.User.findOneAndUpdate({
		_id: id,
		deleted: false
	}, userObj, null, function (err, user) {
		if (err) {
			callback(err, userObj);
		} else {
			domain.User.findOne({
				_id: id,
				deleted: false
			}, function (err, user) {
				callback(err, user);
			});
		}
	});
}

UserService.prototype.searchUser = function (firstName,lastName,callback) {
    var firstName = (firstName == null || firstName == "")?'.*':firstName;
	var lastName = (lastName == null || lastName == "")?'.*':lastName;
	domain.User.find({firstName:new RegExp(firstName),lastName:new RegExp(lastName)},function(err,objects){
		callback(err, objects);
	})
}

UserService.prototype.deleteUser = function (id, callback) {
	domain.User.findOne({
		_id: id
	}, function (err, user) {
		if (err) {
			callback(err, user)
		};
		user.softdelete(function (err, deletedUser) {
			callback(err, deletedUser);
		});
	});
}

UserService.prototype.testApi = function (callback) {
	console.log("TEST API RAN SUCCESSFULLY");
	// callback(false,{res:"TEST API RAN SUCCESSFULLY"})
	var array = [1,2,3,4,5,6,7,8,9,10];
	var counter = 0;
	async.forEach(array,function(item, pass){
		console.log("COUNTER ",counter);
		counter = counter+1;
		pass();
	},function(res){
			console.log("The array completed and COUNTER is ",counter);
			callback(false,{res:"TEST API RAN SUCCESSFULLY"})
	})
}

UserService.prototype.postBlog = function(req, callback){
		console.log("the req is ",req.body);
		var blogObj={
			title:req.body.title,
			matter:req.body.blog
		};

		var blog = new domain.Blog(blogObj);
		blog.save(function(err,blogObj){
			if(!err){
				console.log("The blog has been published successfully",blogObj);
				callback(false,blogObj);
			}else {
				console.log("Some Error Occured",err);
				callback(false,err);
			}
		})
}

UserService.prototype.getBlogs = function(params, callback){
	var skip = params.skip;
	var limit = params.limit;
	domain.Blog.find({status:'Active'},{title:1,created:1}).skip(skip).limit(limit).sort({created:-1}).exec(function(err,res){
		if(!err){
			callback(false,res);
		}else {
			callback(false,err);
		}
	})
}

UserService.prototype.getBlogsCount = function(callback){
	domain.Blog.count({status:'Active'},function(err,count){
		if(!err){
			callback(false,{totalNumberOfBlogs:count});
		}else {
			callback(false,err);
		}
	})
}

UserService.prototype.getBlogById = function(params, callback){
	domain.Blog.findOne({_id:params.blogId},function(err,blogObj){
		if(!err){
			callback(false,blogObj);
		}else {
			callback(false,err);
		}
	})
}

module.exports = function (app) {
	return new UserService(app);
};
