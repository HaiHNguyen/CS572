

const {promisify} = require('util');
const path = require('path');
const fs = require('fs');
const readFileAsync =  promisify(fs.readFile);
async function main(){
    try{
        const filePath =  path.join(__dirname, 'SWE-Project.pptx');
        const data = await readFileAsync(filePath);
        console.log('File read successfully!');
        console.log('File content: !', data);

    }catch(err){
        console.log('ERROR: ', err);
    }
}

main();