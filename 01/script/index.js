/* 기존 함수 선언 방식
function funprint(n) {
  console.log(n);
  console.log("외부 자바 스크립트");
  consloe.log(n+"버튼"+1);   최종본 합체
}
 

//ES6+ : 화살표 함수
  //console.log(n);
  //console.log("외부 자바 스크립트");*/
  const funprint = (n) => {
  console.log(`버튼${n}`) ; 
}

/*jQuery
$document.ready(){
*/

/*변수
let x = 100;
x=100*2;
console.log(x);
*/







//DOM이 생성이 되고 난 후에 요소를 CRUD해야한다.
document.addEventListener("DOMContentLoaded",() => {
  

// 요소 생성 

/* let bt = document.createElement("button")

document.getElementById("bt").append(bt); */

//요소 찾기
//결과 HtmlCollection
/*  const bts1 = document.getElementsByClassName("bt1");
 console.log(bts1);
//결과 HtmlCollection
 const bts2 = document.getElementsByTagName("button");
 console.log(bts2);
//결과 Node 첫번째 만나는값만 가져옴
const bts3 = document.querySelector(".bt1");
 console.log(bts3);  */
//결과 NodeList
 const bts4 = document.querySelectorAll(".bt1");

 /*console.log(bts1[0].innerHTML);
 console.log(bts4[0].innerTEXT);
 console.log(bts4[1].innerTEXT); */

 /* 반복문 for */
/*  for(let i=0; i<bts4.length; i++){
   console.log(bts4[i]);
    }
 */
// 반복문 for in=>값은 안가져오고 키만 가져옴
  // for(let i in bts4){
  //   console.log(i)
  // }

  /* 반복문 foeach 
  메소드 형식 중간에 종류할수 없음*/
/*   bts4.forEach((item)=>{
    console.log(item.innerHtml);
)};
  bts4.forEach((item,idx)=>{
    console.log(`${idx}: ${item.innerHTML}`);
  })
 */

  /* 반복문 for .. of */
  for(let item of bts4){
    console.log(item.innerHTML);
  }

  for(let[idx,item] of bts4.entries()){
    console.log(`${idx}: ${item.innerHTML}`);
    break;
  }

});