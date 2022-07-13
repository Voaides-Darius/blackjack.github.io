let myImgCard = document.getElementById("card-img");
let myStartGameBtn = document.getElementById("start-btn");
let myNewCardBtn = document.getElementById("pick-card-btn");
let mySumField = document.getElementById("sum-field");
let lifeGame = false;
let sum = 0;
let myGameMessage = document.getElementById("blackjack-message");

myStartGameBtn.addEventListener('click', () =>{
  lifeGame = true;
  startGame();
});

function randomCard(){
  let randomNumber = Math.floor(Math.random() * 13) + 1;
    return randomNumber; 
}

function typeOfCard(x){
  if (x === 1)
    myImgCard.setAttribute("src", "img/card-1.svg")
  if (x === 2)
    myImgCard.setAttribute("src", "img/card-2.svg")
  if (x === 3)
    myImgCard.setAttribute("src", "img/card-3.svg")
  if (x === 4)
    myImgCard.setAttribute("src", "img/card-4.svg")
  if (x === 5)
    myImgCard.setAttribute("src", "img/card-5.svg")
  if (x === 6)
    myImgCard.setAttribute("src", "img/card-6.svg")
  if (x === 7)
    myImgCard.setAttribute("src", "img/card-7.svg")
  if (x === 8)
    myImgCard.setAttribute("src", "img/card-8.svg")
  if (x === 9)
    myImgCard.setAttribute("src", "img/card-9.svg")        
  if (x === 10)
    myImgCard.setAttribute("src", "img/card-10.svg")
  if (x === 11)
    myImgCard.setAttribute("src", "img/card-11.svg")
  if (x === 12)
    myImgCard.setAttribute("src", "img/card-12.svg")
  if (x === 13)
    myImgCard.setAttribute("src", "img/card-13.svg")
}
/* Start Game Function */
function startGame(){
    myNewCardBtn.addEventListener('click', function(){
      if (lifeGame === true){
        console.log(lifeGame);
        let myCard = randomCard();
        typeOfCard(myCard);
        sum += myCard;
        console.log(myCard);
        mySumField.textContent = "SUM: " + sum;
        if (sum < 21)
        {
          myGameMessage.textContent = "You are still in the Game";
        } else if (sum === 21){
            myGameMessage.textContent = "You have Blackjack";
        } else{
              myGameMessage.textContent = "You are out of the Game"; 
              lifeGame = false;      
        }
    }
  });
}

