namespace twodotfive {
  let a:string = "dasd"
  const date: Date = new Date();
  const math: Math = Math;
  const str: String = "hello"
  function add(x: number, y: number) {return x+y}
  //const add2: add = (x: number, y: number) => x + y; add는 타입으로 못 쓴다.
  const add2: typeof add = (x:number, y:number) => x+y

  class Person {
    name: string;
    constructor(name: string){
      this.name = name
    }
  }
  const person: Person = new Person('zero');//클래스는 typeof 없이 타입으로 쓸 수 있다.
}