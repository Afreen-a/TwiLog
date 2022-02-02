


const hamMenu = document.querySelector(".ham-menu");
const closeBtn = document.querySelector(".close-btn");
const navbar = document.querySelector(".links-container");


hamMenu.addEventListener("click",function(){

    navbar.classList.toggle("open");
   closeBtn.classList.add("open");
   hamMenu.classList.add("hide");

  
})


closeBtn.addEventListener("click",()=>{
   

    navbar.classList.remove("open");
    hamMenu.classList.remove("hide");
    closeBtn.classList.remove("open");
})


