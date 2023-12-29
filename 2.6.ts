namespace twodotsix {
  let strOrNum: string | number = "hello";
  strOrNum = 123
  const arr4 = [1,"3", 5]
  function returnNumber(value: string|number): number {
    if(typeof value == "string"){
      return parseInt(value);
    }
    return value
  }

}