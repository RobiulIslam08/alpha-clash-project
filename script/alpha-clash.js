// function play(){
//     let homePage = document.getElementById('home-page');
//     homePage.classList.add('hidden')

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function handleKeyboardButtonPress(e){
    let playerPressed = e.key
    console.log('plyaer pressed ' + playerPressed)
    let currentAlphabetElement = document.getElementById('current-alphabet')
    let currentAlphabet = currentAlphabetElement.innerText
    let expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet)

  if(playerPressed === 'Escape'){
    gameOver()
  }

    if(playerPressed === expectedAlphabet){
        removeBackgroundColor(expectedAlphabet)
        continueGame()

        let currentScore = getTextElementValueById('current-score');
        let newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore)
       
      




// ------------------------------------------------------------------------------
        // let currentScoreElement = document.getElementById('current-score');
        // let currentScoreText = currentScoreElement.innerText;
        // let currentScore = parseInt(currentScoreText);
        // console.log(currentScore)
        // let newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        console.log('you got a point')
    } else{
        
        let currentLife = getTextElementValueById('current-life');
        let updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife)
        if(updateLife === 0){
            gameOver()
        }
       
    }
    
}
document.addEventListener('keyup', handleKeyboardButtonPress)



function continueGame(){
  
    let alpha = getRandomAlphabet()
    let currentAlphabet = document.getElementById('current-alphabet')
    
    
    setBackgroundColor(alpha)
    currentAlphabet.innerText = alpha
}

function play(){
    hideElementById('home-page')
    showElementById('play-ground')
    hideElementById('score-page')
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)
    
    continueGame()
}
function gameOver(){
    hideElementById('play-ground')
    showElementById('score-page')
    let lastSoore = getTextElementValueById('current-score')
    setTextElementValueById('last-score', lastSoore)
    let currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColor(currentAlphabet);
    
}