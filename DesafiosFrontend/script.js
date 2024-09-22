const botao = document.getElementById("botao")

botao.addEventListener("click", function(){ 
    const ativo = document.body.classList.toggle("dark")
    botao.textContent = ativo ? "Alternar para Light" : "Alternar para DarkMode" 
})