

/*
This helper Middleware validate and parse request in JSON to JS object
*/

async function parseRequest(callBack){

    try{
        let jsonReq = JSON.stringify(req);
        let objReq = JSON.parse(jsonReq);
        callBack(null, objReq);

    }catch (err){
        callBack(err, null);
    }
}

module.exports = {'parseRequest': parseRequest};
