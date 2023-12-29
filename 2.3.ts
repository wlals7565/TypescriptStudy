//리터럴 타입
let str: "hello" = "hello";
//str = "world"; 에러 str타입은 "hello"여서 "world"대입 못 함.

const obj: {name: "zero"} = { name: "zero"};
const arr: [1,3, "five"] = [1,3,'five'];
const func: (amount: number, unit: string) => string = (amount, unit) => amount+unit;
//리터럴 타입의 추론은 생각보다 부정확하다.
const obj1 = { name: "zero"};
const arr1 = [1,3,'five'];
//as const접미사로 해결가능
const obj2 = { name: "zero"}as const;
const arr2 = [1,3,'five']as const;