const parseInput = require('../main/Parser');

describe('test parse input', () => {
    it('should return answer array', () => {
        const answer = parseInput('1 2 3 4');
        expect(answer).toEqual([1, 2, 3, 4]);
    });
});