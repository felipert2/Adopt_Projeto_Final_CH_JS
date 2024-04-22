// Seleciona o elemento com a classe "highlight"
var word = document.querySelector('.mudaCor');

// Adiciona um evento de clique ao elemento
word.addEventListener('click', function() {
    // Muda a cor da palavra para vermelho
    word.style.color = 'orange';
});