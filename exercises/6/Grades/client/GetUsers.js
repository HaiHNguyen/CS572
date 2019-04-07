
const superagent = require('superagent');

function getUsers () {
    superagent
        .get('http://localhost:8888/users/')
        .set('accept', 'json')
        .end((err, res) => {
            console.log('User: \n', res.body);
        });
}

getUsers();