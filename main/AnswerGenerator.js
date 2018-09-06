function getRandomNumber() {
    return Math.floor(Math.random(1) * 10);
}

module.exports = function generateAnswer() {
    const answer = [];
    while (answer.length < 4) {
        let num = getRandomNumber();
        while (answer.includes(num)) {
            num = getRandomNumber();
        }
        answer.push(num);
    }
    return answer;
};