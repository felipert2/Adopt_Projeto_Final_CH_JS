let totalArrecadado = 0;

function atualizarTotal(valor) {
    totalArrecadado += valor;
    document.getElementById('totalArrecadado').innerText = "R$ " + totalArrecadado.toFixed(2);
}

function validarCampos() {
    const nome = document.getElementById('nome').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    let camposValidos = true;

    if (nome === '') {
        document.getElementById('erro-nome').style.display = 'block';
        camposValidos = false;
    } else {
        document.getElementById('erro-nome').style.display = 'none';
    }

    if (cidade === '') {
        document.getElementById('erro-cidade').style.display = 'block';
        camposValidos = false;
    } else {
        document.getElementById('erro-cidade').style.display = 'none';
    }

    return camposValidos;
}

document.querySelectorAll('.botao_doacao').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.botao_doacao').forEach(btn => {
            btn.classList.remove('selecionado');
        });
        this.classList.add('selecionado');
    });
});


document.getElementById('btnDoar').addEventListener('click', function() {
    if (validarCampos()) {
        const botaoSelecionado = document.querySelector('.botao_doacao.selecionado');
        if (botaoSelecionado !== null) {
            const valor = parseFloat(botaoSelecionado.dataset.valor);
            atualizarTotal(valor);
            document.getElementById('nome').value = '';
            document.getElementById('cidade').value = '';
            document.getElementById('erro-nome').style.display = 'none';
            document.getElementById('erro-cidade').style.display = 'none';
            document.getElementById('erro-total').style.display = 'none';
        } else {
            document.getElementById('erro-total').style.display = 'block';
        }
    } else {
        document.getElementById('erro-total').style.display = 'block';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const storedTotal = localStorage.getItem("totalArrecadado");
    if (storedTotal !== null) {
        totalArrecadado = parseFloat(storedTotal);
        document.getElementById("totalArrecadado").innerText = "R$ " + totalArrecadado.toFixed(2);
    }
});
