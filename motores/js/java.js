function enviar(){
    var almacen = window.localStorage;
    numeroaciertos=Number(almacen.getItem("na"));
    numerofallos=Number(almacen.getItem("no"));

    
    var bien = document.getElementById("OK").checked;
    var foto = document.getElementById("F");

    if(bien==true){
        numeroaciertos++;
        foto.src="images/joker.gif";
    } else{
        numerofallos++;
        foto.src="images/bean.gif";   
    }   
    console.log("Aciertos " + numeroaciertos);
    console.log("Fallos " + numerofallos);
    almacen.setItem("no",numerofallos);
    almacen.setItem("na",numeroaciertos);
}
function cargarResultados(){
    var almacen = window.localStorage;
    numeroaciertos=Number(almacen.getItem("na"));
    numerofallos=Number(almacen.getItem("no"));
    var marcador = document.getElementById("mostraraciertos");
    var acierto = document.getElementById("mostrarerror");
    marcador.innerHTML=numeroaciertos;
    acierto.innerHTML=numerofallos;
}
function restablecer(){
    var almacen = window.localStorage;
    almacen.setItem("na", "0");
    almacen.setItem("no","0");
}
