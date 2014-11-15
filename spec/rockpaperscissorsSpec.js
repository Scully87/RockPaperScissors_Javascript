describe('RockPaperScissors', function() {

	describe('Should be able to score all possibilities', function() {

		beforeEach(function() {
			rock = new Rock();
			paper = new Paper();
			scissors = new Scissors();
		});

		it('User Rock beats Computer Scissors', function() {
			expect(Compare(rock, scissors)).toEqual("Rock beats Scissors, User wins!")
		});

		it('Computer Rock beats player Scissors', function() {
			expect(Compare.call(choice2, choice1)).toEqual("Rock beats Scissors, Computer wins!")
		});

		it('User Paper beats Computer Rock', function() {
			expect(Compare.call(choice1, choice2)).toEqual("Paper beats Rock, User wins!")
		});

		it('Computer Paper beats player Rock', function() {
			expect(Compare.call(choice2, choice1)).toEqual("Paper beats Rock, Computer wins!")
		});

		it('User Scissors beats Paper', function() {
			expect(Compare.call(choice1, choice2)).toEqual("Scissors beats Paper, User wins!");
		});

		it('Computer Scissors beats player Paper', function() {
			expect(Compare.call(choice2, choice1)).toEqual("Scissors beats Paper, Computer wins!")
		});

		it('User choice draws with Computer choice', function() {
			expect(Compare.call(choice1, choice2)).toEqual("Result is a Draw");
		});

	});

});

