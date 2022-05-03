var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  if (req.user) return res.json({ user: req.user });
  return res.redirect("/");
});

module.exports = router;
