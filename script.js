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

#################################################

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

//###########################################

function gravidade(){
     console.log('A GRAVIDADE da lua e');
     console.log(19.80);
}
console.log('Opá tudo bem!');
gravidade();


function somar(n1 , n2){
     let resultado = n1 + n2
     console.log('Resultado' +resultado);
}
somar(19 , 10);

//Exercicios

function calcPct(n1 , n2){
     return(n2 / n1) *100;

}

let x = 40;
let y = 10;
let Pct = calcPct(x, y );
console.log(`${Pct} % de ${x} e ${y}`);


//espace #####################
*/


/* Calcule o preço do imovel 
 -m2 = 3.000
 -Se tiver 1 quarto, o m2 e 1x
 -Se tiver 2 quarto, o m2 e 1.2x
 -Se tiver 3 quarto, o m2 e 1,5x
 Uso da função:
*/
let metragem = 123;
let quartos = 3;
let preco = calcularImoveis(metragem, quartos);
console.log(`A casa custa R$ ${preco}`); 