// array 반복

let array = ['a', 'b', 'c', 'd', 'e'];

// 전통적인 방법 for
console.log("======= for =======")
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// forEach()
console.log("======= forEach() =======")
array.forEach(function(target) {
    console.log(target);
});

console.log("======= forEach() arrow function =======")
array.forEach(target => console.log(target));

// set의 다양한 메소드 keys() values() entries()
console.log("======= set =======")

let mySet = new Set(['a', 'b', 'c', 'd']);
mySet.add('e');

console.log(mySet);

// set은 for of로 출력해야 한대
console.log("======= set for of =======")
for (let i of mySet) {
    console.log(i);
}

let setToArray = [...mySet];
console.log("======= set을 array로 =======")
for (let i in setToArray) {
    console.log(i);
}

// keys() <- iterator 객체를 반환
const key_iterator = mySet.keys();
console.log("======= key_iterator =======");
console.log(key_iterator.next().value); // a
console.log(key_iterator.next().value); // b
console.log(key_iterator.next().value); // c
console.log(key_iterator.next().value); // d
console.log(key_iterator.next().value); // e

// values() <- iterator 객체를 반환 (key랑 똑같다)
const value_iterator = mySet.values();
console.log("======= value_iterator =======");
console.log(value_iterator.next().value); // a
console.log(value_iterator.next().value); // b
console.log(value_iterator.next().value); // c
console.log(value_iterator.next().value); // d
console.log(value_iterator.next().value); // e

// entries() <- 쌍으로 만들어준다
const entries = mySet.entries();
console.log("======= entries =======");
for (let i of entries) {
    console.log(i);
}