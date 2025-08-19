//배열의 내장함수

let arr = [1, 2, 3, 4, 5]

//forEach
arr.forEach((elm, idx, array) => {
  // console.log(`${idx}번째 요소는 ${elm}입니다`);
  // console.log(array); // arr배열이 출력됨
})

//map
let newArray = arr.map(elm =>
  elm * 10
)

// console.log(newArray);

let colors = ["green", "blue", "purple"]
console.log(colors[2]);
console.log(colors[colors.length - 1]);//배열의 마지막 값 출력
console.log(colors.at(0)); //배열의 마지막 값 출력 훨씬 편함
console.log(colors.includes('blue'));
console.log(colors.includes('yellow'));
console.log(colors.includes('blue', 2)); //2번째 인수 몇번째 인덱스부터 값을 찾을지 정하는거 false
console.log(colors.includes('blue', 1)); //true
//indexOf는 배열의 값이 객체거나 배열일 경우 찾지 못함
console.log(colors.indexOf("purple", 2)); //인수가 몇번째 배열에 있는지 출력 includes와 동일하게 검색을 시작할 위치를 정해줄수 있음
console.log(colors.indexOf("yellow")); //배열에 존재하지 않는 값을 넣는aasdas다면 항상 -1을 반환

//배열속 객체를 찾을때에는 findIndex
let colors2 = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "purple" },
  { id: 4, color: "yellow"}
]
let idx = colors2.findIndex((elm, idx, array) => console.log(`${idx}번째 값은 ${elm.id} ${elm.color}입니다.`))
let idx2 = colors2.findIndex((elm, idx, array) => console.log(array))
console.log(idx);
console.log(idx2);
//배열속 객체의 값 자체를 반환할때는 find
//배열속 해당값이 없다면 undefined
let idx3 = colors2.find((elm) => elm.color === "purple") //  {id: 3, color: "purple"}

// console.log(idx3);

let filterArray = colors2.filter((elm, idx, array)=> elm.id > 1) //조건에 만족하는 모든 값들을 배열에 담는다

// console.log(filterArray);

let sliceArray = colors2.slice(1, 3); //두번째 인수보다 1작은 요소의 인덱스까지 배열을 복사해서 반환
console.log(sliceArray);








