const express = require('express');
const model =  require('../model/model');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Exercise 5' });
});

router.get('/api/users/:id', function(req, res, next) {
    model.getUser(11, (data)=>{
      res.set('Cache-Control', 'private, max-age = 86400');
      res.send(data);
  });
});

router.get('/asyncapi/users/:id', function(req, res, next) {
    model.getUserAsync(11, (data)=>{
      res.set('Cache-Control', 'private, max-age = 24*60*60');
      res.send(data);
  });
});

router.get('/api/users', function(req, res, next) {
    model.getUsers((data)=>{
      res.set('Cache-Control', 'private, max-age = 24*60*60');
      let links =   "http://localhost:8888/api/users/?page=3>; rel='next'," +
          "http://localhost:8888/api/users/?page=10>; rel='last'," +
          "http://localhost:8888/api/users/?page=2>; rel='first'," +
          "http://localhost:8888/api/users/?page=1>; rel='prev'";
      res.set('Link', links);
      // console.log(res);

      if(data != null) {
        res.send(data);
      }else{
        res.send('Data not found');
      }
  });
});

router.get('/asyncapi/users', function(req, res, next) {
    model.getUsersAsync((data)=>{
      res.set('Cache-Control', 'private, max-age = 24*60*60');
      let links =   "http://localhost:8888/api/users/?page=3>; rel='next'," +
          "http://localhost:8888/api/users/?page=10>; rel='last'," +
          "http://localhost:8888/api/users/?page=2>; rel='first'," +
          "http://localhost:8888/api/users/?page=1>; rel='prev'";

      res.set('Link', links);
      // console.log(res);

      if(data != null) {
        res.send(data);
      }else{
        res.send('Data not found');
      }
  });
});


module.exports = router;
