var express = require('express');
var promise = require('promise')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/callback', function(req,res,next){
  console.log("inside")
  var a = ["121719", "121720", "121721"];
  var b = [{
    "empId":"121719",
    "role":"Software Engineer",
    "city":"Dharmapuri"
  },
  {
    "empId":"121720",
    "role":"Software Engineer",
    "city":"Tirunelveli"
  },
  {
    "empId":"121721",
    "role":"Software Engineer",
    "city":"AP"
  }]

  function f1(objectA, callback){
    
    objectA.forEach(element => {
      console.log("value "+element)
    });
    display();
  }

  function display(){
    console.log("print")
  }
  f1(a,callback);
  res.render('index', { title: 'Express' });
})

router.get('/promise', function(req,res,next){
  var a = ["121719", "121720", "121721"];
  var b = [{
    "empId":"121719",
    "role":"Software Engineer",
    "city":"Dharmapuri"
  },
  {
    "empId":"121720",
    "role":"Software Engineer",
    "city":"Tirunelveli"
  },
  {
    "empId":"121721",
    "role":"Software Engineer",
    "city":"AP"
  }]

  function f1(objectA, callback){
    
    objectA.forEach(element => {
      console.log("value "+element)
    });
    display();
  }

  function display(){
    console.log("print")
  }
  f1(a,callback);
  res.render('index', { title: 'Express' });
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
