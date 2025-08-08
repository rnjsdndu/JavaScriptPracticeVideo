//scope
//전역, 지역
//전역변수(외부변수)
let globalNum1 = 100;

const testFunc1 = ()=>{
  console.log(globalNum1);
}
testFunc1()
console.log(globalNum1);

//지역변수
let globalNum2 = 100;

const testFunc2 = ()=>{
  let innerNum = 50
  console.log(globalNum2);
  console.log(innerNum);
}
testFunc2()
console.log(globalNum2);
console.log(innerNum);

// 함수 스코프, 블럭 스코프
const print1 = ()=>{
  for(let i = 0; i< 10; i++){  
    console.log(i);
  }
  console.log(i);
}
print1();

const print2 = ()=>{
  for(var i = 0; i< 10; i++){ //var라는 키워드를 가진 변수는 함수 스코프를 가짐. 함수 스코프는 같은 함수에서만 유효
    console.log(i);
  }
  console.log(i);
}
print2();



// let과 var의 차이점

// 1. 함수 스코프와 블럭 스코프

// 2.
let num1 = 10;
let num1 = 100; //오류

var num2 = 10;
var num3 = 100; //오류
console.log(num); //100

// 3. var는 호이스팅의 특성을 가짐