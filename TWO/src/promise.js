// const executor = (resolve, reject)=>{ //실행함수이며 promise생성자에 반드시 전달되야할 함수로 생성됨과 동시에 자동으로 실행
//코드
//작업이 성공했을 경우 resolve반환, 실패했을 경우 reject반환
// };

// const promise = new Promise(executor); //Promise생성자를 생성 할 경우 state와 result라는 프로퍼티를 가짐

//state와 result프로퍼티의 기본값은 pending(대기)과 undefined
//만약 작업이 성공하여 excutor함수에서 resolve를 반환한다면 state와 result는 fuilfilled(성공)와 resolve함수에 전달된 value의 값을 가지게 됨
//작업이 실패하여 excutor함수에서 rejuect를 반환한다면 state와 result는 rejected(실패)와 error값을 가지게 됨
// console.log(promise);


// 특정 작업을 resolve에 담아 출력하게 하고 실패할경우 reject가 반환되는 작업
const executor = (resolve, reject) => {
  setTimeout(() => {
    resolve('성공')
    reject('실패')
  }, 3000)
}

const promise = new Promise(executor)
//then메서드에 첫번째로 전달되는 함수는 성공일때 전달되는 함수이고 두번째로 전달되는 함수는 실패일때 전달되는 함수이다
// promise.then( 
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

//조금 더 직관적으로       
// promise.then((result)=>{console.log(result);}).catch((error)=>{console.log(error);})
// catch는 실패했을때 실행되는 메서드

//콜백 지옥

// const workA = (value, callback) =>{
//   setTimeout(()=>{
//     callback(value + 5)
//   },5000)  
// }

// const workB = (value, callback) =>{
//   setTimeout(()=>{
//     callback(value - 3)
//   },3000)  
// }

// const workC = (value, callback) =>{
//   setTimeout(()=>{
//     callback(value + 10)
//   },10000)  
// }


// 작업이 비동기여도 작업을 동기로 사용할수 있는 장점이 있고 다른 비동기 함수에서 사용했던 결과값을 또 다른 비동기 함수에서 사용할수 있다는 장점이 있다
// 하지만 코드가 복잡해지고 가독성이 떨어져 많은 오류를 발생시킬수 있다
// primise는 이러한 콜백 지옥을 해결하기 위해 나타남
// workA(10,(resA)=>{
//   console.log(`workA : ${resA}`);
//   workB(resA,(resB)=>{
//     console.log(`workB : ${resB}`);
//     workC(resB, (resC)=>{
//       console.log(`workC : ${resC}`);
//     })
//   });
// })


const workA = (value) => {
  const promise = new Promise((resolve) => { //성공한 값만 확인하기 위해 하나만
    setTimeout(() => {
      resolve(value + 5)
    }, 3000)
  })
  return promise;
}

const workB = (value, callback) => {
  const promise = new Promise((resolve) => { //성공한 값만 확인하기 위해 하나만
    setTimeout(() => {
      resolve(value - 3)
    }, 5000)
  })
  return promise;
}

const workC = (value, callback) => {
  const promise = new Promise((resolve) => { //성공한 값만 확인하기 위해 하나만
    setTimeout(() => {
      resolve(value + 10)
    }, 10000)
  })
  return promise;
}


// 코드가 깔끔해졌지만 아직도 콜백지옥과 비슷해보임
// workA(10).then((resA)=>{
//   console.log(`workA : ${resA}`);
//   workB(resA).then((resB)=>{
//     console.log(`workB : ${resB}`);
//     workC(resB).then((resC)=>{
//       console.log(`workC : ${resC}`);
//     })
//   })
// })

//훨씬 직관적이고 깔끔함
workA(10)
  .then((resA) => {
    console.log(`workA : ${resA}`);
    return workB(resA)
  })
  .then((resB) => {
    console.log(`workB : ${resB}`);
    return workC(resB)
  })
  .then((resC) => {
    console.log(`workC : ${resC}`);
  })
