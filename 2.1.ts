//변수 이름 바로 뒤에 콜론과 함께 타입을 표기한다
const str:string = "hello";
const num:number = 123
const bool:boolean = false;
const n: null = null;
const u: undefined = undefined;
const sym: symbol = Symbol('sym');
const big: bigint = 10000000000000n;
const obj: object = { hello: 'world'};
//함수에서
export function plus (x: number, y: number): number {
  //타입스크립트가 타입을 제대로 추론하면 그대로 쓰고, 틀리게 추론할 때만 올바른 타입을 표기한다.
  return x+y;
}

export const minus = (x: number, y:number): number => x-y;

