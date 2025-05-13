const botaoTema = document.getElementById("toggle-tema");

botaoTema.addEventListener("click", (e) => {
    e.preventDefault(); // Impede o redirecionamento por ser um <a>

    document.body.classList.toggle("tema-claro");

    // Atualiza o texto do botão
    if (document.body.classList.contains("tema-claro")) {
        botaoTema.textContent = "☀️ Tema";
        localStorage.setItem("tema", "claro");
    } else {
        botaoTema.textContent = "🌙 Tema";
        localStorage.setItem("tema", "escuro");
    }
});

// Carrega o tema salvo
window.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "claro") {
        document.body.classList.add("tema-claro");
        botaoTema.textContent = "☀️ Tema";
    }
});
