var express = require("express");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var router = express.Router();

var users = require("../db/users");

passport.use(
  new LocalStrategy(function verify(username, password, callback) {
    let loggedInUser = users.find(
      (u) => u.username === username && u.password === password
    );

    // sai username hoac password
    if (loggedInUser) {
      // dung username hoac password
      return callback(null, loggedInUser);
    }
    return callback(null, false, {
      message: "Incorrect username or password.",
    });
  })
);

passport.serializeUser(function (user, callback) {
  process.nextTick(function () {
    callback(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function (user, callback) {
  process.nextTick(function () {
    return callback(null, user);
  });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
  })
);

module.exports = router;
