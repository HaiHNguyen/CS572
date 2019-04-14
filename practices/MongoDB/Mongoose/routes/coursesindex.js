var express = require('express');
var router = express.Router();



const CoursesModel = require('../models/courses');

// const connString =  'mongodb://localhost/mwa';
// const mongoose = require('mongoose');
// var db;
//
// const dbClient = mongoose.connect(connString, {useNewUrlParser: true} );
// db = dbClient.connection;



// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Grades app' });
// });

router.get('/', doGetCourses);
router.post('/', doCreateCourse);
router.put('/', doUpdateCourse);
router.delete('/:course_id', doDeleteCourse);
router.get('/search/:q', doSearch);


function doGetCourses(req, res, next) {
    res.json({'Success': 1, 'result': 'The method has not been supported yet!'})
    res.end();
}

function doCreateCourse(req, res, next){
   console.log('Request received: \n', req.body);
   const course = new CoursesModel(req.body);
    course.save( (err, result) =>{
        if(!err) {
            console.log("Created Courses successfully: ", result);
            res.json({'Success': 1, 'result': JSON.stringify(result)})
            res.end();

        }else{
            console.log("DB ERROR: ", err);
            res.json({'Success': 0, 'result': null})
            res.end();
        }
    } )
}

function doUpdateCourse(req, res, next){
    console.log('Request received: \n', req.body);
    const update = req.body;
    const query = {course_id: update.course_id};
    CoursesModel.findOneAndUpdate(query, update, (err, result) =>{
        if(!err) {
            console.log("Updated Courses successfully: ", result);
            res.json({'Success': 1, 'result': JSON.stringify(result)})
            res.end();

        }else{
            console.log("DB ERROR: ", err);
            res.json({'Success': 0, 'result': null})
            res.end();
        }
    } )
}
function doDeleteCourse(req, res, next){
    res.json({'Success': 1, 'result': 'The method has not been supported yet!'})
    res.end();
}


function doSearch(req, res, next){

}


module.exports = router;
