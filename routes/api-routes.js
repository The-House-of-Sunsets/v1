var express = require('express');
var router = express.Router();
var links = require('./links');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("/client/build/")
})
router.get('/v1_0/links', function(req, res, next) {
    let newLinks = JSON.stringify(links);
    console.log("ooo: " + newLinks );
    res.send(links);
    //   res.render('index', { title: 'Express' });
});

module.exports = router;
