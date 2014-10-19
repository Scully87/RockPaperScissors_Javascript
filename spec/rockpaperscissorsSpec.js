describe('RockPaperScissors', function() {

	describe('Should be able to score all possibilities', function() {

		it('User Rock beats Computer Scissors', function() {
			choice1 === "Rock"
			choice2 === "Scissors"
			expect(Compare(choice1, choice2)).toEqual("Rock beats Scissors, User wins!")
		});

		it('Computer Rock beats player Scissors', function() {
			choice2 === "Rock"
			choice1 === "Scissors"
			expect(Compare(choice2, choice1)).toEqual("Rock beats Scissors, Computer wins!")
		});

		it('User Paper beats Computer Rock', function() {
			choice1 === "Paper"
			choice2 === "Rock"
			expect(Compare(choice1, choice2)).toEqual("Paper beats Rock, User wins!")
		});

		it('Computer Paper beats player Rock', function() {
			choice2 === "Paper"
			choice1 === "Rock"
			expect(Compare(choice2, choice1)).toEqual("Paper beats Rock, Computer wins!")
		});

		it('User Scissors beats Paper', function() {
			choice1 === "Scissors"
			choice2 === "Paper"
			expect(Compare(choice1, choice2)).toEqual("Scissors beats Paper, User wins!");
		});

		it('Computer Scissors beats player Paper', function() {
			choice2 === "Scissors"
			choice1 === "Paper"
			expect(Compare(choice2, choice1)).toEqual("Scissors beats Paper, Computer wins!")
		});

		it('User choice draws with Computer choice', function() {
			expect(Compare(choice1, choice2)).toEqual("Result is a Draw");
		});

	});

});

