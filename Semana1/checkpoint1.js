// 1
var nome = 'Rodrigo'
var sobrenome = 'Rezende'
var dia_nascimento=13
var mes_nascimento=5
var ano_nascimento=1999
var idade=23
var nota1=8
var nota2=7

function media(nota1, nota2){
    return (nota1+nota2)/2
}
console.log("Nome Completo: "+nome+" "+sobrenome)
console.log("Idade: "+idade)
console.log("Data de Nascimento: "+dia_nascimento+"/"+mes_nascimento+"/"+ano_nascimento)
console.log("Média: "+media(nota1,nota2))

// 2
function adder(){
    return 5+10+15
}
soma= adder(5,10,15);
console.log(soma)