function RPS() {};

function Rock() {
	this.type = "Rock";
};
function Paper() {
	this.type = "Paper";
};

function Scissors() {
	this.type = "Scissors";
};

RPS.prototype.beatsScissors = function(rock) {
	return('Rock');
};

RPS.prototype.beatsRock = function(paper) {
	return('Paper');
};

RPS.prototype.beatsPaper = function(scissors) {
	return('Scissors');
};