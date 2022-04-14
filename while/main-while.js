 alert(">>> BEM VINDO AO PROGRAMA DE DOBRA ESPACIAL<<<<")

 let nomePiloto = prompt("qual seu nome piloto ?");
 let nomeNave = prompt("Qual nome da sua nave " + nomePiloto + " ? ");

 let entrarNaDobra = confirm("Deseja entrar na dobra espacial agora ? ");

 let dobra = 0

 while(entrarNaDobra == true){
     dobra +=1
     alert("Incrível! Você acabou de viajar em uma forma de propulsão mais rápida que a luz!")
     entrarNaDobra = confirm("Deseja entrar na dobra novamente  ?")
 } 

 alert("Parabéns, " + nomePiloto + "\nO programa foi encerrado! " + "\nNave: " + nomeNave + " fez " + dobra + " dobras")

//---------------------------------------------------------------------------------------------------------------

 alert(" BEM VINDO AO PROGRAMA DE RUNNING !!!")

 let nomeAtleta = prompt("Qual seu nome atleta ? ");
 let nomeEquipe = prompt("informe o nome da sua equipe " + nomeAtleta);

 let entrarNaPista = confirm(nomeAtleta + " \nVocê esta preparado para entrar na pista de atletismo ? ")
 let voltas = 0

 while(entrarNaPista == true){
     voltas += 1;
     alert("incrivel, voce esta correndo muito bem!!!")
     entrarNaPista = confirm("deseja correr novamente ? ")
 }

 alert("parabens " + nomeAtleta + "\n o treino esta encerrado, você deu  " + voltas + " voltas e a  "  + nomeEquipe + " esta concorrendo ao trofeu de campeao");

//---------------------------------------------------------------------------------------------------------------

 alert("BEM VINDO AO TREINAMENTO DE PILOTOS DE CORRIDA  !!!")

 let nomeMotorista = prompt("Qual o seu nome motorista ? ")

 let entrarNoCircuito = confirm(nomeMotorista + "\n você esta preparado para iniciar sua volta ? ")

 let circuitos = 0

 while(entrarNoCircuito == true){
     circuitos +=1;
     alert("vooaaaaaa, se supere!!!")
     entrarNoCircuito = confirm("deseja correr novamente ? ")
 }

 alert("parabens " + nomeMotorista + " você deu " + circuitos + " voltas no circuito ")

//---------------------------------------------------------------------------------------------------------------

 alert("BEM VINDO AO TREINAMENTO DE JOGADORES DE BASKET  !!!")

 let nomeJogador = prompt("Qual seu nome jogador ? ")
 let nomeTime = prompt("Qual time você faz parte ? ")

 let arremessar = confirm(" Você esta pronto pra arremesar, ou quer parar?")

 let pontos = 0
 while(arremessar == true){
     pontos +=1
     alert("continue jogando, se aprimore cada vez mais!!!")
     arremessar = confirm("deseja treinar novamente ? ")
 }

 alert("parabens " + nomeJogador + " vc fez " + pontos + " pontos no treino ")

//---------------------------------------------------------------------------------------------------------------

alert("BEM VINDO AO TREINAMENTO DE JOGADORES DE FUTEBOL  !!!")

let nomeFutebolista = prompt(" Qual seu nome futebolista ")
let nacionalidade = prompt ("de qual país você faz parte ") 

let chutesGol = confirm("Voce estar pronto para chutar ? ")

let gols = 0

while(chutesGol == true){
    gols +=1
    alert("continue jogando, se aprimore cada vez mais!!!")
    chutesGol = confirm(" quer chutar novamente ? ")
}

alert( "parabens  " + nomeFutebolista + " você fez " + gols + " gols no treino!!!")