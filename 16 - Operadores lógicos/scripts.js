var idade = 13;
var nome = 'João';


// E &&
if(idade == 16 && nome == 'João'){
    console.log('O João pode entrar na aula.');
} else{
    console.log('Este não é o João');
}

// OU ||
if(idade >= 16 || nome == 'João'){
    console.log('O João pode entrar na aula.');
} else{
    console.log('Este não é o João');
}

if((nome == 'Pedro' || 30 > 20) && 10 == 10){
    console.log('Não entra');
}

// NOT !

if(!true){
    console.log('Passou');
}