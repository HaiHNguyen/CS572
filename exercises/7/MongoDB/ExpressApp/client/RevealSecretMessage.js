
const superagent = require('superagent');

function getGrade () {
    superagent
        .get('http://localhost:8888/api/secret')
        .set('accept', 'json')
        .end((err, res) => {
            if(err !== null) {
                console.log(err);
            }else{
                console.log('Message received: \n', res.body);
                console.log(res.headers);
            }
        });
}
getGrade();