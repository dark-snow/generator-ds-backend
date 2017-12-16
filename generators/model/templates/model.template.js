const Model = require("mongo-leaf").Model;
module.exports = new Model("<%= name %>", {}, { collection: "<%= collection %>" });