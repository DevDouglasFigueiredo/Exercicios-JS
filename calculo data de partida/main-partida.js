//Exercicio de calculo de data de partida

let dataDePartida = prompt('Digite a data de partida da aeronave(fomato DD/MM/YYYY)');

let dataDePartidaEscolhida = moment(dataDePartida, 'DD/MM/YYYY')

let hoje = moment();

let diferencaDeData = hoje - dataDePartidaEscolhida;

let opcaoEscolhida = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias\n5- anos")


if(opcaoEscolhida == 1){
    let segundosDePartida = Math.round(diferencaDeData /1000)
    alert('tempo de voo: ' + segundosDePartida + " segundos ")
} else if (opcaoEscolhida == 2){
    let minutosDePartida = Math.round(diferencaDeData / 1000/60)
    alert('tempo de voo : ' + minutosDePartida + ' minutos ')
}  else if (opcaoEscolhida == 3){
    let horasDePartida = Math.round(diferencaDeData / 1000/3600)
    alert('tempo de voo : ' + horasDePartida + ' horas ')
}  else if (opcaoEscolhida == 4){
    let diasDePartida = Math.round(diferencaDeData /1000/3600/24 )
    alert('tempo de voo : ' + diasDePartida + ' dias ')
}  else if (opcaoEscolhida == 5){
    let anosDePartida = Math.round(diferencaDeData /1000/3600/24/30/12 )
    alert('tempo de voo : ' + anosDePartida + ' anos ')
}  else {
    alert('opção invalida')
}