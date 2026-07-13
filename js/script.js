console.log("Projeto FORA DO SITE iniciado!");

// INTRO
const intro = document.getElementById("intro");
const conteudo = document.getElementById("conteudo");
const entrar = document.getElementById("entrar");

entrar.addEventListener("click", () => {
    intro.style.display = "none";
    conteudo.style.display = "block";
});

// BOTÃO LOGIN
const login = document.getElementById("login");

if (login) {
    login.addEventListener("click", () => {

        window.location.href = "artista/index.html";

    });
}