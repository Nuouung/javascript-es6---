let x = 0;

function* testGenerator() {
    let a = 3;
    x++;
    let b = yield a;
    let c = yield (b + x);
    let d = yield (++x + a + b + c);

    return a + b + c + d;
}

const iter = testGenerator();
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next(5)); // { value: 6, done: false }
console.log(iter.next(3)); // { value: 13, done: false }
console.log(iter.next(1)); // { value: 12, done: true }