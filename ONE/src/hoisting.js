//호이스팅
//함수 호이스팅

connecStrings('study', 'hoisting')

const connecStrings = (str1, str2) =>{
  console.log(str1+str2);
}

function connecStrings(str1, str2) { 
  console.log(str1+str2);
}

// 변수 호이스팅
console.log(num); //error
let num1 = 10

console.log(num); //undefined
var num2 = 10

// 왜 undefined일까?
//JS 엔진은 이런식으로 해석한다
// 초기화 되기 전이어도 메모리 공간확보 O
// var num2;
// console.log(num2);
// num = 10

//let은 호이스팅 발생 X?
//let키워드는 초기화가 될때까지 TDZ(Temporal Dead Zone) 이라는 공간에 있음. 그렇기에 호이스팅이 발생되지 않는 것으로 보이는 것
// let num; 
//let은 초기화가 되기 전까지 메모리 공간 확보 X
// console.log(num);
// num = 10


// 화살표 함수
const add =(a, b) => a+b

console.log(add(10, 20));