//  let nomeNave = prompt(" infome o nome da sua nave. ")
//  let trocarLetra = prompt(" informe qual letra do nome da sua nave voce quer mudar ?")
//  let novaLetra = prompt(" informe qual a nova letra que voce quer inserir.")
//  let novoNome = "";
//  for(let i = 0; i < nomeNave.length; i++){
//      if(nomeNave[i] == trocarLetra){
//          novoNome += novaLetra
//      } else {
//          novoNome += nomeNave[i]
//      }
//  }
//  alert("o nome da nave é " + novoNome)

// //_______________________________________________________________________________________________________________

// alert(">>>Vamos mudar o nome atraves do JS")

// let nome = prompt("informe seu nome por favor")
// let mudarLetra = prompt(" informe qual letra vc quer substituir")
// let letraNova = prompt(" informe qual nova letra você quer por")

// let nomeNovo = ""

// for(var i = 0; i < nome.length; i++){
//     if(nome[i] == mudarLetra){
//         nomeNovo += letraNova
//     } else {
//         nomeNovo += nome[i]
//     }
// }

// alert("o nome novo é " + nomeNovo)

//_______________________________________________________________________________________________________________

alert(">>>Vamos mudar o nome atraves do JS mais uma vez")

let name = prompt("informe seu nome")
let changeLetter = prompt("qual letra do seu nome voce quer mudar?")
let newLetter = prompt("E por qual letra voce deseja susbtituir?")

let newName = ""

for(var i = 0; i < name.length; i++){
    if (name[i] == changeLetter){
        newName += newLetter
    } else {
        newName += name[i]
    }
}

alert("o nome novo é " + newName)