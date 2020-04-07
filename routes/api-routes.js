var express = require('express');
var router = express.Router();
var links = require('./links');
/* GET home page. */
router.get('/v1_0/links', function(req, res, next) {
    return res.json(links);
    //   res.render('index', { title: 'Express' });
});

module.exports = router;
