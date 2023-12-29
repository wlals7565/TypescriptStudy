"use strict";
const array1 = ["1", "2", "3"];
const array2 = [1, 2, 3];
//array1.push(4)
const array3 = [1, 3, 5];
const array4 = [1, '3', 5];
const arr5 = [];
//튜플
const tuple = [1, false, 'hi'];
tuple[0] = 3;
//tuple[2] = 5; 에러
//tuple[3] = 'no' 에러
tuple.push(123456); //push() , pop(), unshift(), shift() 함수를 쓸 수 있지만 접근이 불가능해 쓸 이유가 없음.
const rotuple = [1, false, 'hi'];
//rotuple.push(123456) readonly를 붙이면 push() , pop(), unshift(), shift() 함수를 쓸 수 없다.
//튜플은 타입이 고정되어 있는 것이다. 길이가 고정된 것이 아니다.
// 전개 연산자를 통해 연달아 나오는 값임을 표시
const strNumBools = ["hi", 123, false, true, false];
const strNumsBool = ["hi", 123, 4, 56, false];
const strsNumBool = ["hi", "hello", "wow", 123, false];
console.log(strsNumBool);
const arrs1 = ['hi', true];
const arrs = [46, ...arrs1];
const [aval, ...rest1] = ['hi', 1, 23, 456];
const [bval, ...rest2] = ["hi", 1, 23, 456];
let tupleoptional = [1, false, 'hi'];
tupleoptional = [3, true];
tupleoptional = [5];
//tupleoptional = [7, 'no'] 에러
