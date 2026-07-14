
const api_url = "https://api-trysla.vercel.app/api"
// const api_url = "http://localhost:3000/api"
const redirect_No_user = "../index.html"

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
            } else {
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
                for ([tipo, link] of Object.entries(dado).slice(3)) {
                    div_redes_sociais.innerHTML += (get_social_tag(tipo, link))
                }
            }
        })
} else {
    window.location.href(redirect_No_user)
}