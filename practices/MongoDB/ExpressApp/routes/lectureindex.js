var express = require('express');
var router = express.Router();

const courseReg = require('../models/Grades');
const reqHelper = require('../helper/requestHelper');

const encryptor = require('../helper/EncryptData');
const secret = require('../models/Secret');
const lectures = require('../models/Lectures');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Grades app' });
});

router.get('/api/lectures/', doGetAll);
router.get('/api/lectures/:id', doGet);
router.post('/api/lectures/:id', doPost);
router.put('/api/lectures/:id', doPut);
router.delete('/api/lectures/:id', doDelete);

router.get('/api/secret', doEncrypt);


function doGet(req, res, next) {

}

function doGetAll(req, res, next) {
}

function doPost(req, res, next){

}
function doPut(req, res, next){

}
function doDelete(req, res, next){

}

function doEncrypt(req, res, next){

    secret.getSecret((err, doc) =>{
        if(err){
            next(err);
        }else{
            console.log('Doc: ', doc);
            encryptor.decryptData(doc.key, doc.message, (err, data) =>{
                if(err){
                    next(err);
                }else{
                    console.log('Encrypted data: ', data);
                    res.json(JSON.stringify(doc))
                }
            });
        }
    });
}

module.exports = router;
