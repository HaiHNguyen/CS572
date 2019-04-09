
const mongoDBClient = require('mongodb').MongoClient;
//const uri = "mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01";

//connection: mongodb+srv://mwa:<password>@cluster0-1btpu.mongodb.net/test?retryWrites=true
const uri = "mongodb+srv://mwa:mwa@cluster0-1btpu.mongodb.net/homework07?retryWrites=true";

var getLecture = async function( lecture, callBack ) {
    try {

        mongoDBClient.connect(uri, {'useNewUrlParser': true})
            .then(async function(client) {
                const db =  client.db('homework07');
                const collection = db.collection('lectures');
                const query = {'lecture': lecture};
                collection.findOne(query, (err, doc) =>{
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

var getLectures = async function( callBack ) {
    try {
        mongoDBClient.connect(uri, {'useNewUrlParser': true})
            .then(async function(client) {
                const db =  client.db('homework07');
                const collection = db.collection('lectures');
                const query = {};
                collection.find(query).toArray((err, docArr) =>{
                    callBack (err, docArr)
                });
            })
            .catch(err =>{
                callBack (err, null)
            })
    }catch(err){
        callBack (err, null)
    }
}

var createLecture = async function( lecture, callBack ) {
    try {
        mongoDBClient.connect(uri, {'useNewUrlParser': true})
            .then(async function(client) {
                const db =  client.db('homework07');
                const collection = db.collection('lectures');
                const query = {};
                collection.insertOne(lecture, (err, res) =>{
                    callBack (err, res)
                });
            })
            .catch(err =>{
                callBack (err, null)
            })
    }catch(err){
        callBack (err, null)
    }
}
var updateLecture = async function( query, newValues, callBack ) {
    try {
        mongoDBClient.connect(uri, {'useNewUrlParser': true})
            .then(async function(client) {
                const db =  client.db('homework07');
                const collection = db.collection('lectures');
                const updateQuery = {$set: newValues};
                collection.updateOne(query, updateQuery, (err, res) =>{
                    callBack (err, res)
                });
            })
            .catch(err =>{
                callBack (err, null)
            })
    }catch(err){
        callBack (err, null)
    }
}

var deleteLecture = async function( query, callBack ) {
    try {
        mongoDBClient.connect(uri, {'useNewUrlParser': true})
            .then(async function(client) {
                const db =  client.db('homework07');
                const collection = db.collection('lectures');
                collection.deleteOne(query, (err, res) =>{
                    callBack (err, res)
                });
            })
            .catch(err =>{
                callBack (err, null)
            })
    }catch(err){
        callBack (err, null)
    }
}




var search = async function( exp, callBack ) {
    try {
        mongoDBClient.connect(uri, {'useNewUrlParser': true})
            .then(async function(client) {
                const db =  client.db('homework01');
                const collection = db.collection('data');
                const projection = {'key': 1, 'message':1};
                collection.findOne(exp, projection, (err, doc) =>{
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







// getLecture( 'Express', (err, doc) =>{
//     if(err){
//         console.log('err: ', err);
//     }else {
//         console.log('Doc: ', doc);
//     }
//
//
// })

// getLectures( (err, doc) =>{
//     if(err){
//         console.log('err: ', err);
//     }else {
//         console.log('Doc: ', JSON.stringify(doc));
//     }
// });

    // let lecture = {
    //     'course': 'MWA',
    //     'lecture': 'Node JS - 1'
    // };
    // createLecture( lecture,  ( err, doc ) =>{
    //     if(err){
    //         console.log('err: ', err);
    //     }else {
    //         console.log('Doc: ', JSON.stringify(doc));
    //     }
    // });

let query = {
    'lecture': 'Node JS - 1.1'
};

let newValues = {
    'course': 'MWA',
    'lecture': 'Node JS - 1.1'
};

// updateLecture( query, newValues,  ( err, doc ) =>{
//     if(err){
//         console.log('err: ', err);
//     }else {
//         console.log('Doc: ', JSON.stringify(doc));
//     }
// });

deleteLecture( query,  ( err, doc ) =>{
    if(err){
        console.log('err: ', err);
    }else {
        console.log('Doc: ', JSON.stringify(doc));
    }
});


module.exports =  { 'getLecture':getLecture,
                    'getLectures': getLectures,
                    'createLecture': createLecture,
                    'updateLecture': updateLecture,
                    'deleteLecture': deleteLecture,
                    'search': search};