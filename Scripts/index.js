let total = 0;

document.getElementById("btnSomar").addEventListener("click", function () {
    // desestruturação para extrair diretamente o valor do campo de entrada
    const { value } = document.getElementById("inputValor");

    // confere o valor inserido pelo usuário e converte para número
    const valor = parseFloat(value);

    // verifica se o valor é numérico
    const isNumeric = !isNaN(valor);

    // soma o valor ao total se for numérico, caso não, mostra o alerta
    isNumeric ? total += valor : alert("Por favor, insira um valor numérico válido.");

    // total acumulado
    document.getElementById("resultado").innerText = "R$" + total;

    // limpa o campo de entrada
    document.getElementById("inputValor").value = "";
});