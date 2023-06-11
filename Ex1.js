let botao = document.querySelector("#botao");
botao.style.background="blue";
let estaQuebrado =false;

/*outro jeito de escrever a funçao */
botao.addEventListener("mouseover", e =>{
    if (estaQuebrado==false)
        botao.style.background="green";
});
botao.addEventListener("mouseout", fundoAzul);


function fundoAzul(){
    if (estaQuebrado==false)
        botao.style.background="blue";
}

botao.addEventListener("click", e =>{
    botao.style.background="red";
    botao.innerHTML="quebrei";
    estaQuebrado =true;
});
