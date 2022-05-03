var express = require("express");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var router = express.Router();

var users = require("../db/users");

passport.use(
  new LocalStrategy(function verify(username, password, callback) {
    // sai username hoac password
    return callback(null, false, {
      message: "Incorrect username or password.",
    });

    // dung username hoac password
    return callback(null, row);
  })
);

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
  })
);

module.exports = router;
