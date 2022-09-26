/* 기존 함수 선언 방식
function funprint(n) {
  console.log(n);
  console.log("외부 자바 스크립트");
  consloe.log(n+"버튼"+1);   최종본 합체
}
 */ 

//ES6+ : 화살표 함수
  //console.log(n);
  //console.log("외부 자바 스크립트");
  const funprint = (n) => {
  console.log(`버튼${n}`) ; 
}
