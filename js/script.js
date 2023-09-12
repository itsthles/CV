console.log("Waiting to connect!");
// setTimeout(function () {console.log("We are online!")}, 2200);
let count = 0;
const myInterval = setInterval(function(){
    console.log("We are almost there...");
    count++;
    if (count == 10) {
        console.log("We are online!");
        clearInterval(myInterval);}
}, 1500);

const codename = "Topo";
const navbtn = document.getElementById("menu-icon");
navbtn.addEventListener('click', () => {
    getElementById("nav").style.display = "flex";
});
