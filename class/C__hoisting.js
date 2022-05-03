// 자바스크립트 클래스 - 호이스팅(Hoisting)

// 1. 함수 레벨 스코프 vs 블록 레벨 스코프
var a = 11; // 전역변수
console.log(a); // 11

{
    var a = 33; // 전역변수 -> why? 함수 레벨 스코프. var는 중복이 허용됨. 호이스팅 가능. 함수가 아닌 변수 선언은 모두 전역
}

console.log(a); // 33

// 자바스크립트는 미친 언어다!

// 2. 호이스팅 Hoisting 이란?
// Hoisting : 끌어 올리기 <- 국기 게양식
// 자바스크립트는 기본적으로 모든 선언문을 호이스팅 함
// 호이스팅 = 스코프 안 어디에서든 변수 선언은 최상위에서 선언한 것과 동일
// var / let, const에는 차이가 있다. 

console.log('testA의 값은 = ' + testA); // undefined <- var는 호이스팅이 되기 때문
var testA;

// console.log('testB의 값은 = ' + testB); // Uncaught ReferenceError <- let도 호이스팅이 된다. but 선언이 변수가 선언된 위치에서 선언됨
let testB;

// 3. 클래스 호이스팅
// console.log(Person); // Uncaught ReferenceError
class Person {}

const person1 = new Person();
console.log(person1);

// var vs let, const, class 호이스팅 에러 비교
console.clear();
var str1 = 'Hello World';

const testFun = function() {
    // 두 줄 밑에 str1이 호이스팅 되며 var str1 = undefined로 옴
    console.log(str1);
    var str1 = 'Hello Korea';
}

testFun(); // 함수의 실행 결과 : undefined


let str2 = 'Hello World';

const testFun2 = function() {
    // 두 줄 밑에 str2이 호이스팅 되었지만 두 줄 밑에까지 존재하지 않는 걸로 침. 
    console.log(str2);
    let str2 = 'Hello Korea';
}

// testFun(); // 함수의 실행 결과 : Uncaught ReferenceError

// 클래스 상속
class Parent{}
class Child extends Parent {} // 이상 없음

class Child2 extends Parent2 {} // Uncaught ReferenceError
class Parent2{}
