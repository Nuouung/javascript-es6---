// set 생성시 추가와 spread 연산자


// [1] 생성시 추가
let mySet = new Set().add("A").add("B");

// [2] 출력 spread

let testArray = ["K", "O", "R", "E", "A"];
console.log(...testArray); // K O R E A
// 위에께 spread 연산자

console.log([...testArray]); // ["K", "O", "R", "E", "A"]
console.log([..."hello", ..."world"]) // "h", "e", "l", ..., "w", "o", "l", ...

// set도 해보자
console.log("아래는 set");
console.log(...mySet);