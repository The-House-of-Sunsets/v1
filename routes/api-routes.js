var express = require('express');
var router = express.Router();
var links = require('./links');
/* GET home page. */
router.get('/v1_0/links', function(req, res, next) {
    res.send(links);
});
router.get('/stream', function(req, res, next) {
    res.send('../DASH-to-HLS-Playback/index.html')
})
module.exports = router;
