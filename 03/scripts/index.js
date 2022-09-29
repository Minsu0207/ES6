//랜덤수
let randNum;
//사용자가 선택한수
let userNum;

//화면 보기
const dispDom= (msgP,inNumP,bt1P,bt2P)=>{
//DOM제어

document.getElementById("msg").style.display = "msgP";
document.getElementById("inNum").style.display = "inNumP";
document.getElementById("bt1").style.display = "bt1P";
document.getElementById("bt2").style.display = "bt2P";

}


const showDice = () => {
  console.log("주사위");
  randNum = math.floor(math.random()*6) + 1;
  console.log(`주사위 랜덤수 =${randNum}`);
}

const showOk = () => {
  //잘되는지 확인
  userNum = form1.num.value;
  console.log("확인");
  //DOM 제어
  dispDom("block","none","block","none");
// document.getElementById("msg").style.display = "block";
// document.getElementById("inNum").style.display = "none";
// document.getElementById("bt1").style.display = "block";
// document.getElementById("bt2").style.display = "none";

//주사위 그림
let tag = `<img src = "./images/$(randNum).png">`;

//ox 그림
let ox;
if(randNum == userNum) ox = "o";

else ox = "x";
tag = tag + `${tag}<img src = "./images/o.png">`;

}

document.addEventListener("DOMContentLoaded",()=>{
//주사위버튼만 보여야함
//Id로 잡아서 샵이 안붙어도됨
document.getElementById("msg").style.display = "none";
document.getElementById("inNum").style.display = "none";
document.getElementById("bt1").style.display = "none";
document.getElementById("bt2").style.display = "none";

});