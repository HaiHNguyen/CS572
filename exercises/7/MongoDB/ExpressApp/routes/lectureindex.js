var express = require('express');
var router = express.Router();

const reqHelper = require('../helper/requestHelper');
const encryptor = require('../helper/EncryptData');
const secret = require('../models/Secret');
const lectures = require('../models/Lectures');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Grades app' });
});

router.get('/lectures/', doGetAll);
router.get('/lectures/:lecture', doGet);
router.post('/lectures/:lecture', doPost);
router.put('/lectures/:lecture', doPut);
router.delete('/lectures/:lecture', doDelete);
router.get('lectures/:q', doSearch);


router.get('/api/secret', doEncrypt);


function doGet(req, res, next) {
    reqHelper.parseRequest(req.query)
        .then( request =>{
            lectures.getLecture( request.id, (err, result) =>{
                if(err){
                    next(err);
                }else{
                    res.json(result);
                    res.end();
                }
            })

        })
        .catch(err =>{
            next(err);
        });
}

function doGetAll(req, res, next) {
    reqHelper.parseRequest(req.query)
        .then( request =>{
            lectures.getLectures( (err, result) =>{
                if(err){
                    next(err);
                }else{
                    res.json(result);
                    res.end();
                }
            })

        })
        .catch(err =>{
            next(err);
        });
}

function doPost(req, res, next){
    reqHelper.parseRequest(req.query)
        .then( request =>{
            lectures.createLecture( request, (err, result) =>{
                if(err){
                    next(err);
                }else{
                    res.json(result);
                    res.end();
                }
            })

        })
        .catch(err =>{
            next(err);
        });
}

function doPut(req, res, next){

    reqHelper.parseRequest(req.query)
        .then( request =>{
            let query = {'lecture': request.oldValue}
            let newValues = {'course': request.course, 'lecture':request.newValue} ;

            lectures.createLecture( query, newValues, (err, result) =>{
                if(err){
                    next(err);
                }else{
                    res.json(result);
                    res.end();
                }
            })

        })
        .catch(err =>{
            next(err);
        });
}
function doDelete(req, res, next){
    reqHelper.parseRequest(req.query)
        .then( request =>{
            lectures.deleteLecture( request, (err, result) =>{
                if(err){
                    next(err);
                }else{
                    res.json(result);
                    res.end();
                }
            })

        })
        .catch(err =>{
            next(err);
        });
}


function doSearch(req, res, next){
    reqHelper.parseRequest(req.query)
        .then( request =>{
            lectures.search( request, (err, result) =>{
                if(err){
                    next(err);
                }else{
                    res.json(result);
                    res.end();
                }
            })

        })
        .catch(err =>{
            next(err);
        });
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
