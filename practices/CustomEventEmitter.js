

function MyEmitter(){
    this.events = {};
}

MyEmitter.prototype.on =  function (type, listener){

    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};

MyEmitter.prototype.emit = function (type){
    if(this.events[type]){
        this.events[type].forEach( function (listener){
            listener();
        });
    }
};

module.exports = MyEmitter;
