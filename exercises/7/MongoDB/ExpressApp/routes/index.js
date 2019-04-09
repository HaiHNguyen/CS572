var express = require('express');
var router = express.Router();

const courseReg = require('../models/Grades');
const reqHelper = require('../helper/requestHelper');

const encryptor = require('../helper/EncryptData');
const secret = require('../models/Secret');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Grades app' });
});

router.get('/api/grades/', doGetAll);
router.get('/api/grades/:id', doGet);
router.post('/api/grades/:id', doPost);
router.put('/api/grades/:id', doPut);
router.delete('/api/grades/:id', doDelete);

router.get('/api/secret', doEncrypt);


function doGet(req, res, next){

   reqHelper.parseRequest(req.query)
        .then( request =>{
            courseReg.getGrade( request.id)
                .then( course =>{
                    res.json(course);
                    res.end();
                })
                .catch(err => {
                    next(err);
                });
        })
        .catch(err =>{
            next(err);
        });
}

function doGetAll(req, res, next){
    courseReg.getGrades()
        .then( course =>{
            res.json(course);
            res.end();
        })
        .catch(err => {
            next(err);
        });
}

function doPost(req, res, next){
    reqHelper.parseRequest(req.body)
        .then( request =>{
            courseReg.createGrade(request)
                .then( course =>{
                    res.json(course);
                    res.end();
                })
                .catch(err => {
                    next(err);
                });
        })
        .catch(err =>{
            next(err);
        });
}
function doPut(req, res, next){
    reqHelper.parseRequest(req.body)
        .then( request =>{
            courseReg.updateGrade(request)
                .then( course =>{
                    res.json(course);
                    res.end();
                })
                .catch(err => {
                    next(err);
                });
        })
        .catch(err =>{
            next(err);
        });

}
function doDelete(req, res, next){
    reqHelper.parseRequest(req.body)
        .then( request =>{
            courseReg.deleteGrade(request)
                .then( course =>{
                    res.json(course);
                    res.end();
                })
                .catch(err => {
                    next(err);
                });
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
