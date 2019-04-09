
const superagent = require('superagent');

function getLectures () {
    superagent
        .get('http://localhost:8888/lectures')
        .send({})
        .set('accept', 'json')
        .end((err, res) => {
            if(err !== null) {
                console.log(err);
            }else{
                console.log('Current Lectures: \n', res.body);
            }
        });
}
getLectures();