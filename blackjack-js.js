let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let userEl = document.getElementById("user-info-element")




let firstCard 
let secondCard
let sum  
let hasBlackjack = false
let isAlive = false



let user = {
    name: "Diksha",
    chips: 199
}
userEl.textContent = user.name + ": $" + user.chips




function renderGame(){
    
    sumEl.textContent = "Sum: " + sum + " "
    if (sum < 21){
        messageEl.textContent = "Do you want to draw a new card ?" 
    }
    else if (sum === 21){
        messageEl.textContent = "You've got Blackjack !" 
        hasBlackjack = true
    }
    else if(sum > 21){
        isAlive = false
        messageEl.textContent = "You're out of the game !"
        
    }
}




function startNewGame(){
    if(isAlive === false && hasBlackjack === false || hasBlackjack === true ){

        cardEl.textContent = "Cards:"
        startGame()
    
    }
}




 
function startGame(){
    isAlive = true
    firstCard = randomCard()
    secondCard = randomCard()
    sum = firstCard + secondCard
    renderGame()
}





function randomCard(){
      let random = Math.floor(Math.random()*13) + 1
      if (random === 1){
          let ace = prompt("You have got an ACE ,choose its value either 1 or 11")
          numAce = parseInt(ace)
          if(numAce === 1 || numAce === 11){
              random = numAce
          }
          else {
              alert("invalid value")
          }
        }
        else if (random >= 11){
            random = 10
        }
      cardEl.textContent += " " + random + " "
      return random

}




function getNewCard(){
if(isAlive === true && hasBlackjack === false){
    newCard()
}
}




function newCard(){
    let newcard = randomCard()  
    sum = sum + newcard
    renderGame()
    return newcard
}
