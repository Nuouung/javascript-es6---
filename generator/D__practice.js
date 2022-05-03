// 콜백 지옥 만들어보기
// 요구사항: setTimeout을 이용해 1초마다 x2 x횟수를 한다. 총 5번
setTimeout(x => {
    let result = x;
    console.log(result);
    setTimeout(x => {
        result *= x;
        console.log(result);
        setTimeout(x => {
            result *= x;
            console.log(result);
            setTimeout(x => {
                result *= x;
                console.log(result);
                setTimeout(x => {
                    result *= x;
                    console.log(result);
                }, 1000, 32)
            }, 1000, 16)
        }, 1000, 8)
    }, 1000, 4)
}, 1000, 2)

// promise로 바꿔보기
new Promise((resolve, reject) => {
    setTimeout(x => {
        let result = x;
        console.log(result);
        resolve(result);
    }, 1000, 2)
})
.then(result => {
    return new Promise((resolve, reject) => {
        setTimeout(x => {
            result *= x;
            console.log(result);
            resolve(result);
        }, 1000, 4)
    })
})
.then(result => {
    return new Promise((resolve, reject) => {
        setTimeout(x => {
            result *= x;
            console.log(result);
            resolve(result);
        }, 1000, 8)
    })
})
.then(result => {
    return new Promise((resolve, reject) => {
        setTimeout(x => {
            result *= x;
            console.log(result);
            resolve(result);
        }, 1000, 16)
    })
})
.then(result => {
    return new Promise((resolve, reject) => {
        setTimeout(x => {
            result *= x;
            console.log(result);
            resolve(result);
        }, 1000, 32)
    })
})

// Generator로 바꿔보기
const calc = (a, b) => {
    setTimeout(() => {
        iter.next(a * b);
    }, 1000)
}

function* newGen() {
    const a = yield calc(2, 1);
    console.log(a);

    const b = yield calc(a, 2);
    console.log(b);

    const c = yield calc(b, 4);
    console.log(c);

    const d = yield calc(c, 8);
    console.log(d);

    const e = yield calc(d, 16);
    console.log(e);

    const f = yield calc(e, 32);
    console.log(f);
}

const iter = newGen();

iter.next();