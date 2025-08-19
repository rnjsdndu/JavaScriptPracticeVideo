//Early return pattern

const compare1 = (num) =>{
  if(num === 0){
    console.log("num의 값이 0입니다.");
  }else if(num<0){
    console.log("num의 값이 0보다 작습니다.");
  }else{
    if(num>= 10){
      console.log("num의 값이 10보다 크거나 같습니다.");
    }else{
      console.log("num의 값이 0보다 크고 10보다 작습니다.");
    }
  }
} //너무 복잡하고 가독성이 안좋아요

let num = 1

const compare2 = (num) => {
  if (num === 0) {
    return "num의 값이 0입니다.";
  }
  if (num < 0) {
    return "num의 값이 0보다 작습니다.";
  }
  if (num >= 10) {
    return "num의 값이 10보다 크거나 같습니다.";
  }
  return "num의 값이 0보다 크고 10보다 작습니다.";
}


console.log(compare1(num)); 

const print = ()=>{
  console.log(1);
  console.log(2);
}

console.log(3);
print();
console.log(4);
