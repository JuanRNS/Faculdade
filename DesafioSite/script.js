let btn = document.getElementById("btn");
let btntext = document.getElementById("btntext");
let btnicon = document.getElementById("btnicon");
let header = document.querySelector("header");
 
btn.onclick = function () {
    document.body.classList.toggle("dark-theme");
 
    if (document.body.classList.contains("dark-theme")) {
        header.classList.remove("cabeca");
        header.classList.ad("dark-header");
 
        btnicon.src = "sun.png";
        btntext.innerHTML = "Light";
    } else {
        header.classList.remove("dark-header");
        header.classList.add("cabeca");
 
        btnicon.src = "moon.png";
        btntext.innerHTML = "Dark";
    }
};