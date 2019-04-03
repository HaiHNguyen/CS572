
const EventEmitter = require('events');

class ExtendedEmitter  extends EventEmitter{
   constructor(){
       super();
   }
   change(){
       console.log('changed');
       this.emit('Change');
   }

}

function handleChange( ){
    console.log("There is change made");
}

let eventEmitter = new ExtendedEmitter();
eventEmitter.on('Change', handleChange);

eventEmitter.change();