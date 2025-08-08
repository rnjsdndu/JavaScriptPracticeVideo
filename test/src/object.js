// 객체
//생성자 함수, 리터럴

//생성자 함수
let obj = new Object();
console.log(obj);

// 리터럴
let obj2 = {};
console.log(obj2);


//key value
//value에는 어떤 자료형이든 다 가능
let book ={
  title : '자바스크립트 첫걸음',
  author : '김효빈',
  category : '자바스크립트',
  year: undefined,
  color: () => {
    console.log('orange');
  },
  // asd: const as = 10 //하지만 선언문은 안됨
}

let car = {
  name: '붕붕',
  model: 'morning',
  color: 'black',
}

console.log(car['name']); //괄호표기법
console.log(car.model); //점표기법
console.log(car.color);

const getValue = key =>{
  console.log(car[key]);
}

getValue('color')

let cat ={
  age: 2,
}

//프로퍼티 추가
cat.name = '야옹이'; //점
cat['color'] = 'white'; //괄호

//프로퍼티 수정
cat.name = '야홍이'
cat['color'] = 'blue'

console.log(cat);

// 객체는 const로 선언하더라도 수정가능
const cat ={
  age: 2,
}

//프로퍼티 추가
cat.name = '야옹이'; //점
cat['color'] = 'white'; //괄호

//프로퍼티 수정
cat.name = '야홍이'
cat['color'] = 'blue'

console.log(cat);

//객체는 생성될때 고유한 아이디를 갖는다. 그렇기에 const로 선언하더라도 상수 특징의 영향을 안받음

//아이디를 바꾸는거여서 안됨
const cat = {
  age: 2,
  name: '야용아',
  color: 'white'
}

cat = {
  age: 3,
}
// 프로퍼티 삭제
delete cat.color;
delete cat['age']

console.log(cat);

const person = {
  name: '홍길동',
  age: 23,
  // 객체프로퍼티가 함수일 경우 메서드
  print: () =>{
    console.log(`제 이름은 ${this.name}입니다.`); //메서드에선 this를 사용하여 자신이 속해있는 객체를 가리킬수 있음
  }
}

person.print();
person['print'](); //함수는 ()

