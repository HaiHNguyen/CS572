
const superagent = require('superagent');

function updateCourse () {

    let update =
        {
            'course_id': 'cs472',
            'course_name': 'WAP',
            'course_des': 'Web Application Programing',

        }
    console.log('Request Sent: \n', update);
    superagent
        .put('http://localhost:8888/courses')
        .send(update) // sends a JSON post body
        .set('accept', 'json')
        .end((err, res) => {
            if (!err) {
                console.log('Result received: \n', res.body);
            } else {
                console.log(err);
            }
        });
}
updateCourse();