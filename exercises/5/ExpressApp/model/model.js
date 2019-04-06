
const axios =  require('axios');
var getUser = function( id, callBack ){
    axios.get('https://randomuser.me/api/?id=' + id)
        .then( function (response){
            let data = JSON.stringify(response.data);
            //console.log('getUser:\n',  data);
            callBack(data);
        })
        .catch (function (error){
            console.log('ERROR: ', error)
            callback(null);

        })
}
//getUser();
var getUserAsync = async function(id, callBack){
    let response  = await axios.get('https://randomuser.me/api/?id=' + id);
    callBack(JSON.stringify(response.data));

}
//getUserAsync();


var getUsers = function(callBack){
    axios.get('https://randomuser.me/api/?results=10')
        .then( function (response){
            let data = JSON.stringify(response.data);
            console.log('getUsers:\n',  data);
            callBack(data);
        })
        .catch (function (error){
            console.log('ERROR: ', error)
            callBack(null);
        })
}

var getUsersAsync = async function(callBack){
    try {
        let response = await axios.get('https://randomuser.me/api/?results=10');
        callBack(JSON.stringify(response.data));
    }catch (error){
        console.log('ERROR: ', error)
        callBack(null);
    }
}

module.exports = {
    'getUser': getUser,
    'getUserAsync': getUserAsync,
    'getUsers': getUsers,
    'getUsersAsync':getUsersAsync};

