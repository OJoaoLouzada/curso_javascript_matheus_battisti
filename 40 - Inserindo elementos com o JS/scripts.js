// criar elemento
var el = document.createElement('div');
el.classList = 'div-criada';
console.log(el);

// inserindo elemento filho
var container = document.querySelector('#container');
container.appendChild(el);

// insertBefore

var el2 = document.createElement('div');
el2.classList = 'div-before';
var el3 = document.querySelector('#container .div-criada');
console.log(el3);
container.insertBefore(el2, el3);