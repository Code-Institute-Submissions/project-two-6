// Create questions for the game
let questions = [{
    imgSrc : "assets/images/lexus.png",
    optionA : "Lexus",
    optionB : "Lamborghini",
    optionC : "Lotus",
    correct : "optionA"
},{
    imgSrc : "assets/images/mercedes.png",
    optionA : "Mazda",
    optionB : "Mercedes",
    optionC : "McLaren",
    correct : "optionB"
},{
    imgSrc : "assets/images/toyota.png",
    optionA : "Tesla",
    optionB : "Tata",
    optionC : "Toyota",
    correct : "optionC"
}];


//Get the start button element and add event listener to it
let startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

/**
 * Called when start button is clicked, hides the home content of thepade
 * and takes user to game area
 */
function startGame(){
let homeBlock = document.getElementById("main-container");
    homeBlock.style.display = 'none';
    let quizContainer = document.getElementById("quiz-container");
    quizContainer.style.display = 'block';
    console.log("test passed"); //remove
}