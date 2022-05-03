// 클래스 표현식 정의

// 1. 무명 표현식
// const Person = class {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// console.log(Person.name); // Person

// 2. 이름 있는 표현식
const Person = class namedPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person('홍길동', 20);
console.log(Person.name); // namedPerson