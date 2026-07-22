document.addEventListener("DOMContentLoaded", () => {
      const openLoginPage = () => {
        const loginUrl = new URL("../login/index.html", window.location.href).href;
        window.location.href = loginUrl;
    };
     // Botão ENTRAR
    entrar.addEventListener("click", () => {
        intro.style.display = "none";
        conteudo.style.display = "block";
    });

    // Botão LOGIN
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