// função entrar

function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome?');
    
    if(texto == "" || texto == null){
        alert('Digite seu nome novamente')
        area.innerHTML = 'Bem vindo.. ' ;
    }else{
        area.innerHTML = 'Bem vindo.... ' + texto;
    }  
}

function entrar2(nome){
    var area = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome?');
    area.innerHTML = nome + " " + texto;
}

  // while enquanto faça alguma coisa
  //passa 1 condição
  x = 0;

  while(x<10){
        document.write("</br> o valor do x : " + x);
        x++;
  }

  // for  = para
  //passa tres condições 

  for(a=0; a < 10; a++){
      document.write("</br> o valor do a : " + a);
  }

  document.write("</br> Escolha seu pedido? </br> ");
  document.write("</br> 0 - Sorvete / 1 Suco /  </br> ");
  document.write("</br> 2 - Coca cola / 3 agua gelada / 4 agua natural </br> ");


  function pedir(){
      //switch 
  x = prompt("Oque deseja pedir?");
  switch(x){
     case "0":
         alert("Voce pediu sorvete ")
         break;
     case "1":
         alert("Voce pediu uma coca gelada")
         break;      
     case "2":
         alert("Voce pediu uma agua gelada")
         break;

     case "3":
         alert("Voce pediu uma agua natural")
         break; 
      
     default:
         alert("Ops não temos essa opção")
         break;
  }
//temporizador
function acao(){
    document.write("Executando... </br>");
}
//executa de tempos em tempos
// setInterval precisa receber dois parametros
setInterval(acao,1000);

// executa uma vez para 
setTimeout(acao,3000);

var timer = setInterval(acao,1000);
clearInterval (timer);

}



            
