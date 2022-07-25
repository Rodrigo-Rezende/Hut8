nome = 'Rodrigo'
sobrenome = 'Rezende'
dia_nascimento='15'
mes_nascimento='12'
ano_nascimento='1997'
idade=24
nota1=8
nota2=7

var media = new Function('a', 'b', 'return (a + b)/2');
var adder = new Function('a', 'b', 'c', 'return(a+b+c)');

const message ="Nome comepleto: "+ nome +" "+sobrenome;
const message1 ="Idade: " + idade;
const message2 = "Data de Nascimento: " + dia_nascimento + "/"+ mes_nascimento + "/"+ ano_nascimento
media1 = media(nota1, nota2)
const message3 = "Média: " + media1
soma= adder(5,10,15);

console.log(message+"\n"+message1+"\n"+message2 +"\n"+message3)
console.log(soma)