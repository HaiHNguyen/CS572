
const superagent = require('superagent');

function getGrades (id) {
    superagent
        .get('http://localhost:8888/api/grades/')
        .send({'id': id}) // sends a JSON post body
        .set('accept', 'json')
        .end((err, res) => {
            if(err !== null) {
                console.log(err);
            }else{
                console.log('Current Courses: \n', res.body);
            }
        });
}
getGrades();