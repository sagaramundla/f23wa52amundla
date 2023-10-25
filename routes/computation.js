var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
 if(req.query.x==undefined) {
    raksha = Math.random();
 } 
 else {
    raksha = req.query.x;
 }
 var result = Math.sign(raksha);
  res.render('computation', { hello: `Math.sign(${raksha}) is ${result}` });
});

module.exports = router;