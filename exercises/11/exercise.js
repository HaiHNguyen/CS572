var University = /** @class */ (function () {
    function University(name, dept) {
        this._name = name;
        this._dept = dept;
    }
    Object.defineProperty(University.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(University.prototype, "dept", {
        get: function () {
            return this._dept;
        },
        set: function (dept) {
            this._dept = dept;
        },
        enumerable: true,
        configurable: true
    });
    University.prototype.graduation = function (year) {
        console.log('Graduating ' + this.dept + ' ' + year + ' students');
    };
    return University;
}());
var mum = new University('MUM', 'Computer Science');
mum.graduation(2019);
