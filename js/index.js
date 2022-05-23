// Classes

/*sao como fabricas para criar objetos pode se dizer que sao funçoes especiais para criação de objetos*/

/* assim como nas fabricas da vida real precisa das maquinas para construir os objetos, as classes no JavaScript usam um metodo chamado constructor() para fabricar os objetos*/

//classe ex. fabrica de carro no exemplo
//constructor a maquina  que produz os carros
class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + 'buzinou: Biiiiiii';
    }
}

const uno = new Carro('fiat', 'Uno', 2022);
console.log(uno);

const gol = new Carro('volkswagen', 'Gol', 2014);
console.log(gol.buzina());
console.log(gol.ano);

//um carro = objeto e suas propriedades
/*const carro = {
    marca: 'fiat',
    modelo: 'uno',
    ano: 2022
}*/


