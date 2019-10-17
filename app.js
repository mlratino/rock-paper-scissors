const game = ()=> {
 var pScore = 0;
 var cScore = 0;

 const startGame= ()=> {
    const playBtn = document.querySelector(".intro button");
    const introScreen= document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click",() =>{
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
    });
    };
const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

hands.forEach(hand => {
    hand.addEventListener("animationend", function(){
        this.style.animation = "";
    });
});

    const computerOptions = ["rock","paper","scissors"];

    options.forEach(option => {
        option.addEventListener("click",function() {
        const computerNumber= Math.floor(Math.random() *3);
        const computerChoice = computerOptions[computerNumber];
console.log(computerNumber);
console.log(computerChoice);
setTimeout(() =>{
    compareHands(this.textContent, computerchoice);

    playerHand.src = `./images/${this.textContent}.jpg`;
    computerHand.src =`./images/${computerChoice}.jpg`;

},2000);

playerHand.style.animation ="shakePlayer 2s ease";
computerHand.style.animation ="shakeComputer 2s ease";

        });
    });

};
const playerScore =() =>{
const playerScore =document.querySelector(".player-score p");
const computerScore =document.querySelector(".computer-score c");
playerScore.textContent = pScore;
computerScore.textContent = cScore;

}
const compareHands = (playerChoice,computerChoice) =>{
const winner = document.querySelector(".winner");

if(playerChoice === computerChoice){
    winner.textContent = "Draw!";
    return;
}
if(playerChoice === "rock") {
if(computerChoice ==="scissors") {
        winner.textContent ="You Win!";
        pScore++;
        upDateScore();
        return;
     }
else{
        winner.textContent ="Sorry,You Lose!";
        cScore++;
        upDateScore();
        return;
       }

    }
    if(playerChoice=== "paper"){
        if(computerChoice ==="scissors"){
                winner.textContent ="Sorry,You Lose!";
                cScore++;
                upDateScore();
                return;
             }
        else{
                winner.textContent ="You Win!";
                pScore++;
                upDateScore();
                return;     
            }         
}
if(playerChoice=== "paper"){
    if(computerChoice ==="scissors") {
            winner.textContent ="Sorry,You Lose!";
            cScore++;
            upDateScore();
            return;
         }
    else{
            winner.textContent ="You Win!";
            pScore;
            upDateScore();
            return;     
        }         
}
}
startGame();
playMatch();
game();
 












}
