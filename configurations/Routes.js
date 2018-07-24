	module.exports = function (app) {
		var controllers = app.controllers,
			views = app.views;

		return {
			"/api/v1.0/nodejscafe/test": [{
					method: "POST",
					action: controllers.userController.createUser,
					middleware: ["hello"],
					views: {
						json: views.jsonView
					}
				}
			],

			"/user/:id": [{
					method: "GET",
					action: controllers.userController.getUser,
					middleware: ["hello"],
					views: {
						json: views.jsonView
					}
				},
				{
					method: "put",
					action: controllers.userController.updateUser,
					middleware: ["hello"],
					views: {
						json: views.jsonView
					}
				},
				{
					method: "delete",
					action: controllers.userController.deleteUser,
					middleware: ["hello"],
					views: {
						json: views.jsonView
					}
				}
			],

			"/users": [{
					method: "GET",
					action: controllers.userController.searchUser,
					middleware: ["hello"],
					views: {
						json: views.jsonView
					}
				}
			],

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
			}]



		};
	};
