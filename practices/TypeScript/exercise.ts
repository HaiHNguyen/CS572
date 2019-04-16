

class University{
    private _name:String;
    private _dept:String;
    constructor ( name: String, dept: String){
        this._name = name;
        this._dept = dept;
    }
    get name(): String{
        return this._name;
    }
    set name( name: String){
        this._name =  name;
    }

    get dept(): String {
        return this._dept;
    }
    set dept( dept: String){
        this._dept =  dept;
    }

    public graduation(year: number)
    {
        console.log('Graduating ' + this.dept + ' ' + year + ' students');

    }
}

const mum = new University('MUM', 'Computer Science');
mum.graduation(2019);