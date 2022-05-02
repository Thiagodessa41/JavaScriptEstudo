

function cadastroPessoa(info){
    let novosDados = {
         ...info,
         cargo: 'Programador',
         status: 1,
         codigo: '33784'
    };
    return novosDados;

}

console.log(cadastroPessoa ({nome: 'Thiago', sobrenome: 'Camargo', anoInicio: 2045}));
