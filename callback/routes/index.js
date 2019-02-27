var express = require('express');
var promise = require('promise')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/callback', function(req,res,next){
  var finalValue=[];
  var a = ["121719", "121720", "121721"];
  var b = [{
    empId:"121719",
    role:"Software Engineer",
    city:"Dharmapuri",
    name:"Metikala Suresh"
  },
  {
    empId:"121720",
    role:"Software Engineer",
    city:"Tirunelveli",
    name:"Lakshmanan"
  },
  {
    empId:"121721",
    role:"Software Engineer",
    city:"AP",
    name:"Manjunath"
  }]

  function f1(objectA, callback){
    
    objectA.forEach(element => {
      console.log("value "+element)
      callback(element);
    });
  }

  function f2(value){
    b.forEach(element => {
      if(element.empId == value){
        finalValue.push(element);
      }
    })
    console.log(b+ "  value of  array "+JSON.stringify(finalValue))
  } 
  f1(a,f2);
  res.render('index', { JSONValue: JSON.stringify(finalValue) });
})

router.get('/mergeArray', function(req,res,next){

    var a = [1,2,3,4,5];
    var b = [3,4,5,6,7,8,9];
    var mergeValue = [];
    var temp = [];

    b.forEach(value => {
      a.push(value);
    })

    function removeDuplicate(){
     
      a.forEach(element => {
        var booleanValue =isInArray(element);
        if(booleanValue == false)
        temp.push(element)
      })
    }
    function isInArray(value) {
      if(temp.length != 0)
        return temp.indexOf(value) > -1;
      else
        return false
    }
    function reverseArray(){
      let tempLength = temp.length - 1;
      while(tempLength >= 0){
        mergeValue.push(temp[tempLength]);
        tempLength--;
      }
    }

    removeDuplicate();
    reverseArray();
    console.log("merger Value "+temp);
    console.log("reverse array "+mergeValue)
    // console.log(b)

    // while(bOfLength >= 0){
    //   // console.log(a[bOfLength])
    //   for(var i = 0; i<= b.length-1; i++){
        
    //     if(b[i] != a[bOfLength]){
    //       console.log("b="+b[i]+" a="+a[bOfLength])
    //       b.push(a[bOfLength])

    //     }
    //   }
    //   bOfLength--;
    // }
console.log("value of b ="+b)




});

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
