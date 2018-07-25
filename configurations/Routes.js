	module.exports = function (app) {
		var controllers = app.controllers,
			views = app.views;

		return {
			"/api/v1.0/nodejscafe/test": [{
					method: "GET",
					action: controllers.userController.testApi,
					middleware: ["hello"],
					views: {
						json: views.jsonView
					}
			}],

			"/api/v1.0/nodejscafe/post_blog": [{
					method: "POST",
					action: controllers.userController.postBlog,
					middleware: ["hello"],
					views: {
						json: views.jsonView
					}
			}],

			"/api/v1.0/nodejscafe/get/blogs/:skip/:limit": [{
					method: "GET",
					action: controllers.userController.getBlogs,
					middleware: ["hello"],
					views: {
						json: views.jsonView
					}
			}],

			"/api/v1.0/nodejscafe/get/blogs-count": [{
					method: "GET",
					action: controllers.userController.getBlogsCount,
					middleware: ["hello"],
					views: {
						json: views.jsonView
					}
			}],

			"/api/v1.0/nodejscafe/get/blogById/:blogId": [{
					method: "GET",
					action: controllers.userController.getBlogById,
					middleware: ["hello"],
					views: {
						json: views.jsonView
					}
			}]



		};
	};
