

let myEmitter =  require('./CustomEventEmitter');
let cusEmitter = new myEmitter();

cusEmitter.on ("Hi", function (){
    console.log("Hi from custom Emitter");
});

cusEmitter.on ("Hello", function (){
    console.log("Hello from custom Emitter");
});

console.log("Hi Event");
cusEmitter.emit('Hi');

console.log("Hello Event");
cusEmitter.emit('Hello');


