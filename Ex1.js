let botao = document.querySelector("#botao");
botao.style.background="blue";

botao.addEventListener("mouseover", fundoVerde);
botao.addEventListener("mouseout", fundoAzul);

function fundoVerde(){
    botao.style.background="green";
}

function fundoAzul(){
    botao.style.background="blue";
}


