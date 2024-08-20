const fan = document.getElementById("fan");

window.addEventListener("scroll", ()=> {
    let value = window.scrollY * .5;
    fan.style.transform = `translatex(-60%) rotate(${value}deg)`;
});