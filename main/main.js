const generateAnswer = require('./AnswerGenerator');
const compare = require('./Comparetor');
const parse = require('./Parser');

function Game(answerGenerator) {
    return {
        answer : answerGenerator ? answerGenerator.generateAnswer() : generateAnswer(),
        check: function (input) {
            let compareResult = compare(this.answer, parse(input));
            return formatResult(compareResult);
        }
    }
};

function formatResult(result) {
    return `${result.correct}A${result.onlyInclude}B`;
}

module.exports = {
    Game
}