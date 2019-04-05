
const os = require('os');
let isSystemQualified = true;

const freeMem = os.freemem();
const gbMem =  Math.round(freeMem/ 1024/ 1024 / 1024 * 100) / 100;
if(gbMem < 4){
    console.log('Memory you have ', gbMem);
    console.log('The app needs at least 4 GB of RAM!');
    isSystemQualified = false;
}

const cpus = os.cpus();
const noCPUs =  cpus.length;
if( noCPUs < 2){
    console.log('Processors you have ', noCPUs);
    console.log('Processor is not supported!');
    isSystemQualified = false;
}
if(isSystemQualified)
{
    console.log('System is checked successfully :-)!');
    console.log('\tYou have ', gbMem, 'GB of RAM');
    console.log('\tYou have ', noCPUs, 'CPU cores');
}