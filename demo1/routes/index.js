var express = require('express');
var promise = require('promise')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/callback', function(req,res,next){
  var sum = 0;
  function addValues(a,b, display){
    sum = a + b;
    display()
  }
  function display(){
    console.log("Sum of a, b is: "+sum)
  }
  addValues(5,6, display);
  res.render('index', { title: 'New Express',
  addition: sum})
})

router.get('/promise', function(req,res,next){
  var currentStatus;

  var promise = new Promise(function(resolve, reject) {
  function checkStatus(a){
    if(a > 5){
      currentStatus = true;
      resolve("Stuff worked!");
      res.render('index',{ error: 'Worked'});
    }
    else{
      currentStatus = false;
      reject(Error("It broke"));
      res.render('index',{ error: 'Failed'})
    }
  };
  checkStatus(10);
  });

});


module.exports = router;
