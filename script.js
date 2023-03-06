/*let profission = 'bombeiro'

console.log('PROFISSÃO '  + profission);

switch (profission) {
     case'fiscal':
     console.log('Sua camisa sera VERDE');
      
     break;

     case'bombeiro':

     console.log('Sua camisa sera Vermelha');

     break;

     case 'policial':

     console.log('Sua Camisa sera Azul')

     break;

     default:

     console.log('Sua camisa sera Preta');

     break
}
*/


/*
function MaiorDeIdade(idade){
     if (idade >= 18){
          return  true ;
     } else{
          return false;
     }
}

let idade = 18;
let verificacao = MaiorDeIdade(idade);

if(verificacao){
     console.log('È MAIOR de  idade');
} else{
     console.log('È MENOR de idade');
}

*/

//REFAZENDO
function maiorDeIdade(idade){
     if(idade >= 18){
          return true ;
     }
     else{
          return false;
     }
}

let idade = 18;
let verificacao = maiorDeIdade(idade);

if(verificacao){
     console.log('È MAIOR de idade');
} else{
     console.log('È MENOR de idade')
}
