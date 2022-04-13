  

//Exercicio de Switch Conversor de distancia Espacial 

let distanciaEmAnosLuz = prompt("Quantos anos luz você quer calcular ? ")
let opcao = prompt("Escolha uma das opções de unidade para conversão:\n\n1- Parsec(pc)\n2- Unidade Astronomica (AU)\n3 - Quilometros(km)");

let opcaoEscolhida
let valorConvertido
switch (opcao) {
    case "1":
        opcaoEscolhida = "Parsec(pc)";
        valorConvertido = distanciaEmAnosLuz * 0.306601;
        break
    case "2":
        opcaoEscolhida = "Unidade Astronomica (AU)"
        valorConvertido = distanciaEmAnosLuz * 63241.1;
        break
     case "3":
        opcaoEscolhida = "Quilometros(km)"
        valorConvertido = distanciaEmAnosLuz *  (9.5 * Math.pow(10,12));
        break
    default:
        opcaoEscolhida = "Unidade não identificada"
        valorConvertido = "Conversão fora do Escopo"
}

alert("a Distancia em anos : " + distanciaEmAnosLuz + "\n" +  opcaoEscolhida + " : " + valorConvertido ) 


