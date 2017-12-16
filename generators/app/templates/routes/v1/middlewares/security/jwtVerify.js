const response = require("dark-snow-response");
module.exports = function (req, res, next) {
    if (req.headers.authorization
        && typeof req.headers.authorization === 'string'
        && req.headers.authorization.split(" ")[0] === "Bearer"
        && req.headers.authorization.split(" ")[1]) {
        require("leaf-auth-express").verifyToken(req.headers.authorization.split(" ")[1]).then(d => {
            next();
        }).catch(err => {
            response.unauthorized(res);
        })
    } else {
        response.unauthorized(res);
    }
}