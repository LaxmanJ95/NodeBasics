var express = require('express');
var router = express.Router();

const user_controller = require('../controller/usercontroller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/createUser', user_controller.create);
router.post('/login', user_controller.login)

module.exports = router;
