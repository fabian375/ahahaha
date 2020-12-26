window.addEventListener("load", changeBackground);

function changeBackground() {
    const listImages = ["cataratas.jpg", "machu-picchu.jpg", "perito_moreno.jpg", "roquez.jpg", "tatacoa.jpg", "titicaca.jpg"];
    let index = Math.floor(Math.random() * 6);
    let someImages = listImages[index];
    let pathImages = "../images/" + someImages;
    document.body.style.backgroundImage = "url('" + pathImages + "')";

    if (index == 0) {
        document.getElementById("description").innerHTML = "Cataratas de Iguazu, Argentina";
    }
    else if (index == 1) {
        document.getElementById("description").innerHTML = "Machu Picchu, Peru";
    }
    else if (index == 2) {
        document.getElementById("description").innerHTML = "Glaciar Perito Moreno, Argentina";
    }
    else if (index == 3) {
        document.getElementById("description").innerHTML = "roquez, Peru";
    }
    else if (index == 4) {
        document.getElementById("description").innerHTML = "tatacoa, Argentina";
    }
    else if (index == 5) {
        document.getElementById("description").innerHTML = "titicaca, Peru";
    }
    
}
