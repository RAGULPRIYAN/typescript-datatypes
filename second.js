"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var engine_1 = require("./engine");
// class Greater{
//     greeting:string;
//     constructor (message:string){
//        this.greeting=message;
//     }
//     greet(){
//        return "hello,"+this.greeting;
//     }
//   }
// (or) this two methods is same
var Greater = /** @class */ (function () {
    function Greater(greeting) {
        this.greeting = greeting;
    }
    Greater.prototype.class1 = function () {
        return "hello " + this.greeting;
    };
    return Greater;
}());
var w = new Greater("message");
console.log(w.class1());
var Car0 = /** @class */ (function () {
    function Car0(engine) {
        this.engine = engine;
    }
    return Car0;
}());
// this refers to the caller
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    return Car;
}());
var c = new Car("audi");
console.log(c);
var car = /** @class */ (function () {
    function car(engine) {
        this.engine = engine;
    }
    // engine : string;
    // constructor(engine:string){
    //     this.engine=engine;
    // }
    car.prototype.start = function () {
        return "started " + this.engine;
    };
    car.prototype.stop = function () {
        return "stopped" + this.engine;
    };
    return car;
}());
var d1 = new car("audi");
console.log(d1.start());
var Car1 = /** @class */ (function () {
    // private _engine:string;
    function Car1(_engine) {
        this._engine = _engine;
        // this.engine =_engine;
        // console.log(this.engine);
    }
    Object.defineProperty(Car1.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'supply an engine!';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Car1;
}());
var d = new Car1("audi");
console.log(d.engine);
//
// class Engine{
//     constructor(public power:number,public name:string){
//     } 
// }
var Auto = /** @class */ (function () {
    function Auto(engine) {
        this.engine = engine;
    }
    return Auto;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(engine, fourByFour) {
        var _this = _super.call(this, engine) || this;
        _this.fourByFour = fourByFour;
        return _this;
    }
    return Truck;
}(Auto));
var e = new engine_1.Engine(200, 'vg');
var t = new Truck(e, true);
console.log(t);
var Cars = /** @class */ (function () {
    function Cars(engine) {
        this.engine = engine;
    }
    Cars.prototype.start = function (message) {
        console.log(this.engine + message);
    };
    Cars.prototype.stop = function (message) {
        console.log(this.engine + message);
    };
    return Cars;
}());
var p = new Cars('v8');
p.start('started');
var deptid;
(function (deptid) {
    deptid[deptid["mech"] = 0] = "mech";
    deptid[deptid["cse"] = 1] = "cse";
    deptid[deptid["it"] = 2] = "it";
    deptid[deptid["eee"] = 3] = "eee";
})(deptid || (deptid = {}));
var student = /** @class */ (function () {
    function student(name, age, deptid) {
        this.name = name;
        this.age = age;
        this.deptid = deptid;
    }
    return student;
}());
var s1 = new student('RAM', 20, deptid.cse);
console.log(s1);
console.log(deptid.cse);
var myfun = function (obj) {
    return __assign(__assign({}, obj), { greet: 'hii', gender: 'male' });
};
var a = { name: 'raja',
    age: 20 };
// console.log(myfun(a.name))
var b1 = myfun(a);
console.log(b1.name);
///
var a1 = [1, 2, 3];
var b = ['a', 'b', 'c', 'vignesh'];
var myfun1 = function (a1) {
    return [a1];
};
var vars = myfun1(1);
console.log(vars);
///
var reverseArray = function (array) {
    return array.reverse();
};
var numbers = [1, 2, 3, 4, 5];
var reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers); // [5, 4, 3, 2, 1]
var strings = ['apple', 'banana', 'cherry'];
var reversedStrings = reverseArray(strings);
console.log(reversedStrings); // ['cherry', 'banana', 'apple']
var boolean = [true, false];
var reversedbooleans = reverseArray(boolean);
console.log(reversedbooleans);
var bike = /** @class */ (function () {
    function bike(quality) {
        this.quality = quality;
        // Implement the properties of the interface
        this.a = 0;
        this.b = 0;
        this.data = 0;
        this.data1 = "";
    }
    return bike;
}());
var a13 = new bike(1);
console.log(a13);
