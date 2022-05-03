// setTimeout vs setInterval
// 비동기 처리에는 다양한 방법들이 존재함. Promise와 Generator함수를 이용한 비동기 처리 가능

// setTimeout()와 setInterval()은 호출 스케줄링 함수
// setTimeout : 일정시간 후에 함수를 한 번만 실행
// setInterval : 일정시간마다 함수를 주기적으로 실행

// setTimeout을 취소하고 싶다면? clearTimeout
// setInterval을 취소하고 싶다면? clearInterval

// [setTimeout 테스트]
function testHello() {
    console.log('Hello~');
}

function testHello2(t) {
    console.log(t);
}

testHello(); // 그냥 호출
setTimeout(testHello, 2000); // 2초 후 실행해줘 (지연 호출) [시간단위: millisecond]
setTimeout(testHello2, 4000, 'hello my world!'); // 주의할 부분은 첫 번째 매개변수에 함수를 직접 호출해서는 안된다는 것
setTimeout((a) => console.log(a), 6000, '안녕하세요!'); // 함수를 내부에서 직접 사용할 수도 있다.
setTimeout(console.log('나도 지연로딩?'), 1000000); // 함수를 내부에서 직접 실행하면 바로 실행되어 버린다
setTimeout(() => console.log('나도 지연로딩?', 100000)); // 지연로딩 하려면 이렇게

// setTimeout을 호출하면 타이머 식별자가 반한됨 [숫자(Number)]
const tid = setTimeout(testHello, 50000);
console.log('setTimeout의 타이머 식별자 = ' + tid); // 6이 나온다

// tid를 식별자로 갖는 타이머가 실행하지 않도록 하려면
clearTimeout(tid);

// [setInterval 테스트]
const tid2 = setInterval(() => console.log('나는 1초마다 실행된다!'), 1000);

// setInterval를 중지하고 싶다면?
const myStop = (tid2) => {
    clearInterval(tid2);
}

setTimeout(myStop, 9000, tid2); // setTimeout(myStop(tid2), 9000);으로 할 경우 바로 정지 해 버린다. 함수를 직접 쓰고 싶다면 setTimeout(() => {myStop(tid2)}, 9000);