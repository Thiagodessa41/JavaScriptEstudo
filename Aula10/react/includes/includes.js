//includes ele verifica se aquilo que digitou possui oque a gente mandando

let nomes = ['Matheus', 'Lucas', 'João'];
// será que existe nome lucas
console.log(nomes.includes('Lucas'));


//Matheus está na lista?
if(nomes.includes('Matheus')){
    console.log('Mathes está na lista');
}else{
    console.log('Matheus não está na lista');
}

//endsWith verifica se termina com que voce esta passando
let nome = 'Matheus';
// verificar se o nome acaba com s
console.log (nome.endsWith ('s')); // irá aparecer true na msg 

//startsWitch se o nome inicia com s
console.log (nome.startsWith ('s')); // irá retornar false


//some  verifica se tem um do dado que está passando
let nome1 = ['Matheus', 'Lucas', 'Henrique'];
// como faz para verificar se tem nome digitado
console.log(nome1.some(nome => nome == 'Matheus')); // true 


//every tbm devolvse um callback tem que satisfazer todas condiçoes
let nome2 = [
    { nome: 'Matheus', idade: 18},
    { nome: 'Maria', idade: 28},       //array de objetos
    { nome: 'Henrique', idade: 15}
];
console.log(nome2.every(nome => nome.idade >= 18));

if(nome2.every(nome => nome.idade >= 18)){
    console.log('Todos é maior de 18 anos');
}else{
    console.log('Ops alguém é menor de 18 anos');
}