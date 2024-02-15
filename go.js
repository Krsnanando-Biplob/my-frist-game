// console.log('conneted')
// function play(){
// const homeScreen=document.getElementById('home-screen')
// homeScreen.classList.add('hidden')

// const PlayGround= document.getElementById('play-ground')
// PlayGround.classList.remove('hidden')
// const btnLife=document.getElementById('btn-life')
// btnLife.classList.remove('hidden')
// }

function hiddenScreen(hiddenId){
 const hidd =document.getElementById(hiddenId);
 hidd.classList.add('hidden')

}
function addScreen(addAnd){
 const aDD= document.getElementById(addAnd)
 aDD.classList.remove('hidden')
}
function randomAlpabet(){
 const AlpabetSrt=('1234567890abcdefghijklmnopqrstuvwxyz')
 const splitAlpa = AlpabetSrt.split('')
 // console.log(splitAlpa)

 const rundomNumber= Math.random() * 35;
 const index=Math.round(rundomNumber);
 const alpabet=splitAlpa[index];
 return alpabet

}

function addBgColor(eliment){
 const keyBg = document.getElementById(eliment)
 keyBg.classList.add('bg-red-600')

}
function revmoveBgColor(elimentid){
 const remBgcol=document.getElementById(elimentid)
 remBgcol.classList.remove('bg-red-600')

}
document.addEventListener('keyup', keyBordPress)

function keyBordPress(event){
 const playerPressd= event.key
 
 const curentAla=document.getElementById('curent-Alpabet');
 const curenAl= curentAla.innerText;
 const convertTocur= curenAl.toLocaleLowerCase()
 console.log(playerPressd, )

 if(playerPressd === convertTocur){
  console.log('your win');
  revmoveBgColor(convertTocur)
  startGame();
 }
 else{
  console.log('your a lost')
 }
}


function startGame(){
 const Start =randomAlpabet();
 console.log( Start)
 const CurentAlpabet=document.getElementById('curent-Alpabet');
 CurentAlpabet.innerText=Start;
 addBgColor(Start);


}


function play(){
 hiddenScreen('home-screen')
 addScreen('play-ground')
 addScreen('btn-life')
 startGame()
}
