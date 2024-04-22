document.addEventListener('DOMContentLoaded', function() {
  const ordenacaoSelect = document.getElementById('ordenacao');
  const cardContainer = document.querySelector('.card-container');

  // Função para comparar títulos e ordenar
  function ordenarCards(cards, ordem) {
      const sortedCards = Array.from(cards).sort((a, b) => {
          const titleA = a.querySelector('.title').textContent.trim().toUpperCase();
          const titleB = b.querySelector('.title').textContent.trim().toUpperCase();
          if (ordem === 'asc') {
              return titleA.localeCompare(titleB);
          } else {
              return titleB.localeCompare(titleA);
          }
      });
      return sortedCards;
  }

  // Função para renderizar os cards na página
  function renderizarCards(cards) {
      // Limpa o container
      cardContainer.innerHTML = '';

      // Adiciona os cards ordenados de volta ao container
      cards.forEach(card => {
          cardContainer.appendChild(card);
      });
  }

  // Evento de mudança na seleção de ordenação
  ordenacaoSelect.addEventListener('change', function() {
      const selectedValue = ordenacaoSelect.value;

      if (selectedValue === 'asc' || selectedValue === 'desc') {
          const cards = cardContainer.querySelectorAll('.card');
          const sortedCards = ordenarCards(cards, selectedValue);

          // Renderiza os cards ordenados
          renderizarCards(sortedCards);
      }
  });
});
