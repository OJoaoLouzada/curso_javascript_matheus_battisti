// Arrays são considerados objetos, porém servem como listas.

var arr = [4, 'João', true, {teste: 1, teste: 2}, ['Outro array']]; // Objetos usam {}, arrays usam [].
console.log(arr);

console.log(arr[1]);

arr[5] = 10;
console.log(arr);