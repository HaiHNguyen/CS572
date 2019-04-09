
const superagent = require('superagent');

function deleteGrade () {
    let request =  {'id':'2', 'name': '','course': '', 'professor': '', 'grade':''};
    console.log('Request Sent: \n', request);
        superagent
        .delete('http://localhost:8888/api/grades/:id')
        .send(request) // sends a JSON post body
        .set('accept', 'json')
        .end((err, res) => {
            if(err !== null) {
                console.log(err);
            }else{
                console.log('Current Courses: \n', res.body);
            }
        });
}
deleteGrade();