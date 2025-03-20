let listaNumerosSorteados = [];
let limiteNumero = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagem(){
    exibirTextoNaTela('h1','Jogo do Número da Sorte');
    exibirTextoNaTela('p', 'Digite aqui um número de 1 a 10');
}

exibirMensagem();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' :  'tentativa';
        if (numeroSecreto == chute) {
            exibirTextoNaTela ('h1','Você acertou!');
            exibirTextoNaTela ('p', `Você descobriu que o número secreto é igual a ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }   else {
            if (numeroSecreto > chute){
                    exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
                } else {
                    exibirTextoNaTela ('p', `O número secreto é menor que ${chute}`);
                }
                tentativas++;
                limparCampo();
            }  
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteNumero + 1);
    let quantidadeDeElementosLista = listaNumerosSorteados.length;
    if (quantidadeDeElementosLista == limiteNumero){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    } 

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value=('');

}

function reiniciarJogo() {
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    exibirMensagem();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}