// An Express router
const router = require('express').Router();

router.use("/", require('express').static("upload"));

module.exports = router;