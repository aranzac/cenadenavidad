var express = require('express');
var router = express.Router();

const info = express.Router();

let Info = require('./info.model')

/* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('index', {
//         title: 'Express'
//     });
// });

info.route('/').get(function (req, res) {
    console.log("buscando")
    Info.find(function (err, informacion) {
        if (err)
            res.json(err);
        else {
            res.json(informacion)
            console.log(informacion)
        }
    })
})

info.route('/add').post(function (req, res) {
    let info = new Info(req.body);
    info.save().then(() => {
        res.status(200).json({
            business: 'business in added successfully'
        });
    }).catch(() => {
        res.status(400).send('unable to save to database');
    });
})

module.exports = info;