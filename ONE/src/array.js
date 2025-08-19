//배열
let arr1 = new Array(1,2,3); //생성자 함수
let arr2 = new Array(3); //원하는 공간 생성
// console.log(arr1);
// console.log(arr2);//길이가 3인 비어있는 배열

let arr3 = [1,2,3] //리터럴
let arr4 = [3] //생성자 함수와 달리 숫자 3이 담겨져있음
// console.log(arr3);
// console.log(arr4);

//여러가지 값 할당 가능
let arr5 = [
  {name: '홍길동'},
  1,
  'array',
  ()=>{
    // console.log('hello world');
  },
  null,
  undefined
]

// console.log(arr5);

let array = [1, 'hello', null];

// console.log(array[0]);//배열의 인덱스는 0부터 시작
// console.log(array[1]);
// console.log(array[2]);

//추가
let fruits = ['apple','orange','peach'];
fruits.push('grape'); //가장 마지막에 추가됨
fruits.unshift('pineapple'); //첫번째에 추가됨

// console.log(fruits);

//수정
let animal1 = ['cat','dog','hamster']

animal1 = ['cat' , 'rabbit', 'hamster']
animal1[2] = 'parrot';

// console.log(animal1);

//const경우(수정)
//배열 자체에 접근하지만 않으면 가능
const animal2 = ['cat','dog','hamster']

// animal = ['cat' , 'rabbit', 'hamster'] error
animal2[2] = 'parrot';

// console.log(animal2);

const colors = ['purple', 'skyblue', 'green', 'yellow' , 'orange']
colors.pop(); //마지막 요소 삭제
colors.shift() //첫번째 요소 삭제
colors.splice(1, 3)//start , deleteCount

console.log(colors);
console.log(colors.length); //배열의 길이






