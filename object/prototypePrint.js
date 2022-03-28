// 객체의 프로토타입 출력

// __proto__ vs Object.getPrototypeOf()
function A() {}
let object1 = new A();

console.log(object1.__proto__); // A()
console.log(Object.getPrototypeOf(object1));

// 2번째
function B() {}
let object2 = new B();

console.log(object2.__proto__ === Object.getPrototypeOf(object2)); // true