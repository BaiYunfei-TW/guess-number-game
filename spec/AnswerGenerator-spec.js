const generateAnswer = require('../main/AnswerGenerator');

describe('test generate answer', () => {
    it('should return answer array with length 4', () => {
        const answer = generateAnswer();
        expect(answer.length).toBe(4);
    });

    it('should return answer array with 4 number', () => {
        const answer = generateAnswer();
        for(let i = 0; i < 4; i++){
            expect(typeof answer[i]).toBe('number');
        }
    });
});