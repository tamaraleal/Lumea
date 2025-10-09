const sombra = document.getElementById("sombra");
const links1 = document.getElementById("container_esquerda");
const links2 = document.getElementById("container_direita");

function mostrarMenu() {
    if (window.getComputedStyle(sombra).right != "0px") {
        sombra.style.right = "0";
        // links1.style.right = "20px";
        
    } else {
        sombra.style.right = "-101vw";
        // links1.style.right = "-101vw";
    }
}