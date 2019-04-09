
const superagent = require('superagent');

function deleteLecture () {
    let request =  {'course':'MWA', 'lecture': 'MongoDB'};
    console.log('Request Sent: \n', request);
        superagent
        .delete('http://localhost:8888/lectures/:lecture')
        .query(request) // sends a JSON post body
        .set('accept', 'json')
        .end((err, res) => {
            if(err !== null) {
                console.log(err);
            }else{
                console.log('Current Courses: \n', res.body);
            }
        });
}
deleteLecture();