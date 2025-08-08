// switch case

let fruit = 'apple'

switch(fruit){
  case 'banana':
    console.log('바나나');
    break;
  case 'apple':
    console.log('사과');
    break;
  case 'orange':
    console.log('오렌지');
    break;
  default:
    console.log('다른과일');
}

const add = (a, b) => {
  return a + b;
}

let result = add(10, 20)
console.log(`두 숫자를 더한 결과는 ${result}입니다`);

