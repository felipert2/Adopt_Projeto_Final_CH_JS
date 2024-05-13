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
    var sliderApadrinhar2 = document.getElementsByClassName('sliderApadrinhar')[1]; 
    var prevBtn = document.getElementsByClassName('prevBtn')[0];
    var nextBtn = document.getElementsByClassName('nextBtn')[0];
    var prevBtn2 = document.getElementsByClassName('prevBtn2')[0]; 
    var nextBtn2 = document.getElementsByClassName('nextBtn2')[0]; 
    var productWidth = sliderApadrinhar.offsetWidth / 2; 
    var currentPosition = 0;

    productsData.forEach(function(pets) {
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


        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productidade);
        productDiv.appendChild(productporte);
        productDiv.appendChild(ajudar);

        sliderApadrinhar.appendChild(productDiv);
    });

    productsData2.forEach(function(pets) {
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

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productidade);
        productDiv.appendChild(productporte);
        productDiv.appendChild(ajudar);

        sliderApadrinhar2.appendChild(productDiv);
    });

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

    nextBtn.addEventListener('click', function() {
        moveCollectiveProducts('next');
    });

    prevBtn.addEventListener('click', function() {
        moveCollectiveProducts('prev');
    });

    nextBtn2.addEventListener('click', function() {
        moveCollectiveProducts2('next');
    });

    prevBtn2.addEventListener('click', function() {
        moveCollectiveProducts2('prev');
    });

    var modal = document.getElementById("myModal");

    modal.querySelector(".close").addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";}
           });
});