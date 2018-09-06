const generateAnswer = require('../main/AnswerGenerator');

describe('test generate answer', () => {
    it('should return answer array with length 4', () => {
        const answer = generateAnswer();
        expect(answer.length).toBe(4);
    })
});