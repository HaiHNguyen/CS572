const path = require('path');
const fs = require('fs');

function streaming(filePath){

    const readableStream = fs.createReadStream(filePath,{encoding: 'utf8', highWaterMark: 16 * 1024});
    readableStream.on('data', function (chunk) {
        //send data to main process
        process.send(chunk);
    });

    readableStream.on('end', function () {
        console.log("I am done reading the file");
        endProcess('done');
    });
}

process.on('message', (fileName) => {

    const filePath =  path.join(__dirname, fileName);
    console.log("Request received: ", filePath);
    try {
        if (!fs.existsSync(filePath)) {
            console.log(filePath, ' does not exist!');

            endProcess('error');
            // process.send('invalid');
            // setTimeout(()=>{
            //     process.exit(0);
            // }, 1000);
        } else {
            streaming(filePath);
        }
    }catch(error){
        console.log('Server Error: ', error)
    }
});

function endProcess( message){

    process.send(message);
    setTimeout(()=>{
        process.exit(0);
    }, 1000);

}
