// 자바스크립트 함수의 내부와 객체간의 관계

// 함수가 만들어지고 수행이 되면 내부에서는
// 1. 함수 자신과 자신과 같은 이름의 '프로토타입 객체'가 생성됨
// ex) Animal 함수 -> Animal 프로토타입 객체가 생성됨
// 2. 함수의 멤버로 prototype 속성이 생성됨 -> 다른 곳에 생성된 같은 함수 이름의 프로토타입 객체를 가리킴(참조)
// 함수는 자바의 메소드와 많이 다른 느낌! 함수가 클래스랑 비슷한 느낌이네...
// 함수를 이용해서 객체를 만든다? 함수 안에 메소드가 들어간다? 클래스잖아..?

function Animal() {}; // 생성자 함수라는 표현을 쓰네

// Animal 함수                                     Animal 프로토타입 객체
// + prototype --> Animal 프로토타입 객체 참조    
//                           Animal 함수 참조 <-- + constructor
// 메소드 추가시 -> Animal 프로토타입 객체로 이동

// 위와 같은 상황일 때 'Animal 프로토타입 객체'는 생성자 함수와 new 연산자를 통해 만들어내는 모든 객체의 원형이 되는 객체

let tiger = new Animal();
let lion = new Animal();
// tiger, lion에는 __proto__속성이 자동 생성됨
// __proto__속성은 이 객체가 만들어질 수 있도록 해준 원형을 가리킴 (Animal 프로토타입 객체)

// 자바스크립트는 생성자를 생성하고 호출하면 자동으로 프로토타입 객체(클래스?)가 생성되는 것처럼 보임
// Animal 프로토타입 객체 = tiger, lion 객체의 원형
console.log(tiger);
console.log(lion);

// 프로토타입 객체에 멤버(필드? 메소드?) 추가하기
Animal.prototype.run = function() {
    return "동물이 뛴다.";
};

console.log(tiger.run()); // 동물이 뛴다.
console.log(lion.run()); // 동물이 뛴다.

tiger.run = function() {
    return "호랑이가 뛴다.";
}

console.log(tiger.run()); // 호랑이가 뛴다.

// 속성 추가
tiger.legs = 4;

console.log(tiger.legs); // 4
console.log(lion.legs); // undefined

// 위의 공부를 통해 알 수 있는 것.
// 어떤 함수(Animal)의 프로토타입 객체는 객체의 생성을 위한 부모격의 원형이 되는 객체이다.
// 이 프로토타입으로 생성된 객체들은 모두 이 객체의 멤버에 접근 가능. (상속)
// 메소드 오버라이드 가능

// 모든 동작은 프로토타입 객체를 통해서 진행된다.
// 멤버를 읽는 것은 객체명 혹은 함수의 프로토타입 속성을 통해 접근이 가능
console.log(lion.run()); // 동물이 뛴다.
console.log(Animal.prototype.run()); // 동물이 뛴다. 