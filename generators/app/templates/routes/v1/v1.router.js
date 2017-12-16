let router = require('express').Router();

router.use("/v1",require('./api.public.js'));
router.use('/v1',require('./api.secure'));

module.exports = router;