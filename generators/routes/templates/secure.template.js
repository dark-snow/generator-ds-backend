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

router.post('/', (req, res) => {
    Schema.insertOne(req.body).then((data) => {
        response.created(res, data.ops)
    }).catch(err => {
        console.log(err)
        response.error(res);
    });
});


router.put('/:id', (req, res) => {
    Schema.findById(req.params.id).then((data) => {
        let aux = req.body;
        aux.password = data.password;
        delete aux._id;
        Schema.updateById(req.params.id, aux).then(position => {
            response.accepted(res, position);
        })
    }).catch(err => {
        console.log(err)
        response.error(res);
    });
});

router.delete('/:id', (req, res) => {
    Schema.removeById(req.params.id).then((data) => {
        response.accepted(res);
    }).catch(err => {
        console.log(err)
        response.error(res);
    });
});


module.exports = router;