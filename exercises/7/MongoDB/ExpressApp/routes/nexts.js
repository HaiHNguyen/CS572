
var express = require('express');
var router = express.Router();


router.get('/:param1/:param2', firstNext, secondNext, lastNext);
router.use(firstError);
router.use(secondError);
router.use(lastError);

function firstNext(req, res, next){
    console.log('First Next');
    next();
}

function secondNext(req, res, next){
    console.log('Second Next');
    next();
}

function lastNext(req, res, next){
    console.log('Last Next: ', JSON.stringify(req.params));
    try{
        let ex = null;
        res.end("Last Next called: " + ex.toString());
    }catch(err){
        next(err);
    }

}

function firstError(err, req, res, next){
    console.log ('First Error: \n', err);
    next(err);

}
function secondError(err, req, res, next){
    console.log ('Second Error: \n', err);
    next(err);

}

function lastError(err, req, res, next){
    console.log ('Last Error: \n', err);
    res.end("Last Error handled: " +  err);
}

module.exports = router;