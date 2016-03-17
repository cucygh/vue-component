var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/sugguest', function (req, res, next) {
    var json, len;
    var list = [{
        code: 1,
        text: '第一个'
    }, {
        code: 2,
        text: '第二个'
    }, {
        code: 3,
        text: '第三个'
    }, {
        code: 4,
        text: '第思个'
    }, {
        code: 5,
        text: '第无个'
    }, {
        code: 6,
        text: '第是个'
    }];
    len = Math.floor(Math.random() * 6);
    if (!req.query.text) {
        json = {
            list: []
        };
    } else {
        json = {
            list: list.slice(0, len)
        }
    }
    res.json(json);
})
module.exports = router;
