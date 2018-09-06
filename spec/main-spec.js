const {Game} = require('../main/main');
const generateAnswer = require('../main/AnswerGenerator');

describe('main()', () => {

    it('should return 2A1B when the 3 number is correct', () => {
        const input = '1 2 5 3';

        const game = new Game({generateAnswer: () => [1,2,3,4]});
        const result = game.check(input);

        const expected = '2A1B';
        expect(result).toEqual(expected);
    });
});