var express = require('express');
var router = express.Router();
var data = []
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(
    data
 );
});

router.post('/', function(req, res, next) {
 var length = data.length
 req.body.id = length
 data.push(req.body)
});


module.exports = router;
