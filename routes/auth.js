var express = require("express");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var users = require("../data/users");

var router = express.Router();

passport.use(
  new LocalStrategy(function verify(username, password, callback) {
    const loggedInUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!loggedInUser) {
      // sai username+password
      return callback(null, false, {
        message: "Incorrect username or password.",
      });
    }

    // dung username+password
    return callback(null, loggedInUser);
  })
);

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dasboard",
    failureRedirect: "/",
  })
);

module.exports = router;
