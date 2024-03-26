/* var total = 0;

document.getElementById("btnSomar").addEventListener("click", function() {
    // Obtém o valor inserido pelo usuário
    var valor = parseFloat(document.getElementById("inputValor").value);

    // Verifica se o valor é numérico
    if (!isNaN(valor)) {
        // Adiciona o valor ao total
        total += valor;

        // Exibe o total acumulado
        document.getElementById("resultado").innerText =  "R$" + total;
    } else {
        alert("Por favor, insira um valor numérico válido.");
    }

    // Limpa o campo de entrada
    document.getElementById("inputValor").value = "";
});
*/

// ABAIXO FIZ O DESAFIO COMPLEMENTAR DA ENTREGA DO DIA 27/03 
// com operador ternário, desestruturação e alguns ajustes 

let total = 0;

document.getElementById("btnSomar").addEventListener("click", function () {
    // confere o valor inserido pelo usuário e converte para número
    const valor = parseFloat(document.getElementById("inputValor").value);

    // verifica se o valor é numérico
    const isNumeric = !isNaN(valor);

    // soma o valor ao total se for numérico, caso não, mostra o alerta
    isNumeric ? total += valor : alert("Por favor, insira um valor numérico válido.");

    // total acumulado
    document.getElementById("resultado").innerText = "R$" + total;

    // limpa o campo de entrada
    document.getElementById("inputValor").value = "";
});
