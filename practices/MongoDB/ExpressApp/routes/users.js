var express = require('express');
var router = express.Router();
var user = require('../models/Users');


/* GET users listing. */
router.get('/', doGet);

function doGet(req, res, next){
  console.log('doGet');
  user.getUsers( 1)
      .then( users =>{
        console.log(users);
        res.json(users);
        res.end();
      })
      .catch(err => {
        next(err);
      });
}

module.exports = router;
