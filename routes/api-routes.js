var express = require('express');
var router = express.Router();
var links = require('./links');
/* GET home page. */
router.get('/v1_0/links', function(req, res, next) {
    res.send(links);
});

module.exports = router;
