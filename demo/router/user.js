var express = require("express"),
    fs = require("fs");

var router = express.Router();

router.post("/login", function() { //判断登录，或注册信息   
    res.send();
});

router.post("/loginhtml", function() { //或者跳转哪个具体页面
    res.render();
});

module.exports = router;