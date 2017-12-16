const response = require("dark-snow-response");
//Token is supposed to be correct
module.exports = function (req, res, next) {
    require("leaf-auth-express").verifyToken(req.headers.authorization.split(" ")[1]).then(user => {
        req.user = user;
        next();
    }).catch(err => {
        response.unauthorized(res);
    })
}