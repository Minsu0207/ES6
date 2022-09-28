/* DOM 요소가 생성된 후에 실행*/

/* 예전방식
fouction (){
  console.log("show");
}
*/

//화살표함수형식 요즘
// const show = () => {
//   console.log("show: 화살표함수");
  
//   const msgid = document.querySelector("#msg");
//     let msgTag = "";
//     for(i=1;i<=3;i++) {
//       msgTag +=`<div class="divMsg">${i}</div>`
//     }
//     msgid.innerHTML=msgTag;
  

//     //  console.log(msgId.innerHTML);
// //태그 만들기
// //msgtag = '<div class="divMsg" id="divId">1</div>;
// //msgid.innerHTML = msgtag;


// }


// document.addEventListener("DOMContentLoaded",()=>{

// })


// const show = () => {                    
//   //1.태그만들기
//   let tag = "";
  
//   for(let i =1; i<=3; i++){
  
// // tag = tag + "<div class='divMsg'>+ i +</div>" ; 
// //  }  이전 태그 
// tag = tag + `<div class='divMsg'>$[i}</div>`   
//   }

//  console.log(tag);
//  //2.DOM에서 태그를 넣을 요소 선택
//  const msgDiv = document.querySelector('#msg')
 
//  //3.선택된 요소의 HTML 변경
//  msgDiv.innerHTML = tag
const show = () => {
  const formSection = document.querySelector('#formSection');
  formSection.style.display = "none"

  let tag = "";
  let i = Math.floor(Math.random()*6) + 1;
  tag = tag + `<img src="./images/${i}.png"></img>`
  tag = tag + `<input>`
  console.log(tag)
  
  const msgDiv = document.querySelector('#msg')
  msgDiv.innerHTML = tag;

  //3-1 스타일 변경
  msgDiv.style.backgroundColor = "powderblue";
  
  


  
  
}