
const EventEmitter = require('events');

class Gym extends EventEmitter{

    constructor(){
        super();
    }
    boom(){
        setInterval( ()=>{this.emit('Boom');}, 1000 );
   }
}

//Register to the event
const gym = new Gym();
gym.on('Boom', ()=> console.log('Athlete is working out!'));

//emit
gym.boom();