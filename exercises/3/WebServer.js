

const myserver = require('http');
const path = require('path');
const fs = require('fs');


myserver.createServer((res,resp)=>{

    try {
        //1. Read file sync
        //readFileSync(res, resp);

        //2. read file async
        // readFileAsyn(res,resp);

        //3. Streaming
        //streaming(res,resp);

        //4. Streaming and Pipe
        streamingAndPipe(res,resp);

    }catch(error){
        console.log("Server Error: ", error);
    }


}).listen(8888, ()=>console.log('Server started and listening on port 8888!'))


function readFileSync( req, resp){

    // const data =  fs.readFileSync(path.join(__dirname, 'WebServerNote.txt'), 'utf8');
    const content =  fs.readFileSync(path.join(__dirname, 'hsacFitnesseClean.zip'), 'utf8');
    resp.writeHead('200', {'Content-Type':'text/html'});
    resp.write(content);
    resp.end();
}

function readFileAsyn(req, resp){

    fs.readFile(path.join(__dirname, 'hsacFitnesseClean.zip'), 'utf8', function(error, content){
        if(error){
            console.log("Server Error: ", error);
        }else{
            resp.writeHead('200', {'Content-Type':'text/html'});
            resp.write(content);
            resp.end();
        }
    });


}
function streaming(req, resp){

    const readableStream =  fs.createReadStream(path.join(__dirname, 'hsacFitnesseClean.zip'),
                                        {encoding:'utf8', highWaterMark:16*1024});
    readableStream.on('data', function (chunk){
                                                    resp.write(chunk);
                                                });

    readableStream.on('end', function (){
                                                 resp.end();
                                                });
}

function streamingAndPipe(req, resp){
    fs.createReadStream(path.join(__dirname, 'hsacFitnesseClean.zip')).pipe(resp);
 }