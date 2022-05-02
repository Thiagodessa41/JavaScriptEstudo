var nome = '';

if(typeof localStorage.nome == 'undefined'){
       localStorage.nome = prompt("Digite seu nome?")
}

nome = localStorage.nome;
document.getElementById('nome').innerHTML = nome;

localStorage.lista = ["THIAGO",38];
localStorage.lista;

sessionStorage // quando usuario fechar o navegador perde informação, mas usa mesma sintaxe do localstorage

