// 자바스크립트 프로토타입 상속

// 자바스크립트는 객체지향 언어인가?
// yes. but 다른 언어와는 달리 프로토타입 상속에 기반을 둔 oop 언어
// class 문법이 지원되기 시작하며 다른 언어와 비슷해짐

// 상속의 필요성
// 가장 큰 목적 = 재사용

// 프로토타입 체이닝
// __proto__ <- 상속을 해준 부모를 가리킴

let object1 = {
    name: '홍길동',
    age: 20,
    sayHello: function() {
        console.log("hello" + this.name);
    }
}

let object2 = {
    name: '이순신'
}

console.log(object2);
// object2의 __proto__는 Object

// 부모를 바꿀 수 있을까? yes
object2.__proto__ = object1;
console.log(object2);
object2.sayHello();

// 상속법. 빈 객체 생성 -> __proto__ 덮어 써 부모 선택
let object3 = {};
object3.__proto__ = object1;
console.log(object3);

console.log(object3.__proto__.hasOwnProperty('name')); // true
console.log(object3.hasOwnProperty('name')); // false