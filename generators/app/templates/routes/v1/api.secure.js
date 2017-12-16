let router = require('express').Router();

router.use(require("./middlewares/security/jwtVerify.js"));
router.use(require("./middlewares/utility/getUserFromToken.js"));

router.use('/auth', require('leaf-auth-express').secureRouter);
router.use("/upload",require("./secure/upload.secure.js"));

module.exports = router;