const User = require('../models/user.model');

exports.create = function(req,res){
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password
    });

    console.log("userName : "+req.body.userName)
    user.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong"
        });
    });
};


exports.login = function(req,res){
    User.findOne({
        $and: [
           { userName: req.body.userName },
           { password: req.body.password}
        ]
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong"
        });
    });
}