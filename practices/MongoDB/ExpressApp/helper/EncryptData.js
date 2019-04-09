

/*
This helper Middleware validate and parse request in JSON to JS object
*/
var RSA = require('simple-encryption').RSA;

async function encryptData(key, data, callBack){

    try{
        console.log("Key: ", key);
        console.log("Data: ", data)
        let decryptedData = RSA.decrypt(key, data);
        callBack(null, decryptedData);

    }catch (err){
        callBack(err, null);
    }
}
module.exports = {'decryptData': encryptData};
