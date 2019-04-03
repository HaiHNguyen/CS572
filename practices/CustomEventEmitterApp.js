

let myEmitter =  require('./CustomEventEmitter');
let cusEmiter = new myEmitter();

cusEmiter.on ("Hi", function (){
    console.log("Hi from custom Emitter");
})

cusEmiter.on ("Hello", function (){
    console.log("Hello from custom Emitter");
})

console.log("Hi Event");
cusEmiter.emit('Hi');

console.log("Hello Event");
cusEmiter.emit('Hello');


