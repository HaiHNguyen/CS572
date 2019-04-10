
const superagent = require('superagent');

function searchLectures () {
    let request =  {'keyword':'Java'};
    console.log('Request Sent: \n', request);
    superagent
        .get('http://localhost:8888/lectures/search/:q')
        .query(request)
        .set('accept', 'json')
        .end((err, res) => {
            if(err !== null) {
                console.log(err);
            }else{
                console.log('Lectures found: \n', res.body);
            }
        });
}
searchLectures();