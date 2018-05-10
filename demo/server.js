var express = require("express"),
    bodyparser = require("body-parser"),
    userrouter = require("./router/user.js"),
    datarouter = require("./router/data.js");

var app = express();

app.use(express.static(__dirname));
app.use(bodyparser.urlencoded({ extended: true }));
app.set("views", "./views");
app.set("view engin", "ejs");

app.use("/user", userrouter); //关于用户操作的
app.use("/data", datarouter); //关于用户信息的

app.listen(5858);