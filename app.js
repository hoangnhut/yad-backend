var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var passport = require("passport");
var session = require("express-session");

var SQLiteStore = require("connect-sqlite3")(session);

var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var dashboardRouter = require("./routes/dashboard");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: "sessions.sqlite3", dir: "./db" }),
  })
);
app.use(passport.authenticate("session"));

app.use("/", indexRouter);
app.use("/", authRouter);
app.use("/dashboard", dashboardRouter);
app.use("/users", usersRouter);

module.exports = app;
