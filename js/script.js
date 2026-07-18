document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const conteudo = document.getElementById("conteudo");
    const entrar = document.getElementById("entrar");
    const login = document.getElementById("login");

    const openLoginPage = () => {
        const loginUrl = new URL("../login/index.html", window.location.href).href;
        window.location.href = loginUrl;
    };

    if (entrar && intro && conteudo) {
        entrar.addEventListener("click", () => {
            intro.style.display = "none";
            conteudo.style.display = "block";
        });
    }

    if (login) {
        login.addEventListener("click", openLoginPage);
    }
});
