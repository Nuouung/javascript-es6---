// new 연산자의 내부 동작

// 내부적으로는 빈 객체를 생성한 후 같은 이름의 프로토타입 객체를 객체의 새로운 프로토타입으로 설정
function Add(a, b) {
    this.a = a;
    this.b = b;
}

Add.prototype.plus = function() {
    return this.a + this.b;
}

// 2. 새로운 객체 생성
const add = new Add(11, 22);
console.log(add.plus()); // 33

// 3. 내부 동작
const newObject = {}; // 이렇게 쓸 이유는 없다
console.log(newObject);
newObject.__proto__ = Add.prototype; // 부모 바꾸기
Add.apply(newObject, [11, 22]); // 함수를 실행하는 것이라고 함 <- 방법이 많대
// 위는 데이터를 초기화 한 것 생성자로 a = 11, b = 22 넣은 것
console.log(newObject.plus()); // 33


// 생성자 함수와 내부에서 처리되는 동작들

// 생성자함수는 관례적으로 대문자로 작성
function Person(name, age) {
    this.name = name;
    this.age = age;
} // 이렇게 쓸 수도 있겠으나

let personA = new Person('홍길동', 20); // 이 방법이 더 일반적