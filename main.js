var puntuacion = 0
function change() {
    document.getElementById("mante").style.backgroundColor = "lightgreen";
}
function changec() {
    document.getElementById("mante").style.backgroundColor = "blue";
}
function mas() {
    puntuacion += 1
    document.getElementById("mante").innerHTML = (puntuacion)
}
function menos() {
    puntuacion -= 1
    document.getElementById("mante").innerHTML = (puntuacion)
}