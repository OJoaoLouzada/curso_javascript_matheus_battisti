// length

var arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// push adiciona no fim

arr.push(6);
arr.push('Qualquer coisa');
console.log(arr);

// pop remove no fim

arr.pop();
console.log(arr);

// unshift adiciona no início
arr.unshift('teste');
console.log(arr);

// shift remove no começo
arr.shift();
console.log(arr);

// acessar o último elemento

console.log(arr[arr.length - 1]);

// isArray

console.log(Array.isArray(5));
console.log(Array.isArray(arr));

// splice

var lista = [1, 2, 3, 4, 5];
lista.splice(2, 0, 999);
console.log(lista);
lista.splice(4, 1);
console.log(lista);

//indexOf

console.log(lista.indexOf(5));

// join

var arr2 = ['O', 'rato', 'roeu', 'a', 'roupa'];
console.log(arr2.join(' '));

// reverse

console.log(arr2.reverse());