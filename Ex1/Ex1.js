let botao = document.querySelector("#botao");
botao.style.background="blue";
let estaQuebrado =false;
let contaCliques =0;

/*outro jeito de escrever a funçao */
botao.addEventListener("mouseover", e =>{
    if (estaQuebrado==false) /*para nao trocar depois de ter clicado*/
        botao.style.background="green";
});
botao.addEventListener("mouseout", fundoAzul);


function fundoAzul(){
    if (!estaQuebrado) /*para nao trocar depois de ter clicado*/
        botao.style.background="blue";
}

botao.addEventListener("click", e =>{
    contaCliques ++;//conta quantos cliques. ContaCliques = ContaCliques+1
    if (contaCliques>=10){
        botao.style.background="red";
        botao.innerHTML="quebrei";
        estaQuebrado =true;
    }
    
    
});
