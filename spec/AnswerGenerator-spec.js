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

    it('should return answer array with 4 different number', () => {
        const answer = generateAnswer();
        let uniqueItem = answer.filter(i => answer.indexOf(i) === answer.lastIndexOf(i));
        expect(uniqueItem.length).toBe(answer.length);
    });

    it('should return different answer in two terms', () => {
        const answer1 = generateAnswer();
        const answer2 = generateAnswer();
        let sameQuantity = answer1.reduce((sameQuantity, num, index) => {
            if (answer2[index] === num) {
                sameQuantity ++;
            }
            return sameQuantity;
        }, 0);
        expect(sameQuantity).toBeLessThan(4);
    });
});
