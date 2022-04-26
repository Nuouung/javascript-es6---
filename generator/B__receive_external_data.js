function* testGen2() {
    const a = yield 1;
    const b = yield (a * 1);
    const c = yield (b + 2);
    return a * b * c;
}

const iter2_1 = testGen2();

console.log(iter2_1.next()); // { value: 1, done: false }
console.log(iter2_1.next()); // { value: NaN, done: false }
console.log(iter2_1.next()); // { value: NaN, done: false }
console.log(iter2_1.next()); // { value: NaN, done: true }

const iter2_2 = testGen2();

console.log(iter2_2.next());    // { value: 1, done: false }
console.log(iter2_2.next(100)); // { value: 100, done: false }
console.log(iter2_2.next(48));  // { value: 50, done: false }
console.log(iter2_2.next(2));   // { value: 10000, done: true } 틀림 value = 9600.. why???

// step 1.
// console.log(iter2_2.next());
//     const a = (here)
//     const b = yield (a * 1);
//     const c = yield (b + 2);
//     return a * b * c;
// -> { value: 1, done: false }

// step 2.
// console.log(iter2_2.next(100));
//     const a = 100
//     const b = (here);
//     const c = yield (b + 2);
//     return a * b * c;
// -> { value: 100, done: false }

// step 3.
// console.log(iter2_2.next(48));
//     const a = 100
//     const b = 48;
//     const c = (here);
//     return a * b * c;
// -> { value: 50, done: false }

// step 4.
// console.log(iter2_2.next(2));
//     const a = 100
//     const b = 48;
//     const c = 2;
//     return a * b * c;
// -> { value: 9600, done: true } (100 * 48 * 2)