// Contagem: Dado um valor N, conte quantos valores inteiros existem entre 1 (inclusive) e N (inclusive).
var n = prompt("Informe a quantidade de alunos que fizeram a prova:");
var nota;
var contador = 0;
var i = 0;

while (i < n) {
	nota = prompt("Informe uma nota");

	if (nota >= 50) {
		contador = contador + 1;
	}
	
	i = i + 1;
}
document.write("Número de alunos que passaram no exame: " + contador);