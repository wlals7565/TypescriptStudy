"use strict";
var twodotfive;
(function (twodotfive) {
    let a = "dasd";
    const date = new Date();
    const math = Math;
    const str = "hello";
    function add(x, y) { return x + y; }
    //const add2: add = (x: number, y: number) => x + y; add는 타입으로 못 쓴다.
    const add2 = (x, y) => x + y;
    class Person {
        name;
        constructor(name) {
            this.name = name;
        }
    }
    const person = new Person('zero'); //클래스는 typeof 없이 타입으로 쓸 수 있다.
})(twodotfive || (twodotfive = {}));
