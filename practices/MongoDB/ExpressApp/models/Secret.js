
const mongoDBClient = require('mongodb').MongoClient;
const uri = "mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01";

var getSecret = async function( callBack ) {
    try {
        mongoDBClient.connect(uri, {'useNewUrlParser': true})
            .then(async function(client) {
                const db =  client.db('homework01');
                const collection = db.collection('data');
                const query = {};
                const projection = {'key': 1, 'message':1};
                collection.findOne(query, projection, (err, doc) =>{
                    callBack (err, doc)
                });

            })
            .catch(err =>{
                callBack (err, null)
            })
    }catch(err){
        callBack (err, null)
    }
}

//  getSecret( (err, doc) =>{
//     console.log('Doc: ', doc);
//
//     console.log('err: ', err);
// })


module.exports =  { 'getSecret':getSecret};