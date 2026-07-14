
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


function selected(button) {
    // Remove the 'selected' class from all buttons
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked button
    button.classList.add('selected');
}