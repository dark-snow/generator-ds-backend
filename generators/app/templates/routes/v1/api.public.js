let router = require('express').Router();

router.use('/', require('./public/index.router.js'));
router.use('/auth', require('leaf-auth-express').publicRouter);
router.use('/upload', require('./public/upload.router.js'));

module.exports = router;