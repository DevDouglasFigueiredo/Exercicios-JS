/* exercicio de velocidade da nave */

var nomePiloto = prompt('qual seu nome piloto ? ');
var velocidade = 0;
var qualVelocidadeQuerIr = prompt('Qual a velocidade você quer ir ?');
var velocidade = qualVelocidadeQuerIr;
var confirmacaoDeVelocidade = confirm('A velocidade escolhida foi\n' + velocidade + '\nestá certo disso ?');

if(velocidade <= 0){
    alert("A nave esta parada, considere partir e aumentar a velocidade")
} else if(velocidade <= 40){
    alert('Voce esta devagar, podemos aumentar.')
} else if(velocidade >= 40 && velocidade < 80){
    alert('parece uma boa velocidade para manter')
} else if (velocidade >= 80 && velocidade < 100){
    alert('Velocidade alta, considere diminuir')
} else if ( velocidade >= 100){
    alert('Velocidade perigosa, controle automatico acionado')
}

alert(nomePiloto + ' sua nave esta a ' + velocidade + 'km/h tenha uma boa viagem!' );
