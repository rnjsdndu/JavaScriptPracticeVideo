//생성자 함수는 화살표 함수로 사용X
// const Person = ()=>{

// }


// const person1 = {
//   name: '홍길동',
//   age: 30,
//   job: 'Manager',
//   sayHi: ()=>{
//     console.log('안녕하세요!' + this.name + '입니다');
//   }
// }
// const person2 = {
//   name: '김철수',
//   age: 25,
//   job: 'Designer',
//   sayHi: ()=>{
//     console.log('안녕하세요!' + this.name + '입니다');
//   }
// }

// 하나하나 하기 너무 싫고 귀찮고 비효율적이고 많아지면 많아질수록 더더 비효율적이게 되는 방법 이제 그만~~~~~~~!!!!

//생성자 함수
function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayHi = ()=>{
    console.log('안녕하세요!' + this.name + '입니다');
  }
}

const person1 = new Person('홍길동', 30, 'Manager')
const person2 = new Person('김철수', 25, 'Designer')

console.log(person1.name);
console.log(person2.age);
person1.sayHi();
person2.sayHi();