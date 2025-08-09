//반복문

let person = {
  name: "홍길동",
  age: 25,
  height: 180
};

let newArray = Object.keys(person);
let valueRepeat = Object.values(person)
let entriesRepeat = Object.entries(person)
// for(let i = 0; i < newArray.length; i++){
//   let nowKey = newArray[i] //key
//   console.log(`key: ${nowKey}, value: ${person[nowKey]}`);
// }
// for(let i = 0; i < valueRepeat.length; i++){
//   let nowKey = newArray[i] //key
//   console.log(`value: ${person[nowKey]}`);
// }
for(let i = 0; i < entriesRepeat.length; i++){
  console.log(`key: ${entriesRepeat[i][0]}, value: ${entriesRepeat[i][1]}`);
}

console.log(Object.keys(person)); //객체의 키값을 배열로 반환
console.log(Object.values(person)); //객체의 밸류값을 배열로 반환
console.log(Object.entries(person)); //객체의 키와 밸류를 배열로 반환 [[array], [array], [array]]

//알아두면 유용한 다른 반복문
let arr = [1, 2, 3, 4, 5]

for (let i of person){//배열을 순회 
  console.log(i);
}

for(let i in person){//객체를 순회
  console.log(`key: ${i}, value:${person[i]}`);
}





