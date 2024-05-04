document.addEventListener("DOMContentLoaded", function() {
    var productsData = [
        { name: "Ronaldo", idade: "2 anos", image: "../../Assets/ronaldo.png", porte:"Porte Médio, SRD" },
        { name: "Jake", idade: "5 anos", image: "../../Assets/jake.png", porte:"Porte Pequeno, SRD"},
        { name: "Jorge", idade: "2 anos", image: "../../Assets/jorge.png", porte:"Porte Médio, SRD" },
        { name: "Abigail", idade: "1 ano", image: "../../Assets/cachorro4.png", porte:"Porte Pequeno, SRD" },
        { name: "Luna", idade: "4 anos", image: "../../Assets/cachorro5.png", porte:"Porte Médio, SRD" },
        { name: "Madá", idade: "3 anos", image: "../../Assets/cachorro7.png", porte:"Porte Médio, SRD" },
    ];

    var productsData2 = [
        { name: "Whiskers", idade: "3 anos", image: "../../Assets/gato1.png", porte:"Porte Pequeno, SRD" },
        { name: "Simba", idade: "1 ano", image: "../../Assets/gato2.png", porte:"Porte Pequeno, SRD"},
        { name: "Bella", idade: "2 anos", image: "../../Assets/gato3.png", porte:"Porte Médio, SRD" },
        { name: "Oliver", idade: "1 ano", image: "../../Assets/gato4.png", porte:"Porte Pequeno, SRD" },
        { name: "Chloe", idade: "1 ano", image: "../../Assets/gato5.png", porte:"Porte Pequeno, SRD" },
        { name: "Nala", idade: "4 Meses", image: "../../Assets/gato6.png", porte:"Porte Pequeno, SRD" },
    ];

    var sliderApadrinhar = document.getElementsByClassName('sliderApadrinhar')[0];
    var sliderApadrinhar2 = document.getElementsByClassName('sliderApadrinhar')[1]; // Adicione a classe 'sliderApadrinhar' ao segundo slider no HTML
    var prevBtn = document.getElementsByClassName('prevBtn')[0];
    var nextBtn = document.getElementsByClassName('nextBtn')[0];
    var prevBtn2 = document.getElementsByClassName('prevBtn2')[0]; // Adicione a classe 'prevBtn' ao botão de anterior do segundo slider no HTML
    var nextBtn2 = document.getElementsByClassName('nextBtn2')[0]; // Adicione a classe 'nextBtn' ao botão de próximo do segundo slider no HTML
    var productWidth = sliderApadrinhar.offsetWidth / 2; // Largura de cada produto
    var currentPosition = 0;

    // Iterar sobre os dados dos produtos e criar elementos HTML para cada um (para o primeiro slider)
    productsData.forEach(function(pets) {
        // Criar elementos HTML para o produto
        var productDiv = document.createElement('div');
        productDiv.classList.add('pets');

        var productImage = document.createElement('img');
        productImage.src = pets.image;
        productImage.alt = pets.name;

        var productName = document.createElement('h4');
        productName.textContent = pets.name;

        var productidade = document.createElement('h3');
        productidade.textContent = pets.idade;

        var productporte = document.createElement('p');
        productporte.textContent = pets.porte;

        var ajudar = document.createElement('a');
        ajudar.textContent = "Quero Ajudar";
        ajudar.href = "#"
        ajudar.addEventListener('click', function() {
            modal.style.display = "block";
        });


        // Adicionar os elementos do produto ao elemento pai
        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productidade);
        productDiv.appendChild(productporte);
        productDiv.appendChild(ajudar);

        sliderApadrinhar.appendChild(productDiv);
    });

    // Iterar sobre os dados dos produtos e criar elementos HTML para cada um (para o segundo slider)
    productsData2.forEach(function(pets) {
        // Criar elementos HTML para o produto
        var productDiv = document.createElement('div');
        productDiv.classList.add('petsGato');

        var productImage = document.createElement('img');
        productImage.src = pets.image;
        productImage.alt = pets.name;

        var productName = document.createElement('h4');
        productName.textContent = pets.name;

        var productidade = document.createElement('h3');
        productidade.textContent = pets.idade;

        var productporte = document.createElement('p');
        productporte.textContent = pets.porte;

        var ajudar = document.createElement('a');
        ajudar.textContent = "Quero Ajudar";
        ajudar.href = "#"
        ajudar.addEventListener('click', function() {
            modal.style.display = "block";
        });

        // Adicionar os elementos do produto ao elemento pai
        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productidade);
        productDiv.appendChild(productporte);
        productDiv.appendChild(ajudar);

        sliderApadrinhar2.appendChild(productDiv);
    });

    // Função para mover os produtos para a esquerda ou direita (para o primeiro slider)
    function moveCollectiveProducts(direction) {
        var sliderWidth = sliderApadrinhar.offsetWidth;
        var totalWidth = sliderApadrinhar.scrollWidth;
        if (direction === 'next') {
            currentPosition = Math.min(currentPosition + productWidth, totalWidth - sliderWidth);
        } else {
            currentPosition = Math.max(currentPosition - productWidth, 0);
        }
        sliderApadrinhar.style.transform = 'translateX(' + (-currentPosition) + 'px)';
    }

    // Função para mover os produtos para a esquerda ou direita (para o segundo slider)
    function moveCollectiveProducts2(direction) {
        var sliderWidth = sliderApadrinhar2.offsetWidth;
        var totalWidth = sliderApadrinhar2.scrollWidth;
        if (direction === 'next') {
            currentPosition = Math.min(currentPosition + productWidth, totalWidth - sliderWidth);
        } else {
            currentPosition = Math.max(currentPosition - productWidth, 0);
        }
        sliderApadrinhar2.style.transform = 'translateX(' + (-currentPosition) + 'px)';
    }

    // Adiciona event listener para o botão de próximo (para o primeiro slider)
    nextBtn.addEventListener('click', function() {
        moveCollectiveProducts('next');
    });

    // Adiciona event listener para o botão de anterior (para o primeiro slider)
    prevBtn.addEventListener('click', function() {
        moveCollectiveProducts('prev');
    });

    // Adiciona event listener para o botão de próximo (para o segundo slider)
    nextBtn2.addEventListener('click', function() {
        moveCollectiveProducts2('next');
    });

    // Adiciona event listener para o botão de anterior (para o segundo slider)
    prevBtn2.addEventListener('click', function() {
        moveCollectiveProducts2('prev');
    });

    // Referenciar o modal
    var modal = document.getElementById("myModal");

    // Quando o usuário clicar no botão de fechar, ocultar o modal
    modal.querySelector(".close").addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Também podemos fechar o modal se o usuário clicar fora dele
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";}
           });
});