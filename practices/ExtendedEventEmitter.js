
const EventEmitter = require('events');

class ExtendedEmitter  extends EventEmitter{
    constructor(){
        super();
    }

    change(){
        console.log('changed');
        this.emit('Change', 'this is change made');
    }

}

function handleChange( data){
    console.log(data);
}

let eventEmitter = new ExtendedEmitter();
eventEmitter.on('Change', handleChange);

eventEmitter.change();
