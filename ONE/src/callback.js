//콜백 함수

const calculate = (a,b, callback)=>{
  let result = a + b;
  callback(result)
}

const printResult = (result) =>{
  console.log('결과: ' + result);
};
const doubleResult = (result) =>{
  console.log('결과에 2를 곱한 값: ' + result * 2);
}

calculate(5, 3, printResult)
calculate(5, 3, doubleResult)


const testFunc = callback =>{
  callback();
}

testFunc(()=>{
  console.log('콜백 함수 테스트');
})

testFunc(function (){
  console.log('콜백 함수 테스트');
})


