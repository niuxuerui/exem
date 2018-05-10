var express = require("express"),
    fs = require("fs");


var router = express.Router();

router.get("/getdata1", function(req, res, next) { //返回几条数据  
    fs.readFile("./data/data1.json", "utf-8", function(err, data) { //因为接口的原因，它现在的路径和html平级
        if (err) {
            console.log(err);
        }
        var test = JSON.parse(data); //读取一个json文件，读取到里面的信息，是一个对象
        console.log(test);
        console.log(88888)
        res.send(test);
    });

});

router.get("/gethtml", function() { //或者跳转至某个详情页面
    res.render();
});

module.exports = router;