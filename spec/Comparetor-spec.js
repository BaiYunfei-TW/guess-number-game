const compare = require('../main/Comparetor');

describe('test compare answer with input', () => {
    it('should return 4A0B when the input is correct', () => {
        const answer = [1, 2, 3, 4];
        const input = [1, 2, 3, 4];
        const result = compare(answer, input);
        expect(result).toEqual('4A0B');
    });

    it('should return 3A0B when the 3 number is correct', () => {
        const answer = [1, 2, 3, 4];
        const input = [1, 2, 3, 5];
        const result = compare(answer, input);
        expect(result).toEqual('3A0B');
    });
});