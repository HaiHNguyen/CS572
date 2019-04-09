
const superagent = require('superagent');

function createGrade () {
    let request =  {'id':'', 'name': 'Hai Nguyen','course': 'SE', 'professor': 'Rene de Jong', 'grade':'93'};
    console.log('Request Sent: \n', request);

    superagent
    .post('http://localhost:8888/api/grades/:id')
    .send(request) // sends a JSON post body
    .set('accept', 'json')
    .end((err, res) => {
        if(err !== null) {
            console.log(err);
        }else{
            console.log('Current Courses: \n',  res.body);
        }
    });
}
createGrade();