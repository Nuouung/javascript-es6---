// 프로토타입 객체의 속성

// 1. constructor 속성
// 생성자 함수를 가리킨다.
// 연결고리 역할
function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.aaa = function() {console.log('aaa')};

function Animal2(name, age) {
    this.name = name;
    this.age = age;
}

Animal2.prototype.bbb = function() {console.log('bbb')};

let animal1 = new Animal('tiger', 20);

animal1.aaa(); /// aaa

animal1.__proto__ = Animal2.prototype;

// animal1.aaa(); /// 오류남

animal1.bbb(); /// bbb

class Animal3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ccc() { console.log('ccc'); }
}


// ex
function A() {}

const testObject = new A();

const testObject2 = {
    name: '홍길동',
    age: 20
}

console.log(testObject.constructor); // function A() {}
console.log(A.prototype.__proto__); // Object

// testObject 객체가 A로 생성된 것인지 판별 <-- instanceof
// 사용법: [객체명] instanceof [생성자 함수명] <-- 이항연산자

console.log(testObject instanceof A); // true
console.log(testObject2 instanceof A); // false
console.log(testObject2 instanceof Object); // true
console.log(testObject instanceof Object); // true

// instanceof 연산자는 특정 객체가 그 객체와 연결된 프로토타입 체인에 연결되어 있는지 체크하는 방법 중 하나.
// 유사한 메소드 <- isPrototypeOf()

console.log(A.prototype.isPrototypeOf(testObject)); // true