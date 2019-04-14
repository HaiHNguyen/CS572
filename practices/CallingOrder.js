
var fs = require('fs');

(()=> new Promise((resolve) => resolve('promise')))()
            .then((p) =>fs.readFile("", () =>
            {
                console.log('read');
                setTimeout(()=>console.log('Timeout'), 0);
            }));




setImmediate(()=>console.log('Immediate'));

queueMicrotask(()=>console.log('MicroTask'));

process.nextTick(()=>console.log('process.nextTick'));