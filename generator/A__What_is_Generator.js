// 제너레이터(Generator)란?
// 1. 함수인데 조금 이상하게(?) 동작하는 함수
//      보통 함수는 값 한개 or 0개를 반황하는데 얘는 여러 개를 반환
//      그것도 제너레이터 외부에서 함수가 실행되는 도중에 특정 부분에서 멈추고 값을 외부에서 받아서 하나씩 반환
// 2. 외적인 특징: *을 함수에 붙이면 제너레이터가 된다.
// 3. 함수의 실행 -> 특정 키워드(yield)에서 멈춤 -> 필요한 시점에 다시 실행
//      why yield? '권한을 양도하다' 함수 실행하다 멈추고 외부로 권한을 양도한다는 의미
// 정리: 함수 중간에 실행을 멈추고 제어권을 호출자에게 양도

function* testGen() {
    yield 1;
    yield 2;
    yield;
    return 4;
} 

// 호출 시 바로 실행 x -> 호출 시 iterator 객체를 반환함
// iterator 반복자 객체를 반환 -> 보통 it 혹은 iter라는 이름으로 받음
// 객체이기 때문에 내부적으로 메소드를 갖는데, next()가 주요 메소드

const iter = testGen(); 

// next() 메소드를 실행할 때 마다 처음 나오는 yield까지 실행하고 멈춤 (제어권을 호출자에게 양도한다)
// yield에서 멈췄을 때 yield 뒤의 값을 반환하는데 만약 yield 뒤에 아무런 값이 없다면 undefined가 반환된다.
// 정리: next() 실행하면 value, done 2개의 속성을 가진 '객체'를 반환한다.
// ex. testGen()의 첫 번째 yield -> { value: 1, done: false } 
// value는 yield 뒤의 값, done은 함수 코드의 실행이 끝났는지 여부

console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: undifined, done: false }
console.log(iter.next()); // { value: 4, done: true }
console.log(iter.next()); // { value: undifined, done: true }