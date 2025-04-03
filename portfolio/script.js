const body = document.body;

// Criando o efeito elétrico
const createSpark = (x, y) => {
    const spark = document.createElement("div");
    spark.classList.add("spark");
    body.appendChild(spark);
    
    spark.style.left = `${x}px`;
    spark.style.top = `${y + window.scrollY}px`; // Ajusta para descer com a rolagem
    
    setTimeout(() => {
        spark.remove();
    }, 300);
};

// Adiciona faíscas conforme o mouse se move
document.addEventListener("mousemove", (e) => {
    createSpark(e.clientX, e.clientY);
});

// Adiciona faísca extra ao clicar
document.addEventListener("click", (e) => {
    createSpark(e.clientX, e.clientY);
});

// Estilizando as faíscas

const style = document.createElement("style");
style.innerHTML = `
    .spark {
        position: absolute;
        width: 15px;
        height: 15px;
        background-color: rgb(255, 0, 0); // Cor vermelha
        box-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
        border-radius: 50%;
        pointer-events: none;
        animation: sparkAnimation 0.3s ease-out;
    }

    @keyframes sparkAnimation {
        from {
            transform: scale(1.2);
            opacity: 1;
        }
        to {
            transform: scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);