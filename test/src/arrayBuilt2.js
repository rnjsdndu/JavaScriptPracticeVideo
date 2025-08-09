let array1 = ["green", "blue"]

let array2 = ["purple", "yellow"]

let colors = ["green", "blue", "purple", "yellow"]

// console.log(array1.concat(array2)); //배열을 합침

// console.log(array1.join(" ")); //하나에 배열에서 문자열로 바꿈 매개변수는 배열에 값 사이에 뭘 넣을지 지정 기본값은 ,



// colors.sort() //정렬

// console.log(colors);



// compare 함수



//문자열

const compare = (a, b) => {

  if (a > b) return -1;

  else if (a < b) return 1;

  else return 0;
}




//숫자

const compareInt = (a, b) => {

  return b - a;



}



// colors.sort(compare) //내림차순

// console.log(colors); 



let numbers = [1, 100, 25, 50]

// numbers.sort(compareInt);

// console.log(numbers);



let sum = numbers.reduce((acc, cur, idx) => { //acc:콜백함수의 반환값을 유지, cur:현재 처리할 요소의 값, idx:처리할 현재 요소의 인덱스

  console.log(acc, cur, idx);

  return acc + cur;
},
  0) //초기값

// numbers.forEach((elm)=>{

//   sum += elm;

// })



console.log(sum);









