// 클래스 생성의 2가지 방식

// 프로토타입 - 생성자를 이용
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 클래스에 메소드 추가하는 방법
Person.prototype.say = () => {
    console.log('안녕하세요~');
}

const p1 = new Person('홍길동', 20);
p1.say(); // 안녕하세요~


class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log('안녕하세~');
    }
}

const p2 = new Person2('이순신', 30);
p2.say(); // 안녕하세~

// 클래스는 기본적으로 엄격 모드(use strict) (자동 적용 된다.)
// 클래스 메소드는 열거 대상이 x <- 클래스와 같은 이름의 프로토타입 객체의 속성에 추가된 메소드들을 열거하지 않는다.
for (let i in p1) {
    console.log(i);
} // name, age, say

for (let i in p2) {
    console.log(i);
} // name, age