
const superagent = require('superagent');

function getGrade () {
    superagent
        .get('http://localhost:8888/api/grades/:id')
        .query({'id': 2 })
        .set('accept', 'json')
        .end((err, res) => {
            if(err !== null) {
                console.log(err);
            }else{
                console.log('Course received: \n', res.body);
                console.log(res.headers);
            }
        });
}
getGrade();