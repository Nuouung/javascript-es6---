// symbol 사용법
// 1. symbol은 new 연산자를 사용하지 않음
let mySymbol = Symbol();

// 2. 괄호 안은 비워 두고 생성해도 되고, 문자열을 넣어서 생성해도 됨
// 보통 이 때의 문자열을 단순 디버깅 용도일 뿐. 주석 정도의 역할
let mySymbol2 = Symbol("나는 주석이라고 생각하면 됨");
let mySymbol3 = Symbol("나는 주석이라고 생각하면 됨");
console.log(mySymbol2 === mySymbol3); // false
// symbol은 중복되지 않는 임의의 난수라고 생각해도 되려나

// symbol의 출력 형태
// symbol은 문자열 형태로 변환할 수 없음. console.log로 콘솔에 출력
let mySymbol4 = Symbol();
// alert(mySymbol4); // TypeError 발생
console.log(mySymbol4);

// 심볼형은 for in 구분으로 출력되지 않음 (symbol은 은닉성을 가진다)
// 배열 객체에 속성을 추가하면 for in 구문으로 해당 속성도 같이 출력됨
// 근데 심볼형은 안됨
let array = [1, 2, 3, 4, 5];
array.someProperty = 10;

for (let i in array) {
    console.log(i); // 0, 1, 2, 3, 4, someProperty
}

console.log("심볼을 사용하면");
let array2 = [1, 2, 3, 4, 5];
let someProperty = Symbol();
array2[someProperty] = 10;

for (let i in array2) {
    console.log(i);
}