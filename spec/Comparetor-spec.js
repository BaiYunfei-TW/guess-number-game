const compare = require('../main/Comparetor');

describe('test compare answer with input', () => {
    it('should return 4A0B when the input in corret', () => {
        const answer = [1, 2, 3, 4];
        const input = [1, 2, 3, 4];
        const result = compare(answer, input);
        expect(result).toEqual('4A0B');
    });
});