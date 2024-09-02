let operacaoAtual = '';
let operador = '';
let resultado = '';

function adicionarNumero(numero) {
    operacaoAtual += numero;
    atualizarTela(operacaoAtual);
    document.getElementById('selecionado').innerHTML = numero; 
}

function adicionarOperacao(operacao) {
    if (operacaoAtual != '') {
        operador = operacao;
        operacaoAtual += operacao;
        atualizarTela(operacaoAtual);
        document.getElementById('selecionado').innerHTML = operacao; 
    }
}

function Calcular() {
    try {
        resultado = eval(operacaoAtual);
        atualizarTela(resultado);
        operacaoAtual = resultado.toString();
        document.getElementById('selecionado').innerHTML = resultado; 
    } catch (e) {
        atualizarTela('erro');
        operacaoAtual = '';
    }
}

function Limpar() {
    operacaoAtual = '';
    operador = '';
    resultado = '';
    atualizarTela(0);
    document.getElementById('selecionado').innerHTML = ''; 
}

function atualizarTela(valor) {
    document.getElementById('resultado').innerHTML = valor;
}
