
const superagent = require('superagent');

function createCourse() {

    let user = [
        {
            'use_id': 'samirshrestha',
            'password': 'password',
            'first_name': 'Samir',
            'last_name': 'Shrestha'
        },
        {
            'use_id': 'AsaadSaad',
            'password': 'password',
            'first_name': 'Asaad',
            'last_name': 'Saad'
        }];

    let lectures = [
        {name: 'Lecture 1', des: 'Lecture Description 1'},
        {name: 'Lecture 2', des: 'Lecture Description 2'},
        {name: 'Lecture 3', des: 'Lecture Description 3'},
        {name: 'Lecture 4', des: 'Lecture Description 4'},
    ];
    let courses = [
        {
            'course_id': 'cs572',
            'course_name': 'WAP',
            'course_des': 'Modern Web Application',
            'created_at': new Date(),
            'updated_at': new Date(),
            'professor': user[1],
            'lectures': lectures,
        },
        {
            'course_id': 'cs472',
            'course_name': 'MWA',
            'course_des': 'Web Application Programing',
            'created_at': new Date(),
            'updated_at': new Date(),
            'professor': user[1],
            'lectures': lectures,
        }]

    console.log('Request Sent: \n', courses[0]);
    superagent
    .post('http://localhost:8888/courses')
    .send(courses[0]) // sends a JSON post body
    .set('accept', 'json')
    .end((err, res) => {
        if(!err) {
            console.log('Result received: \n',  res.body);
        }else{
            console.log(err);
        }
    });
}
createCourse();