

/*
This helper Middleware validate and parse quest in JSON to JS object
*/

async function parseRequest(req){

    try{
        let jsonReq = JSON.stringify(req);
        let objReq = JSON.parse(jsonReq);
        return objReq;
    }catch (err){
        return Promise.reject(err);
    }
}

module.exports = {'parseRequest': parseRequest};
