

/*
This helper Middleware validate and parse request in JSON to JS object
*/

// async function parseRequest(callBack){
//
//     try{
//         let jsonReq = JSON.stringify(req);
//         let objReq = JSON.parse(jsonReq);
//         callBack(null, objReq);
//
//     }catch (err){
//         callBack(err, null);
//     }
// }

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
