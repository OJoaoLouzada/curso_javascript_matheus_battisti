// Escopo global (podem ser exibidos dentro do local)

var x = 1;
var y = 3;

console.log(x, y);


// Escopo local (dentro de uma função) (não podem ser exibidos no global)
// Duas variávels de escopos locais (funções) diferentes não se misturam
function teste(){
    var z = 0;
    console.log(z);
    console.log(x);
}
teste();
