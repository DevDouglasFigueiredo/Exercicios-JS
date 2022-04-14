let opcaoDeMoeda = prompt("Para qual moeda você quer converter ?\n\n1-Euro \n2- Dolar");
let quantidadeEmReais = prompt("qual valor em reais você quer converter ? ");

let valorEuro = 0.20;
let valorDolar = 0.21;
let moedaEscolhida
let valorConvertido

switch(opcaoDeMoeda){
    case "1":
        moedaEscolhida = "Euro";
        valorConvertido = Math.round(quantidadeEmReais * valorEuro);
        break
    case "2":
        moedaEscolhida = "Dolar";
        valorConvertido = Math.round(quantidadeEmReais * valorDolar);
        break
    default:
        moedaEscolhida = "moeda não identificada"
        valorConvertido = "conversão fora do escopo"
}

alert("valor em Reais : " + quantidadeEmReais + "\n" + "Moeda Esolhida : " + moedaEscolhida + "\n" + "valor Convertido : " + valorConvertido  )

