/*  Exercicio de calculo de idade */

var nomePessoaVelha = prompt('qual seu nome');
var idadePessoaVelha = prompt('qual sua idade');

var nomePessoaNova = prompt('Qual nome da outra pessoa');
var idadePessoaNova = prompt(' e qual sua idade');

var diferencaDeIdadeCalculada = (idadePessoaVelha - idadePessoaNova);


var infoPessoaVelha = alert(nomePessoaVelha + " " + idadePessoaVelha + " anos");
var infoPessoaNova = alert(nomePessoaNova + " " + idadePessoaNova + " anos");

diferencaDeIdadeCalculada = alert(" A diferença de idade entre vcs é " + (idadePessoaVelha - idadePessoaNova)+ " anos ");

