const choices = ["Rock", "Paper", "Scissor"]; //array of choices as per the Rock_Paper_Scissors game.
let Player = 0;
let Computer = 0;
let number_of_moves = 10;

function computer_play() {
  //generates a random selection from an array of choices.
  return choices[Math.floor(Math.random() * choices.length)];
}

function player_play(player_choice) {
  number_of_moves--;
  if (number_of_moves < 0) {
    display_result(`GAME OVER. Out of moves!`);
    return;
  }
  // we will compare the player_choice with computer_choice
  // '===' strict equality operator {5 === 5 would return true but 5 === '5' would return false}
  const computer_choice = computer_play();

  if (computer_choice === player_choice) {
    display_result(`It's a draw!`);
  } 
  else if (
    (computer_choice === "Scissor" && player_choice === "Paper") ||
    (computer_choice === "Rock" && player_choice === "Scissor") ||
    (computer_choice === "Paper" && player_choice === "Rock")
  ) 
  {
    Computer++;
    display_result(
      `Computer wins!\n ${computer_choice} beats ${player_choice}`
    );
  } else {
    Player++;
    display_result(`You win!\n ${player_choice} beats ${computer_choice}`);
  }
  update_score_and_moves();
}

function update_score_and_moves() {
  //[0] index refers to the first element with the .score-display class (Player score input).
  const scoreDisplay = document.querySelectorAll(".score-display");
  scoreDisplay[0].value = Player; // Player's score
  scoreDisplay[1].value = Computer; // Computer's score
  scoreDisplay[2].value = number_of_moves; // Moves left

  if (number_of_moves === 0) {
    document.querySelector("#restartDiv").style.display = "block"; //// Display the restartDiv
  }
}

function display_result(result_string) {
  document.querySelector("#display").value = result_string;
}

function restartGame() {
  // Reset scores and moves
  Player = 0;
  Computer = 0;
  number_of_moves = 10;

  // Hide the restart button again
  document.querySelector("#restartDiv").style.display = "none";

  // Update scores and moves display
  update_score_and_moves();
}
// Initialize the display with initial values
update_score_and_moves();
