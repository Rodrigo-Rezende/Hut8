// 1
var number1 = 8
var number2 =-8

function check(number){
    if(number>=0){
        console.log("positivo")
    }else{
        console.log("negativo")
    }
}
check(number1)
check(number2)

// 2
const prompt=require("prompt-sync")({sigint:true})
var x = prompt("Digite um numero:")
var y = prompt("Digite outro numero:")

function check_postive(x,y){
    if(x>=0 || y>=0){
        console.log("Um dos valores eh postivo")
    }else{
        console.log("Nenhum valor eh positivo")
    }
}

check_postive(x,y)

// 3
var price=50
var payment= prompt("Forma de pagamento: \nDigite 1 para pagamento a vista em dinheiro ou cheque.\nDigite 2 para pagamento a vista no cartao de credito.\nDigite 3 para pagamento em 2x.\nDigite 4 para pagamento em 3x.")

function payment_method(price, payment){
    switch (payment){
        case '1':
            console.log("Preço final: "+(price*0.9).toFixed(2))
        break
        case '2':
            console.log("Preço final: "+(price*0.85).toFixed(2))
        break
        case '3':
            console.log("Preço final: "+price)
        break
        case '4':
            console.log("Preço final: "+(price*1.10).toFixed(2))
        break
    }
}

payment_method(price, payment)
