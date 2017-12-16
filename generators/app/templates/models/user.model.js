const Model = require("mongo-leaf").Model;
module.exports = new Model("User", {
    email: String,
    password: String
}, { collection: "users" });