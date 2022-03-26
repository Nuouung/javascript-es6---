// symbol 타입이란?
// ES6에서 새로 도입된 원시형 타입
// 객체의 속성으로 사용
// 상징. 유일무이한 고유한 값을 가진다
// 변경 불가능한 불변값

// JS 타입: 원시형 참조형
//      1. 원시형 - Number, String, Null, Undefined, Boolean, Symbol(ES6)
//      2. 참조형 - Object(object, function, array, ...)

// 왜 객체의 속성으로 심볼을 사용하지?
// 충돌을 방지하기 위해

// ex) 배열 객체를 만들어서 'array.length'를 덮어써지면 덮어 써짐
// 이때, 배열의 길이는 유지하면서 같은 이름의 length 속성을 추가할 때 심볼을 사용할 수 있음
let array = [1, 2, 3, 4, 5];
console.log(array.length); // 5 
// length는 array에 내장된 '속성'

array.length = 500; // 속성값을 바꿀 수 
console.log("바꾼 이후");
console.log(array.length); // 500

// 심볼 사용 경우
let array2 = [1, 2, 3, 4, 5];
const length = Symbol('length');
array2[length] = 500; // array2의 length값을 index로 가진 녀석이 500의 값을 가짐
// 의문. 왜 이렇게 쓰지?

// 객체의 속성을 추가할 때 symbol을 쓰면 유용하겠군!