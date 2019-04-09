
const superagent = require('superagent');

function updateLecture (id) {

    let request =  {'course':'MWA', 'lecture': 'Java Script','new_lecture': 'Java Script/Node JS'};
    console.log('Request Sent: \n', request);
    superagent
        .put('http://localhost:8888/lectures/:lecture')
        .query(request) // sends a JSON post body
        .set('accept', 'json')
        .end((err, res) => {
            if(err !== null) {
                console.log(err);
            }else{
                console.log('Result received: \n', res.body);
            }
        });
}
updateLecture();