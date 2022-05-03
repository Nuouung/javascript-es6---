// 클래스와 프로토타입

// 1. 클래스를 타입체크 해보면? -> function
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(typeof Person); // function

// 2. 함수도 객체다 (객체는 함수고 함수는 객체다)
function myMultiplication(a, b) {
    return a * b;
}

// 이 함수에 ret 속성을 추가하겠다
myMultiplication.ret = myMultiplication(10, 10);
console.log(myMultiplication.ret); // 100

// 3. 어떻게 클래스가 타입 체크 했을 때 function으로 찍힐 수 있는걸까?

// 클래스 선언문은 아래와 같은 내부동작을 수행함
// (1) Person 이름의 함수를 생성
// (2) 이 함수의 본문은 class의 constructor를 그대로 가져옴. 만약 constructor가 없으면 빈 함수 생성
// (3) 메소드는 같은 이름의 Person.prototype(프로토타입 객체)에 추가
// -> 결국에는 프로토타입 기반으로 동작한다!