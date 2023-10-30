var select = document.getElementById('selectimg')

var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')

var score1 = document.getElementById('score-1')
var score2 = document.getElementById('score-2')

var compimg = document.getElementById('compimg')

let comp;
let C;
let Uscore = 0
let Cscore = 0

function generateimg(comp){
    comp = Math.ceil(Math.random()*3)
    console.log(comp)
    switch(comp){
        case 1: compimg.src = './assets/rock-hand.png'
                C = 'r'
        break
        case 2: compimg.src = './assets/paper-hand.png'
                C = 'p'
        break
        case 3: compimg.src = './assets/scissors-hand.png'
                C = 's'
        break
        default: compimg.src = ''
    }
}

rock.addEventListener('click', ()=>{
    select.src='./assets/rock-hand.png'
    game('r')
})
paper.addEventListener('click', ()=>{
    select.src='./assets/paper-hand.png'
    game('p')
})
scissors.addEventListener('click', ()=>{
    select.src='./assets/scissors-hand.png'
    game('s')
})

function game(U){
    generateimg(comp)
    if (
        (U == 'r' && C == 's') ||
        (U == 'p' && C == 'r') ||
        (U == 's' && C == 'p')
        ){
            Uscore += 1
    }
    else if (U==C){
        Uscore+=0
    }
    else{
        Cscore += 1
    }
    score1.textContent = Uscore
    score2.textContent = Cscore
    win()
}

function win(){
    winner = document.getElementById('winner')
    console.log(winner)
    if(Uscore == 5){
        winner.innerHTML = 'You'
    }
    else if(Cscore == 5){
        winner.innerHTML = 'Computer'
    }

}

var playagain = document.getElementsByClassName('playagain')

playagain.onclick=()=>{
    window.location.href = './game.html'
}