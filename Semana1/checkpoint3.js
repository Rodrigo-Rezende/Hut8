// 1
var value=11
function is_even(value){
    if(value%2===0){
        return true
    }else{
        return false
    }
}
console.log(is_even(value))

// 2
var age=3
function category(age){
    return(
    (age>=5 && age<=7) ? "Infantil A" : 
    (age>=8 && age<=10) ? "Infantil B" :     
    (age>=11 && age<=13) ? "Juvenil A" :
    (age>=14 && age<=17) ? "Juvenil B" :
    (age>=18) ? "Adulto" : "Sem categoria"
    )
}

console.log(category(age))