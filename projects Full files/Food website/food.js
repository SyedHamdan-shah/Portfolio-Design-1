
let icc=document.querySelector("#nav-icon");

let nav=document.querySelector(".navbar");

icc.addEventListener("click",()=>{
    console.log("click");
    nav.classList.toggle("active");

})

document.querySelectorAll(".navbar").forEach(n => 
    n.addEventListener("click", () => {
    icc.classList.remove("active")
    nav.classList.remove("active")
    }))