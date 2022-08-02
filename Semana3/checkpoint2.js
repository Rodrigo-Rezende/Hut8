// 1
const prompt=require("prompt-sync")({sigint:true})
x=prompt("Que operação deseja fazer?")
y=parseInt(prompt("Digite um número:"),10)
z=parseInt(prompt("Digite um número:"),10)

const calc = (op, num1, num2) => {
    return (op==="soma") ? num1+num2 :
    (op==="subtrai") ? num1-num2 :
    (op==="multiplica") ? num1*num2 :
    (op==="divide") ? num1/num2 : "Operção inválida"
}

console.log(calc(x,y,z))

// 2
const usuario={
    name:"Rodrigo",
    idade:23
}

const age = ({idade}) => {
    return (idade>=18) ? "Maior de idade" : "Menor de idade"
}

console.log(age(usuario))