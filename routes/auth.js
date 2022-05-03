var express = require("express");
var passport = require('passport');
var LocalStrategy = require('passport-local');

var router = express.Router();

    passport.use(new LocalStrategy(function verify(username, password, callback) {
        
        if(?????)
        {
            // sai username+password
            return callback(null, false, { message: 'Incorrect username or password.' });
        }
        
        // dung username+password
        return callback(null, user);

    }));

router.post("/login", function (req, res, next) {

  res.json(req.body);
});

module.exports = router;
