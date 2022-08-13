// 1
var string="Maria, Paulo, Moisés, Joel, Ana"
console.log(string.replace(/\s/g,"").split(",").join("\n"))

// 2
var string="Olá, mundo, meu, nome, é, Juca"
console.log(string.replace(/,/g,"."))
