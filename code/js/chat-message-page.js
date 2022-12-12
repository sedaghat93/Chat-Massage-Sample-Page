


const likes=document.getElementsByClassName("icons-msg-like");
let count1=document.getElementById("count-like3");
let count2=document.getElementsByClassName("count-like");
let iconHeart=document.getElementsByClassName("icon-heart");


let x=0;


for(let i=0; i<likes.length; i++){
    console.log(likes[i]);
    likes[i].addEventListener("click",myFunction);
}

function myFunction(e){
    x++;
    console.log(`x`,x);
    count2.textContent=x + `like`;
    // count2.style.color='red';
    console.log(`count2`,count2);
   
}



