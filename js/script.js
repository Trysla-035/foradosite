console.log("Projeto FORADOSITE iniciado!");

const botaoConhecer = document.getElementById("botaoConhecer");
const links = document.getElementById("links");
const botaoConheçaoProjetoFORADOSITE = document.getElementById("botaoConheçaoProjetoFORADOSITE");
const ConheçaoProjetoFORADOSITE = document.getElementById("ConheçaoProjetoFORADOSITE");
const intro = document.getElementById("intro");

ConheçaoProjetoFORADOSITE.addEventListener("click", () => {
    intro.style.display = "none";
});