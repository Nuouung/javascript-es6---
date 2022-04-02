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