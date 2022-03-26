// 객체 생성시 생성자 안에서 메소드를 정의하면 안되는 이유

// 생성자 안에서 메소드 정의
function Add(a, b) {
    this.a = a;
    this.b = b;
    this.plus = function() {
        return this.a + this.b;
    }
}

let add1 = new Add(100, 20);
console.log(add1.plus()); // 120
console.log(add1);

// 저렇게 생성하면 객체 생성 시 plus 메소드가 모든 객체에 생겨 버린다.
// 메모리 부하가 올 수 있기 때문에 프로토타입에 하나의 메소드를 두고 그것을 공유하는 것이 바람직
// 근데 자바는 저렇게 하지 않나?
let add2 = new Add(100, 20);
let add3 = new Add(100, 20);
let add4 = new Add(100, 20);
console.log(add2);
console.log(add3);
console.log(add4);

// 프로토타입 객체에 메소드 정의
function Add2(a, b) {
    this.a = a;
    this.b = b;
}

Add2.prototype.plus = function() {
    return this.a + this.b;
}

Add2.prototype.name = "더하기";

let newAdd1 = new Add2(100, 20);
console.log(newAdd1);

console.log(newAdd1.plus());
console.log(newAdd1.name);