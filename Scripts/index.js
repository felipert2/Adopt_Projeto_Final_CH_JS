var total = 0;

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