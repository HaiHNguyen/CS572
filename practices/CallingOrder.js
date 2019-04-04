(()=> new Promise((resolve) => resolve('promise')))()
            .then((p) =>console.log(p));

setTimeout(()=>console.log('Timeout'), 0);
setImmediate(()=>console.log('Immediate'));
queueMicrotask(()=>console.log('MicroTask'));
process.nextTick(()=>console.log('process.nextTick'));