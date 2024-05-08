document.addEventListener("DOMContentLoaded", function () {
  const ordenacaoSelect = document.getElementById("ordenacao");
  const cardContainer = document.querySelector(".card-container");

  function ordenarCards(cards, ordem, tipoOrdenacao) {
    let sortedCards;
    if (tipoOrdenacao === "alfabetica") {
      sortedCards = Array.from(cards).sort((a, b) => {
        const titleA = a
          .querySelector(".title")
          .textContent.trim()
          .toUpperCase();
        const titleB = b
          .querySelector(".title")
          .textContent.trim()
          .toUpperCase();
        if (ordem === "asc") {
          return titleA.localeCompare(titleB);
        } else {
          return titleB.localeCompare(titleA);
        }
      });
    } else if (tipoOrdenacao === 'estado') {
        sortedCards = Array.from(cards).sort((a, b) => {
            const estadoA = a.dataset.estado.toUpperCase();
            const estadoB = b.dataset.estado.toUpperCase();
            if (ordem === 'asc') {
                return estadoA.localeCompare(estadoB);
            } else {
                return estadoB.localeCompare(estadoA);
            }
      });
    }
    return sortedCards;
  }

  function renderizarCards(cards) {
    cardContainer.innerHTML = "";
    cards.forEach((card) => {
      cardContainer.appendChild(card);
    });
  }

  ordenacaoSelect.addEventListener("change", function () {
    const selectedValue = ordenacaoSelect.value;

    if (selectedValue === "asc" || selectedValue === "desc") {
      const cards = cardContainer.querySelectorAll(".card");
      const sortedCards = ordenarCards(cards, selectedValue, "alfabetica");
      renderizarCards(sortedCards);
    } else if (selectedValue === "estado") {
      const cards = cardContainer.querySelectorAll(".card");
      const sortedCards = ordenarCards(cards, "asc", "estado");
      renderizarCards(sortedCards);
    }
  });
});
