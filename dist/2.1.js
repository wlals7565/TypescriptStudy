"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minus = exports.plus = void 0;
//변수 이름 바로 뒤에 콜론과 함께 타입을 표기한다
const str = "hello";
const num = 123;
const bool = false;
const n = null;
const u = undefined;
const sym = Symbol('sym');
const big = 10000000000000n;
const obj = { hello: 'world' };
//함수에서
function plus(x, y) {
    //타입스크립트가 타입을 제대로 추론하면 그대로 쓰고, 틀리게 추론할 때만 올바른 타입을 표기한다.
    return x + y;
}
exports.plus = plus;
const minus = (x, y) => x - y;
exports.minus = minus;
