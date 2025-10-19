if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.addEventListener("load",()=>{
    window.scrollTo(0 ,0);
})

let card1=document.querySelector(".card1");
let card2=document.querySelector(".card2");
let card3=document.querySelector(".card3");
let card4=document.querySelector(".card4");
let card5=document.querySelector(".card5");
let card=document.querySelectorAll(".card");
let originalx=card1.getBoundingClientRect().x;
let originaly=card1.getBoundingClientRect().y;
let copy1=document.querySelector(".copy1");
let dragx1=copy1.getBoundingClientRect().x;
let dragy1=copy1.getBoundingClientRect().y;
dragx1=dragx1-originalx;
dragy1=dragy1-originaly;
let copy2=document.querySelector(".copy2");
let dragx2=copy2.getBoundingClientRect().x;
let dragy2=copy2.getBoundingClientRect().y;
dragx2=dragx2-originalx;
dragy2=dragy2-originaly;
let copy3=document.querySelector(".copy3");
let dragx3=copy3.getBoundingClientRect().x;
let dragy3=copy3.getBoundingClientRect().y;
dragx3=dragx3-originalx;
dragy3=dragy3-originaly;
let copy4=document.querySelector(".copy4");
let dragx4=copy4.getBoundingClientRect().x;
let dragy4=copy4.getBoundingClientRect().y;
dragx4=dragx4-originalx;
dragy4=dragy4-originaly;
let copy5=document.querySelector(".copy5");
let dragx5=copy5.getBoundingClientRect().x;
let dragy5=copy5.getBoundingClientRect().y;
dragx5=dragx5-originalx;
dragy5=dragy5-originaly;
let last=0;
window.addEventListener("scroll",()=>{
    let current=window.pageYOffset;
    if(current>last){
card1.style.transform=`translate(${dragx1}px,${dragy1}px)`;
card1.style.transition="transform 1s";
card2.style.transform=`translate(${dragx2}px,${dragy2}px)`;
card2.style.transition="transform 1s";
card3.style.transform=`translate(${dragx3}px,${dragy3}px)`;
card3.style.transition="transform 1s";
card4.style.transform=`translate(${dragx4}px,${dragy4}px)`;
card4.style.transition="transform 1s";
card5.style.transform=`translate(${dragx5}px,${dragy5}px)`;
card5.style.transition="transform 1s";


    }else{
        for(let cards of card){


cards.style.transform="translate(0,0)";
cards.style.transition="transform 1s";
       }
    }
    last=current;
})
let rent=document.querySelector(".rent");

let rentclick=document.querySelector("#rent");
rentclick.addEventListener("click",()=>{
    rent.scrollIntoView({
        behavior:"smooth",
        inline:"start"
    })
    
   

})


let help=document.querySelector("#help");
let helpscroll=document.querySelector(".help");

help.addEventListener("click",()=>{
helpscroll.scrollIntoView({
    behavior:"smooth",
    inline:"start"
})
})
let home=document.querySelector("#home");
home.addEventListener("click",()=>{
    window.scrollTo(0 ,0);
})
let menu=document.querySelector("#menu");
menu.addEventListener("click",()=>{
    window.open("menu.html","_parent");
})

let dialog=document.querySelector("dialog");
window.addEventListener("load",()=>{
    setTimeout(()=>{
dialog.showModal();
setTimeout(()=>{
let button=document.querySelector("button");
button.addEventListener("click",()=>{
    dialog.close();
})
},4500)
    },4000);
    

})