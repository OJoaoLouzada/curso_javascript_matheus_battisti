// inserir no elemento body

var novoParagrafo = document.createElement('p');
console.log(novoParagrafo);
var texto = document.createTextNode('Este é o conteúdo do parágrafo.');
novoParagrafo.appendChild(texto);

var body = document.querySelector('body');
console.log(body);
body.appendChild(novoParagrafo);

// inserir em um container

var container = document.getElementById('container');
var containerP = document.createElement('span');
containerP.appendChild(document.createTextNode('Texto do span'));
container.appendChild(containerP);