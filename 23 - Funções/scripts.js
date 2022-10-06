function primeiraFuncao(){
    console.log('Hello world das funções');
}
primeiraFuncao();

function dizerNome(nome){
    console.log('O nome é: ' + nome);
}
dizerNome('João');
dizerNome('Arthur');
dizerNome('Gisele');

var nomeDoBancoDeDados = 'Multimídia';
dizerNome(nomeDoBancoDeDados);

function soma(a, b){
    var soma = a + b;
    return soma;
}
var somaUm = soma(2, 5);
console.log(somaUm);

var somaDois = soma(3, 9);
console.log((somaDois));

console.log(soma(5, 8));