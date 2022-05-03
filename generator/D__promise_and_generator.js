// Promise와 Generator 함수를 이용한 비동기 처리
// 비동기 처리는 다양한 방법이 있다. Promise, Generator, async, callback, ...

// 1. callback 지옥
setTimeout((x) => {
    
    // depth: 1
    let result = x;
    console.log(result); // 10

    setTimeout((x) => {
        
        // depth: 2
        result *= x;
        console.log(result); // 200

        setTimeout((x) => {

            // depth: 3
            result *= x;
            console.log(result) // 6,000

            setTimeout((x) => {

                // depth: 4
                result *= x;
                console.log(result); // 240,000
            }, 1000, 40)
        }, 1000, 30);
    }, 1000, 20);
}, 1000, 10);

// 2. promise로 변환
// new Promise() 호출하면 대기(Pending) 상태 전환
// 이 때 콜백 함수를 선언할 수 있음. 인자는 resolve,reject)
// 콜백 함수 내에서 처리할 것을 처리한 후 resolve() 메소드 호출
// 이행(성공, Fullfilled) 상태일 때 리턴값을 받고 them()이라는 메소드로 계속 수행
new Promise((resolve, reject) => {
    
    setTimeout((x) => {
        let result = x;
        console.log(result); // 10
        resolve(result);
    }, 1000, 10);
})
.then((result) => {
    return new Promise((resolve, reject) => {
        setTimeout((x) => {
            result *= x;
            console.log(result); // 200
            resolve(result);
        }, 1000, 20);
    });
})
.then((result) => {
    return new Promise((resolve, reject) => {
        setTimeout((x) => {
            result *= x;
            console.log(result); // 6,000
            resolve(result);
        }, 1000, 30)
    })
})
.then((result) => {
    return new Promise((resolve, reject) => {
        setTimeout((x) => {
            result *= x;
            console.log(result); // 240,000
            resolve(result);
        }, 1000, 40);
    })
})
.then((result) => {
    return result;
})

// 3. Generator로 변환
const calc = (x, y) => {
    setTimeout(() => {
        iter.next(x * y);
    }, 1000);
};

function* testGen() {

    const a = yield calc(1, 10);
    console.log(a);

    const b = yield calc(a, 20);
    console.log(b);

    const c = yield calc(b, 30);
    console.log(c);

    const d = yield calc(c, 40);
    console.log(d);
};

let iter = testGen();
iter.next();