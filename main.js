// Getting div's

let body = document.getElementById("bodyColor");
let generateButton = document.getElementById("generateColor");
let displayColor = document.getElementById("displayColor");
let copyButton = document.getElementById("copyButton");

// Adding listeners

generateButton.addEventListener('click', () => {
    generateRandomColor();
})

copyButton.addEventListener('click', () => {
    copyColor();
})

// Function generate color

function generateRandomColor() {

    let value1 = Math.floor(Math.random() * 255);
    let value2 = Math.floor(Math.random() * 255);
    let value3 = Math.floor(Math.random() * 255);

    let finalColor = "rgb(" + value1 + ", " + value2 + ", " + value3 + ")";
    body.style.backgroundColor = finalColor;
    displayColor.value = value1 + ", " + value2 + ", " + value3;
}

// Copy color

function copyColor() {

    displayColor.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    alert("¡Copiado al portapapeles con exito!");

}