
const url_login = "../artista/index.html"

if (document.cookie && document.cookie.includes("user_id=")) {
    window.location.href = "../artista/index.html"
}

const api_url = "https://api-trysla.vercel.app/api/usuario"
// const api_url = "http://localhost:3000/api/usuario"

let cadastro = false;
const h1_titulo = document.getElementById("titulo");
const input_nome = document.getElementById("nome");
const input_senhaConfirmar = document.getElementById("confirmar");
const p_error = document.getElementById("error");
const span_trocar = document.querySelector("#trocar span");
const form = document.getElementById("form");

span_trocar.addEventListener("click", () => {
    cadastro = !cadastro;
    if (cadastro) {
        h1_titulo.innerHTML = "Cadastro";
        input_senhaConfirmar.classList.remove("hidden");
        span_trocar.innerHTML = "Fazer login";
        input_nome.classList.remove("hidden")
    } else {
        h1_titulo.innerHTML = "Login";
        input_senhaConfirmar.classList.add("hidden");
        span_trocar.innerHTML = "Cadastrar";
        input_nome.classList.add("hidden")

    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let nome = input_nome.value
    if (cadastro) {
        let confirmarSenha = input_senhaConfirmar.value;
        if (confirmarSenha) {
            if (senha === confirmarSenha) {
                criarUser(nome, senha, email)
                return;
            }
        }
        p_error.textContent = "coloque a mesma senha"
    } else {
        loginUser(email, senha)
    }
});

function criarUser(nome, senha, email) {
    fetch(api_url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                senha: senha,
                email: email
            })
        }
    )
        .then(async r => {
            const response = await r.json()
            if (r.ok) {
                const userId = response.data?.user?.id ?? response.data?.id ?? response.id
                if (userId) {
                    document.cookie = "user_id=" + userId + "; path=/";
                    window.location.href = "../artista/index.html"
                    return
                }
            }
            p_error.textContent = response.error || "Erro ao cadastrar usuário"
        })
        .catch(() => {
            p_error.textContent = "Erro de rede. Tente novamente."
        })
}

function loginUser(email, senha) {
    fetch(`${api_url}/conecta`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                senha: senha,
                email: email
            })
        }
    )
        .then(async r => {
            const response = await r.json()
            if (r.ok && response.data?.user?.id) {
                document.cookie = "user_id=" + response.data.user.id + "; path=/"
                window.location.href = "../artista/index.html"
            } else {
                p_error.textContent = response.error || "Email ou senha incorretos"
            }
        })
        .catch(() => {
            p_error.textContent = "Erro de rede. Tente novamente."
        })

}