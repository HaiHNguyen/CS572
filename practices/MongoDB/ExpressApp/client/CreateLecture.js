
const superagent = require('superagent');

function createLecture() {
    let request =  {'course':'mwa', 'lecture': 'Java Script'};
    console.log('Request Sent: \n', request);
    superagent
    .post('http://localhost:8888/lectures/:lecture')
    .query(request) // sends a JSON post body
    .set('accept', 'json')
    .end((err, res) => {
        if(err !== null) {
            console.log(err);
        }else{
            console.log('Result received: \n',  res.body);
        }
    });
}
createLecture();