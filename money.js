let img1=document.querySelector(".img1");
let img2=document.querySelector(".img2");
let img3=document.querySelector(".img3");
let input=document.querySelector("input");
let morning=document.querySelector(".morning");
let afternoon=document.querySelector(".afternoon");
let night=document.querySelector(".night");

input.addEventListener("change",()=>{

    if(input.value=="monday"){
morning.innerText="idle";
afternoon.innerText="dalrice";
night.innerText="rasamrice";
img1.setAttribute("src","idle.jpg");
img2.setAttribute("src","dalrice.jpg");
img3.setAttribute("src","rasamrice.jpg");

    }else if(input.value=="tuesday"){
morning.innerText="dosa";
afternoon.innerText="dalrice";
night.innerText="chapati";
img1.setAttribute("src","dosa.jpg");
img2.setAttribute("src","dalrice.jpg");
img3.setAttribute("src","chapati.jpg");

    }else if(input.value=="wednesday"){
morning.innerText="upma";
afternoon.innerText="dalrice";
night.innerText="chapati";
img1.setAttribute("src","upma.jpg");
img2.setAttribute("src","dalrice.jpg");
img3.setAttribute("src","chapati.jpg");
    }else if(input.value=="thursday"){
morning.innerText="idle";
afternoon.innerText="chickenrice";
night.innerText="rasamrice";
img1.setAttribute("src","idle.jpg");
img2.setAttribute("src","chickenrice.jpg");
img3.setAttribute("src","rasamrice.jpg");
    }else if(input.value=="friday"){
morning.innerText="upma";
afternoon.innerText="dalrice";
night.innerText="chapati";
img1.setAttribute("src","upma.jpg");
img2.setAttribute("src","dalrice.jpg");
img3.setAttribute("src","chapati.jpg");
    }else if(input.value=="saturday"){
morning.innerText="upma";
afternoon.innerText="dalrice";
night.innerText="polihora";
img1.setAttribute("src","upma.jpg");
img2.setAttribute("src","dalrice.jpg");
img3.setAttribute("src","polihora.jpg");
    }else if(input.value=="sunday"){
morning.innerText="dosa";
afternoon.innerText="rasamrice";
night.innerText="chickenrice";
img1.setAttribute("src","dosa.jpg");
img2.setAttribute("src","rasamrice.jpg");
img3.setAttribute("src","chickenrice.jpg");
    }
    input.value="";
})

