// 어떤 객체를 다룰 때 그 객체의 모든 특성을 보고자 한다면 getOwnPropertyNames() 사용
// 정적 메소드 Object.getOwnPropertyNames(객체명)
// Object.getPrototypeOf()와의 차이는?

// 1.
const p1 = {
    eat() {},
    run() {},
    rest() {}
}

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {}
    run() {}
    rest() {}
}

const p2 = new Person2('홍길동', 20);

// 2. 메소드는 열거 대상이 아니기 때문에 for in에서 확인 x
for (let i in p2) {
    console.log(i); // name, age (eat, run, rest x)
}

console.log(p1); // eat, run, rest
console.log(p2); // name, age (eat, run, rest x)

// 3.
console.log(Object.keys(p1)); // ["eat", "run", "rest"]
console.log(Object.getPrototypeOf(p2)); // 지정된 객체의 내부 Prototype 속성값을 반환
console.log(Object.keys(Object.getPrototypeOf(p2))); // [] <- 클래스로 만든 객체는 key로 출력이 불가하다.

console.log(Object.getOwnPropertyNames(p1)); // ["eat", "run", "rest"]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(p2))); // ["constructor", "eat", "run", "rest"]