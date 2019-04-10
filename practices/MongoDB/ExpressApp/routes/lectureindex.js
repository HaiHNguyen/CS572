var express = require('express');
var router = express.Router();

const reqHelper = require('../helper/requestHelper');
const encryptor = require('../helper/DecryptData');
const secret = require('../models/Secret');
const lectures = require('../models/Lectures');


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Grades app' });
// });

router.get('/', doGetLectures);
router.get('/:lecture', doGetLecture);
router.post('/:lecture', doCreateLecture);
router.put('/:lecture', doUpdateLecture);
router.delete('/:lecture', doDeleteLecture);
router.get('/search/:q', doSearch);

//
// router.get('/api/secret', doEncrypt);

function doGetLecture(req, res, next) {
    reqHelper.parseRequest(req.query)
        .then( request =>{
                lectures.getLecture(request.lecture, (err, result) =>{
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

function doGetLectures(req, res, next) {
    console.log('doGetAll');
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

function doCreateLecture(req, res, next){
    reqHelper.parseRequest(req.query)
        .then( request =>{
            // console.log('request: ', request);
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

function doUpdateLecture(req, res, next){

    reqHelper.parseRequest(req.query)
        .then( request =>{
            let query = {'lecture': request.lecture};
            let newValues = {'course': request.course, 'lecture':request.new_lecture} ;
            console.log("query: ", query);
            console.log("newValues: ", newValues);

            lectures.updateLecture( query, newValues, (err, result) =>{
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
function doDeleteLecture(req, res, next){
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

            lectures.search( request.keyword, (err, result) =>{
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

// function doEncrypt(req, res, next){
//
//     secret.getSecret((err, doc) =>{
//         if(err){
//             next(err);
//         }else{
//             console.log('Doc: ', doc);
//             encryptor.encryptData(doc.key, doc.message, (err, data) =>{
//                 if(err){
//                     next(err);
//                 }else{
//                     console.log('Encrypted data: ', data);
//                     res.json(JSON.stringify(doc))
//                 }
//             });
//         }
//     });
// }

module.exports = router;
