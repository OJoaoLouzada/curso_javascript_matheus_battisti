// seleciona o elemento

var title = document.querySelector('#title');
console.log(title);

// innerHTML
title.innerHTML = 'Teste innerHTML';

// textContent (mais utilizado e mais recomendado)**********
var subtitle = document.querySelector('.subtitle');
console.log(subtitle);
subtitle.textContent = 'Teste textContent'