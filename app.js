const copyRight = document.getElementById("copyright");
const popsUps = document.getElementById("pops-up");
const BTN = document.getElementById("btn");

setTimeout(() => {
    popsUps.style.display = "flex";
}, 3000)

BTN.addEventListener("click", () =>{
    popsUps.style.display = "none";
}) 


const year = new Date().getFullYear();
copyRight.innerText = "© " + year + " All Right Reserved";