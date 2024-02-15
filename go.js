console.log('conneted')
function play(){
const homeScreen=document.getElementById('home-screen')
homeScreen.classList.add('hidden')

const PlayGround= document.getElementById('play-ground')
PlayGround.classList.remove('hidden')
const btnLife=document.getElementById('btn-life')
btnLife.classList.remove('hidden')
}