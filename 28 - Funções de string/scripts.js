// length

var nome = 'João';
console.log(nome.length);

var obj = 'Cadeira';
console.log(obj.length);

// indexOf

console.log(nome[2]);

var frase = 'O Rato Roeu A roupa do rei de Roma';
console.log(frase.indexOf('roeu'));

// slice

var palavra = frase.slice(7, 11);

console.log(palavra);

// replace

var novaFrase = frase.replace('roeu', 'teste');
console.log(novaFrase)

// toUpperCase

console.log(frase.toUpperCase());

// toLowerCase
console.log(frase.toLowerCase());

//trim

var nome = '        João   Paulo      ';
var nomeTrim = nome.trim();
console.log(nome);
console.log(nomeTrim);

// split

console.log(frase.split(' '));

var tags = 'PHP, JavaScript, HTML, CSS';
console.log(tags.split(', '));

// lastIndexOf

var fraseDois = 'Eu quero a última palavra teste dessa frase de teste';

console.log(fraseDois.indexOf('teste'));
console.log(fraseDois.lastIndexOf('teste'));