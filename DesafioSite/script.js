let btn = document.getElementById("btn")
let btntext = document.getElementById("btntext")
let btnicon = document.getElementById("btnicon")
btn.onclick = function () {
    document.body.classList.toggle("dark-theme")

    if (document.body.classList.contains("dark-theme")) {
        btnicon.src = "sun.png"
        btntext.innerHTML = "Light"
    } else {
        btnicon.src = "moon.png"
        btntext.innerHTML = "Dark"

    }
}