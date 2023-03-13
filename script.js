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



 Calcule o preço do imovel 
 -m2 = 3.000
 -Se tiver 1 quarto, o m2 e 1x
 -Se tiver 2 quarto, o m2 e 1.2x
 -Se tiver 3 quarto, o m2 e 1,5x
 Uso da função:

// exercios #2
function calcularImoveis(metragem , quartos){
     let m2 = 3000 ;
     let preco = 0 ;
     switch(quartos){
          case 1:
          default:
          preco = metragem *m2;
          break;
          case 2:
               preco = metragem * (m2 * 1.2);
          break;
          case 3:
               preco = metragem * (m2 * 1.5);

     }
     return preco;

}
let metragem = 123;
let quartos = 3;
let preco = calcularImoveis(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

//VOU CONSEGUIR ACREDITO EM MIM :-)
function calcularImoveis(metragem , quartos){
     let m2 = 3000;
     let preco = 0;
     switch(quartos){
          case 1:
               default:
                    preco = metragem * m2;
                    break;
                    case 2:
                         preco = metragem * (m2 * 1.2);
                         break;
                         case 3:
                              preco = metragem * (m2 * 1.5);
     }
     return preco;
}
let metragem = 123;
let quartos = 3;
let preco = calcularImoveis(metragem , quartos);
console.log(`A Casa Custa No Seu Valor de R$ ${preco}`);

########################################

function validar(usuario , senha){
     if(usuario === 'Evanicio' && senha === '1234'){
          return true;
     } else{
          return false;
     }
}
let usuario = 'Evanicio';
let senha = '1234'
let validacao = validar(usuario , senha);
if(validacao){
     console.log('Autorização Concedida');
} else{
     console.log('Autorização Negada');
}

//Arrow Function
// PRIMEIRO EXEMPLO
function somar ( a , b){
     return a + b;
}
console.log(somar (1, 12))

// SEGUNDO EXEMPLO
const somar = (r , t) => {
     return r + t;
}
console.log (somar( 12 , 45));

//TERCEIRO EXEMPLO
 const somar = (t,w) => t+w;
 console.log(somar(12,23))
 */
//Quarto Exemplo

function sobrenome(sob){
     return 'João '  +sob;
}
console.log(sobrenome ('Augusto'));

//Quinto exemplo
const  sobrenome1 = sob1 => 'pedrin'+sob1;
console.log (sobrenome1( 'pedrin'));