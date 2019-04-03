

console.log("Filter Words using ES6");

String.prototype.filterWords1 = function(input){
    let words =  this.split(" ");
    words = words.map(x =>input.includes(x)? "***": x);
    return words.join(" ");
}

console.log("This house is nice ! test ....".filterWords1(["house","nice","test"]));



console.log("\nFilter Words using Promises and Async/Await");
String.prototype.filterWords2 = function(input){
    let words =  this.split(" ");

    let promise =  function() {
        return new Promise(resolve => {
            setTimeout(() => {
                let result = words.map(x => { if (input.includes(x)) {return "***";} else { return x; }});
                resolve(result.join(" "));
            }, 1000);
        });
    }


    async function waitForMe(){
        let result = await promise().then(data => console.log("filterWords2 Result: " + data));
        return result;
    }
   return  waitForMe();
}

console.log("This house is nice ! test ....".filterWords2(["house","nice","test"]));


console.log("\n Filter Words using Observable");
const {from}=rxjs;
const {map,reduce}= rxjs.operators;
String.prototype.filterWords3= function(input){
    let words = this.split(" ");
    from(words)
        .pipe(
            map((x)=>input.includes(x)?"***":x),
            reduce((acc, x) => acc +" "+ x)
        )
        .subscribe(
            (x)=>console.log("filterWords3 Result: " + x)
        )
}
console.log("This house is nice. test....".filterWords3(["house","nice","test"]));
