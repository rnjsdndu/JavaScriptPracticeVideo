// 자바스크립트는 싱글 스레드(한번에 하나의 작업만 처리할수 있음)이기 때문에 비동기 처리를 통해 작업을 처리한다

// const workA = () =>{
//   console.log('workA')
// }

// const workB = () =>{
//   console.log('workB')
// }

// const workC = () =>{
//   console.log('workC')
// }  

// workA();
// workB();
// workC();


// JS에서 비동기로 처리하는 방법
setTimeout(()=>{
  // console.log('비동기');
},3000) //딜레이 만큼의 시간이 흐른 후 콜백함수를 실행
// console.log('종료'); //종료가 출력된후 3초 후 비동기가 출력됨

setTimeout(()=>{
  // console.log('비동기');
  // console.log('종료'); //3초후 비동기 출력후 출력
},3000) //딜레이 만큼의 시간이 흐른 후 콜백함수를 실행

const work = (callback) =>{
  setTimeout(()=>{
    console.log('비동기');
    callback()
  },3000)
}

work(()=>{
  console.log('종료');
})

const workA = ()=>{
  setTimeout(()=>{
    console.log('workA');
  }, 5000)
}

const workB = ()=>{
  setTimeout(()=>{
    console.log('workB');
  }, 3000)
}

const workC = ()=>{
  setTimeout(()=>{
    console.log('workC');
  }, 10000)
}

const workD = () =>{
  console.log('workD');
}

workA()
workB()
workC()
workD()






