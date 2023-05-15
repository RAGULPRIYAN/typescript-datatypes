"use strict";
exports.__esModule = true;
var message = "hii welcome";
console.log(message);
var a = 123;
a = 1;
a = "hii";
var b = 1.2;
b = 12;
var c = "hello";
var d = true;
var e = null;
var f;
var arr = [2, 4, 6, 8, 10];
var arrstr = ["ragul"];
var multitype;
multitype = 1;
multitype = "ragul";
var obj = {
    name: "ragul",
    age: 24
};
obj.age = 1;
obj.name = "ragul";
function myFunction(a, b) {
    return a + b;
}
function myFunction1(a) {
    return a.toLowerCase();
}
function myFunction2(a, b) {
    if (b)
        return a.toLowerCase() + b;
    return a.toLowerCase();
}
console.log(myFunction2('hii'));
function myFunction3(a, b) {
    if (b === void 0) { b = "DED"; }
    // if(b)
    return a.toLowerCase() + b;
    // return a.toLowerCase();
}
console.log(myFunction3('hii'));
//////
function adding(point) {
    return point.x + point.y;
}
var p = { x: 11, y: 1
};
console.log(adding(p));
///
function adding2(point) {
    return point.x + point.y;
}
console.log(adding2(p));
