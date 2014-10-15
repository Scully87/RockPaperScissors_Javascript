describe('Rock Paper Scissors', function() {

	beforeEach(function () {
			rps = new RPS;
			rock = new Rock;
			paper = new Paper;
			scissors = new Scissors;
	});

	describe('Gestures of the game are', function() {

			it('Rock', function() {
				expect(rock.type).toEqual('Rock');
			});

			it('Paper', function() {
				expect(paper.type).toEqual('Paper');
			});

			it('Scissors', function() {
				expect(scissors.type).toEqual('Scissors');
			});

	});

	describe('The rules are', function() {

		it('Rock beats Scissors', function() {
			expect(rps.beatsScissors(rock)).toEqual('Rock');
		});

		it('Paper beats Rock', function() {
			expect(rps.beatsRock(paper)).toEqual('Paper');
		});

		it('Scissors beats Paper', function() {
			expect(rps.beatsPaper(scissors)).toEqual('Scissors');
		});

	});

});