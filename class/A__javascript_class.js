// 1. 자바스크립트의 클래스 지원
// 기존에는 자바스크립트에 클래스 문법이 존재하지 않았다.
// 그래도 프로토타입 체인으로 객체 지향 언어의 상속과 캡슐화 등 oop 문법을 구현할 수 있었다.
// 따라서 자바스크립트 언어는 클래스가 필요 없는 프로토타입 기반의 객체지향언어

// 2. 왜 클래스를 지원하게 되었을까?
// 프로토타입 기반의 oop 문법이 너무 어렵고 생소하다.

// 3. es5, es6 이후 자바스크립트도 클래스 문법을 지원하게 됨
// but 프로토타입 기반의 oop 문법이 없어지고 새로운 클래스 문법을 지원하는 것은 아님

// 4. 클래스를 선언해보고 객체를 생성해보자

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    testHello() {
        console.log(`안녕하세요~ ${this.name}(${this.age}) 회원님~ ^_^;;`)
    }
}

const person1 = new Person('홍길동', 20);
console.log(person1.name); // 홍길동
console.log(person1.age); // 20
person1.testHello(); // 안녕하세요~ 홍길동(20) 회원님~ ^_^;;

console.log(person1 instanceof Person);