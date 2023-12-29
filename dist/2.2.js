"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2_1_1 = require("./2.1");
//타입스크립트의 추론이 더 정확한 추론이다. 그러나 잘못 추론할 때도 있다.
//리터럴 타입: 타입에 값 자체를 넣을 수 있다.
const str = "hello";
const num = 123;
const bool = false;
const n = null;
const u = undefined;
const sym = Symbol('sym');
const big = 10000000000000n;
const obj = { hello: 'world' };
const str3 = 'hello'; //타입스크립트에서 {}는 null과 undefined를 제외한 모든 타입을 말한다.
//let키워드 변수는 const키워드 변수보다 넓게 추론한다.
let lstr = "hello";
let lnum = 123;
let lbool = false;
let ln = null;
let lu = undefined;
let lsym = Symbol('sym');
let lbig = 10000000000000n;
let lobj = { hello: 'world' };
let lstr3 = 'hello'; //타입스크립트에서 {}는 null과 undefined를 제외한 모든 타입을 말한다.
const result1 = (0, _2_1_1.plus)(1, 2);
const rueslt2 = (0, _2_1_1.plus)(1, 2);
const sym1 = Symbol.for('sym');
const sym2 = Symbol.for('sym');
let sym3 = Symbol.for('sym');
let sym4 = Symbol.for('sym');
//if(sym1 === sym2) {} const키워드로 선언한 Symbol변수 끼리는 비교가 불가능
if (sym3 === sym4) { }
if (sym2 === sym3) { }
//@ts-ignore @ts-expect-error 주석에 대해 알자
