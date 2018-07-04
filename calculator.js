var operacion = prompt("Que operacion deseas usar?");

if (operacion === "volumen de un cilindro") {
	var radio = prompt("Cual es el radio del cilindro?");
	var altura = prompt("Cual es la altura del cilindro?");
	var total = [radio, altura,];
	alert("El volumen del cilindro es: " + total[0] * total[0] * Math.PI * total[1]);
}
if (operacion === "transformar de onzas a toneladas") {
	var onzas = prompt("Cuantas onzas quieres transformar?");
	var onz_tn = onzas * 0.0000283495; 
	alert(onzas + " onzas equivalen a: " + onz_tn + " toneladas");
}
if (operacion === "factorizacion de un numero") {
	var numero = prompt("Que numero quieres factorizar?");
	var vlrinicial = 1;
	for (var cont = 2; cont <= numero; cont++)
		vlrinicial = vlrinicial * cont;
	alert("El resultado es: " + vlrinicial);
}