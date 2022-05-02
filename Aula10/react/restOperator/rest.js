//vc nao sabse qtos nomes será passado então usa rest operation 
function minhaLists(...nomes){
    console.log(nomes);
}

minhaLists("Thiago", "Luccas", "Karol" );




//função novos usuários
function cadastrar(usuarios,...novosUsuario){
     let totalUsuarios = [...usuarios,...novosUsuario];
     return console.log(totalUsuarios);
}

let usuarios = ["Thiago", "Karol"];
let novosUsuario = cadastrar(usuarios,"Tifany", "Gustavo");
