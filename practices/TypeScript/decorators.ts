
function logClass(target: any) {
    var originalClass = target;

    // a utility function to generate instances of a class
    function construct(constructor, args) {
        var classInst : any = function () {
            return constructor.apply(this, args);
        }
        classInst.prototype = constructor.prototype;
        return new classInst();
    }

    // the new constructor behaviour
    var f : any = function (...args) {
        console.log("New: " + originalClass.name);
        return construct(originalClass, args);
    }

    // copy prototype so intanceof operator still works
    f.prototype = originalClass.prototype;

    // return new constructor (will override originalClass)
    return f;
}


class Person {
    private _name: string;
    private _surname: string;

    get name():string{
        return this._name;
    }
    set name(name: string){
        this._name = name;
    }

    get surname(): string{
        return this._surname;
    }

    set surname(surname: string){
        this._surname = surname;
    }


    constructor(name : string, surname : string) {
        this._name = name;
        this._surname = surname;
    }

    public print():void{
        console.log(this.name  + " " + this.surname)
    }
}

let person: Person = new Person('Hai', 'Nguyen');
person.print();
