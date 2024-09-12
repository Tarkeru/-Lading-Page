/*

Quando clicar na seta para avançar temos de esconder todas as imagens e mostrar a próxima imagem

    a imagem atual começa em 0 porque é primeir imagem, assim que for clicado no avançar eu preciso
     adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a próxima imagem

        -esconder todas imagens
        pegar todas imagens, descobrir qual é a próxima, e colocar a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

/*Seta avançar*/

setaAvancar.addEventListener("click", function () {

    const totalDeImagens = imagensPainel.length -1;

    if(imagemAtual === totalDeImagens){
        return;

    }

imagemAtual++;

esconder();

mostrar();




});
/*Seta voltar*/


setaVoltar.addEventListener("click", function () {

    if(imagemAtual === 0){
        return;
    }
 
 imagemAtual--;

 esconder();

mostrar();
 });

 function esconder(){
    imagensPainel.forEach(imagem =>{
        imagem.classList.remove("mostrar");
    });   
    
 }

 function mostrar(){
    imagensPainel[imagemAtual].classList.add("mostrar");

 }
