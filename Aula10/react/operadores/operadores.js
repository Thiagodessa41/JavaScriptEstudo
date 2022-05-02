
const lista = [1,2,3,4,5,6];

//funçao map serve percorrer todos itens da lista e retornar algo queira fazer

const novaLista  = lista.map(function(item){
   return item * 5;   
});

console.log(novaLista);



const soma = lista.reduce(function(total,proximo){
    return total + proximo;
});
console.log(soma);



const find = lista.find(function(item){
   return item == 6;    
});
console.log(find);