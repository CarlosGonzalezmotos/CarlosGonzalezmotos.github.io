function mamiferos() {
    reiniciar();
    var mamiferos = document.querySelectorAll(".mamifero");
    for (i = 0; i < mamiferos.length; i++) {
        mamiferos[i].style.opacity = "1";
    }
    console.log(mamiferos);
}
function todos() {
    reiniciar();
    var todos = document.querySelectorAll("img");
    for (i = 0; i < todos.length; i++) {
        todos[i].style.opacity = "1";
    }
}
function orni(){
    reiniciar();
    var orni = document.querySelector("#orni");
    orni.style.opacity="1";
}
function patito(){
    reiniciar();
    var patitofeo = document.querySelector("#pato");
    patitofeo.style.opacity="1";
}
function libelula(){
    reiniciar();
    var li = document.querySelector("#libelula");
    li.style.opacity ="1";
}
function reiniciar(){
    var todos = document.querySelectorAll("img");
    for (i = 0; i < todos.length; i++) {
        todos[i].style.opacity = "0.2";
    }
}