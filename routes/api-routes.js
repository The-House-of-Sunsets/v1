var express = require('express');
var router = express.Router();
var links = require('./links');
/* GET home page. */
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
router.get('/v1_0/links', function(req, res, next) {
    let newLinks = JSON.stringify(links);
    res.send(links);
    //   res.render('index', { title: 'Express' });
});

module.exports = router;
