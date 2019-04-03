
Array.prototype.even=function(){
    setImmediate(() => {
        let arr = (this.filter(x => x%2 == 0));
        console.log(arr);
    })

}

Array.prototype.odd=function(){
    setImmediate(() => {
        let arr = (this.filter(x => x%2 != 0));
        console.log(arr);
    })
}


console.log("Start");
[1,2,3,4,5,6,7,8,9,10].even();
[1,2,3,4,5,6,7,8,9,10].odd();
console.log("End");
