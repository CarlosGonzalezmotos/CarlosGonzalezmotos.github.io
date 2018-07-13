function calcularPeso(){
	var gordo = document.getElementById("peso");
	var gordoman = Number(gordo.value);

	var alto = document.getElementById("altura");
	var altoman= Number(alto.value);
    
   	var pesototal = gordoman / (altoman*altoman);

   	var imc =document.getElementById("resultado");
   	imc.value= pesototal;

    var tocacojones =document.getElementById("texto");
	if (pesototal>=28) {
		console.log("Gordo");
		texto.innerHTML= "Eres un gordo y hueles mal";
	}
	else if (pesototal<=27) {
		console.log("Estas guay");
		texto.innerHTML="Estas to buenorro";
	 }
}