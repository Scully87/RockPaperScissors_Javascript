function RockPaperScissors() {};

var userChoice = prompt("Do you choose Rock, Paper, or Scissors?");

var computerChoice = Math.random()
	if(computerChoice < 0.34)
		computerChoice = "Rock";
	else if(computerChoice <= 0.67)
			computerChoice = "Paper";
	else 
		computerChoice = "Scissors";

choice1 = userChoice
choice2 = computerChoice

function Compare(choice1, choice2){
	if(choice1===choice2)
		return('Result is a Draw');
	if ((choice1==="Rock") && (choice2==="Scissors"))
			return ("Rock beats Scissors, User wins!");
		else
			return ("Paper beats Rock, Computer wins!")
	if ((choice1==="Paper") && (choice2==="Rock"))
			return ("Paper beats Rock, User wins!");
		else
			return ("Scissors beats Paper, Computer wins!")
	if ((choice1==="Scissors") && (choice2==="Paper"))
			return ("Scissors beats Paper, User wins!");
		else
			return ("Rock beats Scissors, Computer wins!");
};

console.log(Compare(choice1,choice2));

var result = alert(Compare(choice1, choice2))