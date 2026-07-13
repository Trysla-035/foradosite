// VARIAVEIS GLOBAIS
const api_url = "https://api-trysla.vercel.app/api"
// const api_url = "http://localhost:3000/api"
const redirect_No_user = "../index.html"


function selected(button) {
    // Remove the 'selected' class from all buttons
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked button
    button.classList.add('selected');
}


function get_social_tag(tipo, link) {
    let url = "https://static.cdninstagram.com/rsrc.php/yr/r/rzWiSjZRxk5.webp"

    console.log(tipo)
    switch (tipo) {
        case "instagram":
            url = "https://static.cdninstagram.com/rsrc.php/yr/r/rzWiSjZRxk5.webp"
            break;
        case "youtube":
            url = "https://imgs.search.brave.com/8bFNhVDQFgKJSqVX5Szd-LpN-3V8yX5fuw10N6oT8iw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi95b3V0dWJl/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy01/MDIwMi5wbmc_Zj13/ZWJwJnc9MTI4"
    }

    const rede_social_tag =
        `
            <div class="rede-social" onclick="encaminhar('${link}')">
                <img src="${url}" alt="">
                <p>${tipo}</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
    `
    return rede_social_tag
}

function encaminhar(url) {
    window.location.href = url
}

const params = new URLSearchParams(window.location.search)
if (params) {
    const nome = params.get('nome')

    // mudar nome
    fetch(`${api_url}/usuario/${nome}`)
        .then(async (response) => {
            console.log(response.status)
            if (response.status == 200) {
                let dado = await response.json()
                dado = dado[0]
                const p_nome = document.querySelector('.nome')
                p_nome.textContent = `${dado.nome} | ${dado.email}`
                const p_titulo = document.querySelector('#titulo')
                p_titulo.textContent = `${dado.titulo}`
            }else {
                window.location.href = redirect_No_user
            }
        })


    fetch(`${api_url}/redes/${nome}`)
        .then(async (response) => {
            if (response.status == 200) {
                let dado = await response.json()
                dado = dado[0]
                const div_redes_sociais = document.querySelector('.redes-sociais')
                console.log(dado)
                for ( [tipo, link] of Object.entries(dado).slice(3)) {
                    div_redes_sociais.innerHTML += (get_social_tag(tipo, link))
                }
            }
        })
}else {
    window.location.href(redirect_No_user)
}