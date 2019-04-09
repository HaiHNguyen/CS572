var express = require('express');
var router = express.Router();

const reqHelper = require('../helper/requestHelper');

const decryptor = require('../helper/DecryptData');
const secret = require('../models/Secret');



router.get('/', doDecrypt);

function doDecrypt(req, res, next){
    console.log('router.get(\'/secret\', doDecrypt);');

     secret.getSecret((err, doc) =>{
        if(err){
            next(err);
        }else{
            console.log('Doc: ', doc);
            decryptor.decryptData(doc.key, doc.message, (err, data) =>{
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
