
global.domain = {}

domain.Address = require("../application/models/Address.js")
domain.User = require("../application/models/User.js")
domain.AuthenticationToken = require("../application/models/AuthenticationToken.js")
domain.VerificationToken = require("../application/models/VerificationToken.js")
domain.RegistrationToken = require("../application/models/RegistrationToken.js")
domain.Blog = require("../application/models/Blogs.js");

module.exports = domain
