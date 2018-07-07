function askOperation (){
	question = prompt("Que operacion quieres usar?");
	return question;
}
function volCilindro (radio, altura){
	    answer = Math.PI * Math.pow(radio, 2) * altura;
	alert ("El volumen del cilindro es: " + answer);
}
function onzasToneladas (onzas){
	var answer = onzas * 0.0000283495;
	alert(onzas + " onzas equivalen a " + answer + "toneladas");	
}
function factorizacion (numero){
	var vlrinicial = 1;
	for (var cont = 2; cont <= numero; cont++){
		vlrinicial = vlrinicial * cont;
	}
	alert("El resultado es " + vlrinicial);
}
askOperation();
if(question === "volumen de un cilindro"){
	volCilindro(prompt("Cual es el radio del cilindro?"), prompt("Cual es la altura del cilindro?"));
}
if(question === "transformar de onzas a toneladas"){
	onzasToneladas(prompt("Inserta el numero de onzas"));
}
if(question === "factorizacion de un numero"){
	factorizacion(prompt("Inserta el numero a factorizar"));
}