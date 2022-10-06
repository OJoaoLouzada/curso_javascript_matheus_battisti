//adicionar atributo

var title = document.querySelector('#title');
title.setAttribute('class', 'testando-atributo');
console.log(title);

var button = document.querySelector('#btn');
button.setAttribute('disabled', 'disabled');

// remover atributo

var lista = document.querySelector('#lista');
lista.removeAttribute('id');