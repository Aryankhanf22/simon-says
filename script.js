let gamesequence=[];
let usersequence=[];
let button=["pink","green","teal","blue"];
let h2=document.querySelector("h2");
let start=false;
let level=0;
document.addEventListener("keypress",function(){
    if(start==false){ 
        start=true;
   levelup();
    }
})
function levelup(){
    usersequence=[];
     level++;
h2.innerText=`Level ${level}`;
let random=Math.floor(Math.random()*4);
let rdx=button[random];
let rdxbtn=document.querySelector(`.${rdx}`);
btnflash(rdxbtn);
gamesequence.push(rdx);
}
function btnflash(btn){
    btn.classList.add("sliver");
        setTimeout(function(){
            btn.classList.remove("sliver");
        },150)
    };
function userflash(){
let btn=this;
btnflash(btn);
let user=btn.getAttribute("id");
usersequence.push(user);
checkans(usersequence.length-1);
};
let allbtn= document.querySelectorAll(".btn");
for(btns of allbtn){
    btns.addEventListener("click",userflash);
};
function checkans(idx){
    if(usersequence[idx]==gamesequence[idx]){
        if(usersequence.length==gamesequence.length){
 setTimeout(levelup,300);
    }
}
  else {
    h2.innerHTML = `Game over Level ${level} <br> press any key to start`;

    let body = document.querySelector("body");

    // flash
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "red";

    setTimeout(function () {
        body.style.backgroundColor = "";
        body.style.backgroundImage = 'url("image.jpg")';
    }, 500);

    reset();
}

};
function reset(){
usersequence=[];
gamesequence=[];
start=false;
level=0;

};








