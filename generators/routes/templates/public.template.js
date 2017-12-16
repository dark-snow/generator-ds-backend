const router = require('express').Router();
const Schema = require('../../../models/<%= name %>.model.js');
const response = require("dark-snow-response")

_optionsValidator = (options) => {
    if (!options.limit || (options.limit && (options.limit > 25 || options.limit < 1))) {
        options.limit = 25;
    }

    if (!options.skip) {
        options.skip = 0;
    }
    return options;
}

router.get('/', (req, res) => {
    Schema.find({}).then((data) => {
        response.json(res, data);
    }).catch(err => {
        console.log(err)
        response.error(res);
    });
});

router.get('/:id', (req, res) => {
    Schema.findById(req.params.id).then((data) => {
        response.json(res, data);
    }).catch(err => {
        console.log(err)
        response.error(res);
    });
});


module.exports = router;