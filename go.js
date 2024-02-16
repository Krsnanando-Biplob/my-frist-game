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

function setValue(elimenti, value){
 const craountValue=document.getElementById(elimenti)
 craountValue.innerText= value
}

function revmoveBgColor(elimentid){
 const remBgcol=document.getElementById(elimentid)
 remBgcol.classList.remove('bg-red-600')

}
document.addEventListener('keyup', keyBordPress )

function keyBordPress(event){
 console.log(event)
 const playerPressd= event.key
 console.log(keyBordPress)
 if(playerPressd==='Escape'){
  overGame()

 }
 
 
 const curentAla=document.getElementById('curent-Alpabet');
 const curenAl= curentAla.innerText;
 const convertTocur= curenAl.toLocaleLowerCase()
 console.log(playerPressd, )

 if(playerPressd === convertTocur){
  console.log('your win');
  revmoveBgColor(convertTocur)

  const cruntScoree=document.getElementById('crunt-score');
  const cruntSvalue=cruntScoree.innerText;
  const CruntScore=parseInt(cruntSvalue)
  const newScore=CruntScore +1;
  cruntScoree.innerText=newScore

  startGame()
 }
 else{
  console.log('your a lost')
  const caruntLife= document.getElementById('crunt-life')
  const countLife = caruntLife.innerText
  const CountFile= parseInt(countLife)
  const newCount=CountFile-1;
  caruntLife.innerText=newCount
  if(newCount==-1){
   overGame()
   
  }
  
 }
}

function overGame(eliment){
 hiddenScreen('play-ground')
 hiddenScreen('btn-life')
 addScreen('fainalScore')
 const lastScore=document.getElementById('crunt-score')
 const textLastScore=lastScore.innerText;
 setValue('bestScore', textLastScore )
 const againAlpavet= enterPressAlapvet('curent-Alpabet')
 revmoveBgColor(againAlpavet)
 
 
}
function startGame(){
 const Start =randomAlpabet();
 console.log( Start)
 const CurentAlpabet=document.getElementById('curent-Alpabet');
 CurentAlpabet.innerText=Start;
 addBgColor(Start);

}


function play(){
 hiddenScreen('fainalScore')
 hiddenScreen('home-screen')
 addScreen('play-ground')
 addScreen('btn-life')
 startGame()
 setValue('crunt-life', 3)
 setValue('crunt-score', 0)

}
function enterPressAlapvet(event){
 const nowAlpavet = document.getElementById(event)
 const textAlpabet=nowAlpavet.innerText;
 return textAlpabet;

}

let display = document.getElementById('curent-Alpabet');
function applyDisplay(value){
display.value=value
console.log(display.value)
startGame()

}