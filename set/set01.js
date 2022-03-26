// Set. 정의, 특징, 사용법

// [1] : Set
// set = 집합

// [2] : 특징
// Set은 중복된 값을 가질 수 없다.
// 이런 성질을 이용해서 중복을 제거하는 용도로도 많이 쓰인다.
// 일반적으로 set은 순서가 없는데 자바스크립트는 다른가?

// [3] : 사용법
// new, add, delete

// 생성
let mySet = new Set();

// 추가
mySet.add("A");
mySet.add("B");

mySet.add("B");
mySet.add("B");
mySet.add("B");
mySet.add("B");
mySet.add("B"); // size = 2 중복되면 안들어간다!

// 삭제
mySet.delete("B"); // size = 1
mySet.clear(); // 전체 삭제