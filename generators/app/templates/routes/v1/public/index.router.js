const router = require('express').Router();

router.get('/', function (req, res) {
    res.send("Welcome to Dark Snow APIs");
});



module.exports = router;
