
const {Subject} = require('rxjs');
const {Url} = require('url');
const { fork } = require('child_process');

const subject = new Subject();
function handleRequest(reqResp){
    const url = new Url();
    const queryString =  JSON.parse(JSON.stringify(url.parse(reqResp.req.url, true).query));
    if(Object.keys(queryString).length !== 0) {

        reqResp.resp.writeHead('200', {'Content-Type': 'text/html'});
        reqResp.resp.write("<p>Request processing...</p>");

        const fileName = queryString['file'];
        if(fileName != undefined) {
            const readingFile = fork('ReadFile.js');
            //send fine name to child process
            readingFile.send(fileName);

            //Listen to message from child process
            readingFile.on('message', data => {
                //File does not exist
                if(data == 'error'){
                    reqResp.resp.write('<p>File does not exist!.</p>');
                    reqResp.resp.end();
                }else {
                    console.log("data received!");
                    if (data == 'done') {
                        console.log("I am done receiving the file");
                        reqResp.resp.write("<p>Data received successfully.</p>");
                        reqResp.resp.end();
                    } else {
                        reqResp.resp.write(data);
                    }
                }
            })

            //listen to exit event of child process.
            readingFile.on('exit', (code)=>{
                console.log("Reading file process exited with code: ", code);
            })

        }else{
            reqResp.resp.write("<p>Invalid URL.</p>");
            reqResp.resp.end();
        }
    }
}
subject.subscribe(handleRequest);

const http = require('http');
http.createServer((req, resp) =>{
    subject.next({'req': req, 'resp': resp})
    }).listen(8888, ()=>console.log('Server started and listening on port 8888!'));
