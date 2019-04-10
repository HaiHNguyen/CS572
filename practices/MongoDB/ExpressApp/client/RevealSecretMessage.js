
const superagent = require('superagent');

function encrypt () {


    console.log('do encrypt');
    superagent
        .get('http://localhost:8888/secret')
        .send({})
        .set('accept', 'json')
        .end((err, res) => {
            if(err !== null) {
                console.log(err);
            }else{
                console.log('Message received: \n', res.body);

            }
        });
}
encrypt();