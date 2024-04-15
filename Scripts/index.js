let total = 0;

// Função para validar o valor inserido
function validarValor(valor) {
    return !isNaN(valor); // Retorna true se o valor for numérico, false caso contrário
}

// Função para atualizar o total
function atualizarTotal(valor) {
    total += valor; // Soma o valor ao total
    document.getElementById("resultado").innerText = "R$" + total; // Atualiza o elemento HTML com o novo total
}

document.getElementById("btnSomar").addEventListener("click", function () {
    // Desestruturação para extrair diretamente o valor do campo de entrada
    const { value } = document.getElementById("inputValor");

    // Converte o valor para número
    const valor = parseFloat(value);

    // Valida o valor inserido
    if (validarValor(valor)) {
        // Se o valor for válido, atualiza o total
        atualizarTotal(valor);
    } else {
        // Se o valor não for válido, mostra um alerta
        alert("Por favor, insira um valor numérico válido.");
    }

    // Limpa o campo de entrada
    document.getElementById("inputValor").value = "";
});

// Função para inicializar o total quando o site é carregado
function inicializarTotal() {
    // Verifica se há um valor de total armazenado no localStorage
    const storedTotal = localStorage.getItem("total");
    if (storedTotal !== null) {
        total = parseFloat(storedTotal);
        document.getElementById("resultado").innerText = "R$" + total;
    }
}

// Função para validar o valor inserido
function validarValor(valor) {
    return !isNaN(valor); // Retorna true se o valor for numérico, false caso contrário
}

// Função para atualizar o total
function atualizarTotal(valor) {
    total += valor; // Soma o valor ao total
    document.getElementById("resultado").innerText = "R$" + total; // Atualiza o elemento HTML com o novo total

    // Armazena o novo total no localStorage
    localStorage.setItem("total", total.toString());
}

document.addEventListener("DOMContentLoaded", function () {
    inicializarTotal(); // Chama a função para inicializar o total quando o site é carregado
});
