
const os = require('os');
const {Subject} = require('rxjs');


const freeMem = os.freemem();
const cpus = os.cpus();
const noCPUs = cpus.length;
const gbMem = Math.round(freeMem/ 1024/ 1024 / 1024 * 100) / 100;

const subject = new Subject();
//event1
subject.subscribe((dCtC) => {
    if(dCtC[0] < 4)
    {
        console.log('Memory in GB you have ', dCtC[0]);
        console.log('The app needs at lest 4 GB of RAM!');
    }
});
//event2
subject.subscribe((dCtC) => {
    if( dCtC[1] < 2)
    {
        console.log('Processors you have ', dCtC[1]);
        console.log('Processor is not supported!');
    }

});
//event3
subject.subscribe((dCtC) => {
    if(dCtC[0] >= 4 && dCtC[1] >= 2)
    {
        console.log('System is checked successfully :-)!');
        console.log('\tYou have ', dCtC[0], 'GB of RAM');
        console.log('\tYou have ', dCtC[1], 'CPU cores');
    }
});
const dCtC = [gbMem, noCPUs]; // pCss the vClues Cs CrrCy
subject.next(dCtC);
