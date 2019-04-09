
const superagent = require('superagent');

function getLectures () {
    superagent
        .get('http://localhost:8888/lectures/:lecture')
        .query({'lecture':'Express'})
        .set('accept', 'json')
        .end((err, res) => {
            if(err !== null) {
                console.log(err);
            }else{
                console.log('Lecture received: \n', res.body);

            }
        });
}
getLectures();