function validar() {
    var precio = 0;
    var marca = false;
    var resultado = document.getElementById("resultado");
    var nombre = document.getElementById("nombre").value;
    var dni = document.getElementById("dni").value;
    //Variables para hacer el reloj actual
    var fechaDeNacimiento = document.getElementById("fechaDeNacimiento").value;
    var fecha = new Date(fechaDeNacimiento);
    var anyoNacimiento = fecha.getFullYear();
    var hoy = new Date();
    var anyoActual = hoy.getFullYear();
    var edad = anyoActual - anyoNacimiento;

    //Lista para elegir cursos se puede elegir varios//
    var checkHtml = document.getElementById("html5").checked;
    var checkCss = document.getElementById("css3").checked;
    var checkJs = document.getElementById("js").checked;
    var checkJsA = document.getElementById("jsAvanzado").checked;
    var checkBoot = document.getElementById("bootstrap").checked;
    var checkJq = document.getElementById("jquery").checked;
    var checkAn = document.getElementById("angular").checked;
    //Lista para elegir metodo de contacto solo se puede elegir 1//
    var radioTe = document.getElementById("radio1").checked;
    var radioEm = document.getElementById("radio2").checked;
    var radioCo = document.getElementById("radio3").checked;

    if (nombre.trim() == "") {
        alert("Ingrese su nombre");
        marca = true;
    } else {
        console.log("nombre bien");
    }
    if (radioTe == true || radioEm == true || radioCo == true) {
        console.log("funciona bien radios");
    } else {
        alert("Proporciona una forma de contacto");
        marca = true;
    }

    if (checkHtml == true || checkCss == true || checkJs == true || checkJsA == true || checkBoot == true || checkJq == true || checkAn == true) {
        console.log(" Cursos funciona")
    } else {
        alert("Elige un curso");
        marca = true;
    }
    if (edad >= 18) {
        console.log("fecha bien");
        console.log(edad)
    } else {
        alert("Para acceder tiene que ser mayor de edad");
        marca = true;
    }
    if (checkHtml == true) {
        precio = precio + 300;
    }
    if (checkCss == true) {
        precio = precio + 200;
    }
    if (checkJs == true) {
        precio = precio + 500;
    }
    if (checkJsA == true) {
        precio = precio + 400;
    }
    if (checkBoot == true) {
        precio = precio + 200;
    }
    if (checkJq == true) {
        precio = precio + 300;
    }
    if (checkAn == true) {
        precio = precio + 800;
    }

    if (marca == true) {
        resultado.innerHTML = "0€";
    } else {
        resultado.innerHTML = precio + "€";
    }

}
