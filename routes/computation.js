var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
 if(req.query.x==undefined) {
    raksha = Math.random();
 } 
 else {
    raksha = req.query.x;
 }
 var result = Math.pow(raksha);
  res.render('computation', { hello: `Math.pow(${raksha}) is ${result}` });
});

module.exports = router;