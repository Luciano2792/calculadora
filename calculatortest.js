function askOperation (){
	question = prompt("Que operacion quieres usar?");
	return question;
}
//askOperation();
function volCilindro (radio, altura){
	var radio = prompt("Cual es el radio del cilindro?"); 
	var altura = prompt("Cual es la altura del cilindro?");
	var answer = Math.PI * Math.pow(radio, 2) * altura;
	alert ("El volumen del cilindro es: " + answer);
}
function onzasToneladas (onzas){
	
}