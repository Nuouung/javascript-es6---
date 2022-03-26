// Prototype이란?
// 자바스크립트 공부 중 흔히 듣게 되는 용어
// 자바스크립트는 프로토타입 기반의 언어 <- 이를 기반으로 확장과 재사용성을 높임
// 사전적 의미: 원형

// 쉽게 말해 자바스크립트는 객체의 원형을 가지고 새로운 객체를 생성해가는 프로그래밍 방식

// prototype vs class
// 지금은 자바스크립트도 class를 문법적으로 지원하지만 원래 자바스크립트는 프로토타입 기반의 언어
// 그래서 원래 프로토타입을 이용해서 객체의 확장, 재사용, 상속 등을 구현했었음

// 프로토타입 객체는 new 연산자에 의해 생성된 객체 <- 공유 프로퍼티, 메소드 등을 제공하기 위해 사용됨
// 프로토타입은 부모? 최상위 부모?

// ex)
const fruit = {name: 'apple'};
console.log(fruit.name);

// 속성 추가
fruit.expiration = '20241231';
console.log(fruit.expiration);

// 속성이 있는지 없는지 체크 hasOwnProperty()
console.log(fruit.hasOwnProperty('expiration')); // true;
console.log(fruit.hasOwnProperty('country')); // false;

// hasOwnProperty는 Prototype꺼

const emptyObject = {};
console.log(emptyObject); // 비어 있어도 __proto__가 있음.

// override <- hasOwnProperty를 override 해보자
const fruit2 = {
    name: 'apple',
    hasOwnProperty: function() {console.log("안녕?")}
};

fruit2.hasOwnProperty(); // 안녕?