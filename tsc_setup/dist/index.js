"use strict";
var _a;
console.log("ss");
let salesman = "gopinath";
let mark = 20;
let is_verified = true;
let any;
let salesmans;
let marks;
salesmans = "ss";
marks = 11;
console.log(salesman);
console.log(mark);
console.log(salesmans);
console.log(marks);
let list = [1, 1];
list[3] = 2;
let listUser = ["ss", "sss", "ssss"];
let user = [1, "s"];
console.log(user);
let users = [1, "ss", true, 1];
console.log(users);
let ac = 1;
console.log(ac);
function sample1() {
    console.log("just print no return");
}
sample1();
function sample2(text) {
    console.log(text);
}
sample2("hi how are u");
function sample3(text, val = 5) {
    if (val === 5)
        return text;
    return "no value";
}
console.log(sample3("hi"));
function sample4() {
    return [1, "ssss"];
}
console.log(sample4());
console.log(sample4()[0]);
let emp = { id: 1, name: "ss" };
console.log(emp);
let emp1 = { id: 1, name: "ss" };
let emp3 = { id: 1, name: "ss" };
console.log(emp3);
function w(weight) {
    if (typeof weight == "number")
        return weight;
    else
        return parseInt(weight);
}
console.log(w(11));
console.log(w("11"));
let s = 50;
let m = "cm";
function tt(v) {
    console.log(v);
}
tt(null);
function tts() {
    return true ? null : { birthday: new Date() };
}
console.log((_a = tts()) === null || _a === void 0 ? void 0 : _a.birthday);
