let clicou = true
let score = 0
let vidas = 3 

let body = document.querySelector("body")
 
let img = document.createElement("img")
img.src = "imagens/mosquito.png"
img.style.position = "absolute"
img.style.transform = "scale(0.2)"
 
function alteraTamanhoMosquito(){
    let numeroAleatorio = Math.random() * (0.2 - 0.1) + 0.1
    img.style.transform = `scale(${numeroAleatorio})`
}
 
function geraPosicao(){
    let y = Math.random() * (window.innerHeight * 0.70)
    let x = Math.random() * (window.innerWidth * 0.70)
 
    img.style.top = `${y}px`
    img.style.left = `${x}px`
}

// Esse addEven... serve para escutar alguma ação e o parênteses serve para mostrar qual função vai ser escutada
img.addEventListener("click", function(){
   clicou = true
})
 
setInterval(function(){
    alteraTamanhoMosquito()
    geraPosicao()
    body.appendChild(img)
// Esse (!clicou), quer dizer se caso for falso, essa exclamação quer dizer falso
// O console.log vai nos mostrar que a gente perdeu se não clicarmos no mosquito em um certo tempo, mas para não ficar pausando o jogo colocamos o "console,log"
// Esse vidas-- é a mesma coisa que o console.log
    if(!clicou){
      vidas--

      if(vidas == 2){
        let coracao3 = document.getElementById("coracao-3")
        coracao3.src = "imagens/pixel.png"

      }
      else if(vidas == 1){
        let coracao2 = document.getElementById("coracao-2")
        coracao2.src = "imagens/pixel.png"
      }

      else if(vidas ==0){
        let coracao1 = document.getElementById("coracao-1")
        coracao1.src = "imagens/pixel.png" 
      }
      
      if(vidas == 0){
        alert("Game Over")
      }
    }

    clicou = false

}, 1000)

img.remove()
 
//Isso adiciona um elemento no body [h1, p, div, etc]