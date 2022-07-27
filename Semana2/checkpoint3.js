// 1
var myArray=[5,9,10,6]

function multiplier(array){
    let sum=0
    for(let i=0;i<array.length;i++){
        sum+=array[i]*i
    }
    return sum
}

console.log(multiplier(myArray))

// 2
user = {
    name: "Juca",
    projects:[
        {name: "Projeto 1", start: "01/02/2021", active: true},
        {name: "Projeto 2", start: "03/03/2021", active: false},
        {name: "Projeto 3", start: "10/08/2021", active: true},
        {name: "Projeto 4", start: "20/08/2021", active: false},
        {name: "Projeto 5", start: "18/10/2021", active: true}
    ]
}

function activeprojects(obj){
    let arrayActPj=[]
    for(let i=0;i<obj.projects.length;i++){
        if(obj.projects[i].active===true){
            arrayActPj.push(obj.projects[i].name)
        }
    }
    
    return arrayActPj
}

console.log(activeprojects(user))

// 3
var myArray=[6, 21, 9, 2, 50, 98, 1]

function highest_num(array){
    let highest=0
    for(let i=0;i<array.length;i++){
        if(array[i]>highest){
            highest=array[i]
        }
    }
    return highest    
}

console.log(highest_num(myArray))

// 4
var phrase="one two three four five six"

function wordcount(string){
    return string.split(" ").length
}

console.log(wordcount(phrase))

// 5
const users=[
    {
        name: "Joao",
        skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
        name: "Pedro",
        skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }
]
for(let i=0;i<users.length;i++){
    console.log(users[i].skills)
}

// 6
var user1, user2
const plays=3

function randomgenerator(max){
    let choice= Math.floor(Math.random()*max)
    return(
    (choice===0) ? "tesoura":
    (choice===1) ? "papel" : "pedra"
    )
}

user1=randomgenerator(plays)
user2=randomgenerator(plays)
console.log("Usuario 1 jogou: "+user1)
console.log("Usuario 2 jogou: "+user2)

function rockPaperScissors(play1, play2){
    return (
    (play1===play2) ? "empate" :
    (play1==="papel" && play2==="pedra") ? "Usuario 1 ganhou":
    (play1==="tesoura" && play2==="papel") ? "Usuario 1 ganhou" :
    (play1==="pedra" && play2==="tesoura") ? "Usuario 1 ganhou" : "Usuario 2 ganhou"
    )
}

console.log(rockPaperScissors(user1,user2))